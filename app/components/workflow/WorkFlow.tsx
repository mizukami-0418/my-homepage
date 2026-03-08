"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Step = {
  step: number;
  title: string;
  description: string;
  icon: string;
};

const steps: Step[] = [
  {
    step: 1,
    icon: "💬",
    title: "まずはご相談",
    description:
      "「何から始めればいいか分からない」状態でも大丈夫です。ご要望やお悩みをお聞きしながら、方向性を一緒に整理していきます。",
  },
  {
    step: 2,
    icon: "📋",
    title: "ご提案・お見積り",
    description:
      "ヒアリング内容をもとに、構成やデザインの方向性をご提案します。内容と金額にご納得いただいてから制作を開始します。",
  },
  {
    step: 3,
    icon: "🎨",
    title: "制作・ご確認",
    description:
      "デザイン・コーディングを進めながら、途中段階でご確認いただきます。修正のご要望もお気軽にお伝えください。",
  },
  {
    step: 4,
    icon: "🚀",
    title: "公開・納品",
    description:
      "最終確認後、ホームページを公開します。公開後の簡単な修正やご相談にも対応しています。",
  },
];

function useReveal() {
  const [visible, setVisible] = useState(false);
  const ref = useCallback((el: HTMLElement | null) => {
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
  }, []);
  return { ref, visible };
}

export function WorkflowSection() {
  const titleReveal = useReveal();
  const stepsReveal = useReveal();
  const footerReveal = useReveal();

  return (
    <>
      {/* ── ヒーロー画像 ── */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-bg1.jpg')" }}
        />
        <div className="absolute inset-0 bg-white/65 dark:bg-black/55" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            Workflow
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            制作の流れ
          </h1>
        </div>
      </div>

      {/* ── コンテンツ ── */}
      <section className="overflow-hidden bg-background py-20 px-4">
        <div className="mx-auto max-w-5xl">
          {/* タイトル */}
          <div
            ref={titleReveal.ref as (el: HTMLDivElement | null) => void}
            className={cn(
              "text-center mb-14 transition-all duration-700 ease-out",
              titleReveal.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8",
            )}
          >
            <p className="text-sm text-muted-foreground">
              ご相談から公開まで、シンプルで分かりやすい流れです。
            </p>
          </div>

          {/* ステップ */}
          <div
            ref={stepsReveal.ref as (el: HTMLDivElement | null) => void}
            className="grid gap-6 md:grid-cols-2"
          >
            {steps.map((step, i) => (
              <div
                key={step.step}
                className={cn(
                  "group relative flex gap-5 rounded-3xl border border-border bg-card p-6 shadow-sm",
                  "hover:shadow-lg hover:-translate-y-1 hover:border-primary/30",
                  "transition-all duration-300",
                  stepsReveal.visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10",
                )}
                style={{
                  transitionDelay: stepsReveal.visible ? `${i * 100}ms` : "0ms",
                  transitionDuration: "600ms",
                }}
              >
                {/* ステップ番号 */}
                <div className="shrink-0">
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-2xl bg-primary/10 group-hover:bg-primary/15 transition-colors duration-300" />
                    <span className="relative text-2xl">{step.icon}</span>
                  </div>
                  <div className="mt-2 text-center">
                    <span className="text-xs font-bold text-primary/60">
                      STEP {step.step}
                    </span>
                  </div>
                </div>

                {/* コネクター（最後以外） */}
                {step.step < steps.length && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-muted-foreground/30 text-lg">
                    →
                  </div>
                )}

                {/* テキスト */}
                <div className="flex-1">
                  <h3 className="font-bold text-base text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* フロー矢印（モバイル用） */}
          <div className="flex justify-center mt-2 mb-2 md:hidden">
            <div className="flex flex-col items-center gap-1 text-muted-foreground/40">
              <div className="w-px h-6 bg-current" />
              <span className="text-lg">↓</span>
            </div>
          </div>

          {/* フッター */}
          <div
            ref={footerReveal.ref as (el: HTMLDivElement | null) => void}
            className={cn(
              "mt-16 text-center transition-all duration-700 ease-out",
              footerReveal.visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8",
            )}
            style={{ transitionDelay: "400ms" }}
          >
            <p className="text-sm text-muted-foreground mb-6">
              どんなことでも構いません。どうぞ遠慮なくお気軽にご相談ください。
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <Link href="/contact">お問い合わせはこちら</Link>
            </Button>
            <div className="mt-4">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors duration-200"
              >
                トップページへ戻る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
