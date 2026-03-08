"use client";

import { useState } from "react";
import { submitContact } from "@/app/actions/contact";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function action(formData: FormData) {
    const result = await submitContact(formData);
    if (!result.success) {
      setError(result.error ?? "送信に失敗しました");
      setStatus("error");
      return;
    }
    setStatus("success");
  }

  // ── 送信完了 ──
  if (status === "success") {
    return (
      <div className="min-h-[50vh] flex items-center justify-center px-4">
        <div className="w-full max-w-md text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl mx-auto">
            🎉
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground mb-2">
              送信が完了しました
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              お問い合わせありがとうございます。
              <br />
              自動返信メールをお送りしました。
              <br />
              2〜3営業日以内にご連絡いたします。
            </p>
          </div>
          <Button asChild size="lg" className="rounded-full px-10">
            <Link href="/">トップページに戻る</Link>
          </Button>
        </div>
      </div>
    );
  }

  // ── フォーム ──
  return (
    <form action={action} className="mx-auto max-w-xl flex flex-col gap-6">
      {/* お名前 */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-semibold text-foreground">
          お名前 <span className="text-primary ml-1">*</span>
        </Label>
        <Input
          id="name"
          name="name"
          placeholder="山田 太郎"
          required
          className="rounded-xl border-border bg-card text-foreground placeholder:text-muted-foreground focus:ring-primary/30"
        />
      </div>

      {/* メールアドレス */}
      <div className="space-y-2">
        <Label
          htmlFor="email"
          className="text-sm font-semibold text-foreground"
        >
          メールアドレス <span className="text-primary ml-1">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="example@email.com"
          required
          className="rounded-xl border-border bg-card text-foreground placeholder:text-muted-foreground focus:ring-primary/30"
        />
      </div>

      {/* お問い合わせ内容 */}
      <div className="space-y-2">
        <Label
          htmlFor="message"
          className="text-sm font-semibold text-foreground"
        >
          お問い合わせ内容 <span className="text-primary ml-1">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="ご依頼内容、ご予算、ご希望の納期などをお気軽にお書きください。"
          required
          rows={6}
          className="rounded-xl border-border bg-card text-foreground placeholder:text-muted-foreground focus:ring-primary/30 resize-none"
        />
      </div>

      {/* エラー */}
      {status === "error" && (
        <Alert variant="destructive" className="rounded-xl">
          <AlertTitle>送信エラー</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* 注意書き */}
      <p className="text-xs text-muted-foreground text-center">
        送信後、自動返信メールが届きます。迷惑メールフォルダもご確認ください。
      </p>

      {/* ボタン */}
      <div className={cn("flex flex-col gap-3")}>
        <Button
          type="submit"
          size="lg"
          className="w-full rounded-full font-bold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
        >
          送信する
        </Button>
        <Button
          asChild
          variant="outline"
          size="lg"
          className="w-full rounded-full"
        >
          <Link href="/">トップページに戻る</Link>
        </Button>
      </div>
    </form>
  );
}
