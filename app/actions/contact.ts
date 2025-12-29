"use server";

import { supabase } from "@/app/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContact(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "必須項目が未入力です" };
  }

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
  await resend.emails.send({
    from: "お問い合わせ <no-reply@mail.toamoku.net>",
    to: email,

    subject: "【自動返信】お問い合わせありがとうございます",
    html: `
      <p>${name} 様</p>
      <p>この度はお問い合わせありがとうございます。</p>

      <p>以下の内容で受け付けました。</p>

      <hr />
      <p>${message.replace(/\n/g, "<br />")}</p>
      <hr />

      <p>内容を確認の上、2〜3営業日以内にご連絡いたします。</p>
    `,
  });

  // ③ 管理者通知（任意だが強い）
  await resend.emails.send({
    from: "通知 <no-reply@mail.toamoku.net>",
    to: process.env.ADMIN_EMAIL!,
    subject: "【新規お問い合わせ】",
    html: `
      <p>名前：${name}</p>
      <p>メール：${email}</p>
      <p>内容：</p>
      <p>${message.replace(/\n/g, "<br />")}</p>
    `,
  });

  return { success: true };
}
