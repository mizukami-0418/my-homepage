"use client";

import ContactForm from "@/app/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <>
      {/* ── ヒーロー画像 ── */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-bg1.jpg')" }}
        />
        <div className="absolute inset-0 bg-white/60 dark:bg-black/50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            Contact
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            お問い合わせ
          </h1>
        </div>
      </div>

      {/* ── フォームエリア ── */}
      <div className="py-16 px-4">
        <div className="mx-auto max-w-xl text-center mb-10">
          <p className="text-sm text-muted-foreground leading-relaxed">
            まずはご相談だけでも大丈夫です。お気軽にご連絡ください。
            <br />
            「こんなこと聞いていいのかな？」という内容も歓迎です。
          </p>
        </div>

        <ContactForm />
      </div>
    </>
  );
}
