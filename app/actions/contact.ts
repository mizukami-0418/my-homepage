"use server";

import { supabase } from "@/app/lib/supabase";
import { headers } from "next/headers";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1時間

/**
 * HTML 特殊文字をエスケープしてインジェクション攻撃を防ぐ
 */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function checkRateLimit(ip: string): Promise<boolean> {
  const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_MS).toISOString();

  const { count } = await supabase
    .from("contact_rate_limits")
    .select("*", { count: "exact", head: true })
    .eq("ip", ip)
    .gte("created_at", windowStart);

  return (count ?? 0) < RATE_LIMIT_MAX;
}

async function recordRequest(ip: string): Promise<void> {
  await supabase.from("contact_rate_limits").insert({ ip });

  // 24時間以上前の古いレコードを削除
  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  await supabase
    .from("contact_rate_limits")
    .delete()
    .lt("created_at", oneDayAgo);
}

export async function submitContact(formData: FormData) {
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  const allowed = await checkRateLimit(ip);
  if (!allowed) {
    return {
      success: false,
      error: "送信回数の上限に達しました。1時間後に再度お試しください。",
    };
  }

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "必須項目が未入力です" };
  }

  await recordRequest(ip);

  // ① Supabaseに保存
  const { error } = await supabase.from("contacts").insert({
    name,
    email,
    message,
  });

  if (error) {
    return { success: false, error: "保存に失敗しました" };
  }

  // ② 自動返信メール（ユーザー）
  const escapedName = escapeHtml(name);
  const escapedMessage = escapeHtml(message).replace(/\n/g, "<br />");

  await resend.emails.send({
    from: "お問い合わせ <no-reply@mail.toamoku.net>",
    to: email,

    subject: "【自動返信】お問い合わせありがとうございます",
    html: `
      <p>${escapedName} 様</p>
      <p>この度はお問い合わせありがとうございます。</p>

      <p>以下の内容で受け付けました。</p>

      <hr />
      <p>${escapedMessage}</p>
      <hr />

      <p>内容を確認の上、2〜3営業日以内にご連絡いたします。</p>
    `,
  });

  // ③ 管理者通知（任意だが強い）
  const escapedEmail = escapeHtml(email);

  await resend.emails.send({
    from: "通知 <no-reply@mail.toamoku.net>",
    to: process.env.ADMIN_EMAIL!,
    subject: "【新規お問い合わせ】",
    html: `
      <p>名前：${escapedName}</p>
      <p>メール：${escapedEmail}</p>
      <p>内容：</p>
      <p>${escapedMessage}</p>
    `,
  });

  return { success: true };
}
