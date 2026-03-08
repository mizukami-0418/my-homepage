"use client";

import { useCallback, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Service = {
  title: string;
  subtitle: string;
  description: string[];
  tech: string;
  icon: string;
  accent: string;
};

const services: Service[] = [
  {
    title: "Webサイト制作",
    subtitle: "Website",
    icon: "🌐",
    accent:
      "from-blue-100/60 to-sky-100/60 border-blue-200 dark:from-blue-900/40 dark:to-sky-900/40 dark:border-blue-700",
    description: [
      "コーポレートサイト",
      "ポートフォリオサイト",
      "LP（ランディングページ）",
      "ブログ・情報サイト",
    ],
    tech: "Next.js / React / Tailwind CSS",
  },
  {
    title: "Webアプリ開発",
    subtitle: "Web App",
    icon: "📱",
    accent:
      "from-violet-100/60 to-purple-100/60 border-violet-200 dark:from-violet-900/40 dark:to-purple-900/40 dark:border-violet-700",
    description: [
      "業務管理ツール",
      "フォーム・データ管理",
      "API連携アプリ",
      "会員・予約システム",
    ],
    tech: "Django / Supabase / Vercel / Docker",
  },
  {
    title: "グラフィックデザイン",
    subtitle: "Design",
    icon: "🎨",
    accent:
      "from-pink-100/60 to-rose-100/60 border-pink-200 dark:from-pink-900/40 dark:to-rose-900/40 dark:border-pink-700",
    description: [
      "ロゴ・ブランドデザイン",
      "バナー・SNS画像",
      "名刺・チラシ",
      "アイコン制作",
    ],
    tech: "Figma / Illustrator / Photoshop",
  },
  {
    title: "UI / UXデザイン",
    subtitle: "UI/UX",
    icon: "✏️",
    accent:
      "from-amber-100/60 to-yellow-100/60 border-amber-200 dark:from-amber-900/40 dark:to-yellow-900/40 dark:border-amber-700",
    description: [
      "ワイヤーフレーム作成",
      "プロトタイプ制作",
      "デザインシステム構築",
      "使いやすさの改善提案",
    ],
    tech: "Figma / FigJam",
  },
  {
    title: "改修・保守・サポート",
    subtitle: "Support",
    icon: "🛠️",
    accent:
      "from-emerald-100/60 to-teal-100/60 border-emerald-200 dark:from-emerald-900/40 dark:to-teal-900/40 dark:border-emerald-700",
    description: [
      "既存サイトの修正・改善",
      "小規模な機能追加",
      "技術相談・アドバイス",
      "表示速度・SEO改善",
    ],
    tech: "",
  },
  {
    title: "コンテンツ制作支援",
    subtitle: "Content",
    icon: "📝",
    accent:
      "from-orange-100/60 to-amber-100/60 border-orange-200 dark:from-orange-900/40 dark:to-amber-900/40 dark:border-orange-700",
    description: [
      "ライティング・文章整理",
      "写真選定・素材準備",
      "SNS投稿テンプレート",
      "プロフィールページ作成",
    ],
    tech: "",
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

export default function ServicesSection() {
  const titleReveal = useReveal();
  const cardsReveal = useReveal();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[index] as HTMLElement;
    if (!card) return;
    container.scrollTo({
      left: card.offsetLeft - container.offsetLeft - 16,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.scrollWidth / services.length;
    setActiveIndex(Math.round(scrollLeft / cardWidth));
  };

  return (
    <section id="services" className="overflow-hidden bg-background py-20 px-4">
      <div className="mx-auto max-w-5xl">
        {/* ── タイトル ── */}
        <div
          ref={titleReveal.ref as (el: HTMLDivElement | null) => void}
          className={cn(
            "text-center mb-12 transition-all duration-700 ease-out",
            titleReveal.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10",
          )}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Services
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            提供サービス
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Web制作からデザイン・開発・サポートまで、ワンストップでお任せください。
          </p>
        </div>

        {/* ── カードスライダー ── */}
        <div
          ref={cardsReveal.ref as (el: HTMLDivElement | null) => void}
          className={cn(
            "transition-all duration-700 ease-out",
            cardsReveal.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12",
          )}
        >
          {/* overflow-hidden を外すため、section側のclipを一時解除するラッパー */}
          <div className="relative -mx-4 px-4 overflow-x-auto overflow-y-visible">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-5 snap-x snap-mandatory pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {services.map((service, i) => (
                <div
                  key={service.title}
                  className={cn(
                    "snap-start shrink-0 w-72 sm:w-80",
                    "rounded-3xl border bg-linear-to-br p-6 shadow-sm",
                    "hover:shadow-lg hover:-translate-y-1",
                    "transition-all duration-300 cursor-default",
                    service.accent,
                    cardsReveal.visible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-16",
                  )}
                  style={{
                    transitionDelay: cardsReveal.visible
                      ? `${i * 80}ms`
                      : "0ms",
                    transitionDuration: "600ms",
                  }}
                >
                  {/* カードヘッダー */}
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{service.icon}</span>
                    <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                      {service.subtitle}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-foreground mb-4">
                    {service.title}
                  </h3>

                  {/* サービス内容リスト */}
                  <ul className="space-y-2 mb-5">
                    {service.description.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-foreground/80"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* 技術スタック */}
                  {service.tech && (
                    <p className="text-xs text-muted-foreground border-t border-foreground/10 pt-4 leading-relaxed">
                      {service.tech}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          className={cn(
            "mt-14 text-center transition-all duration-700 ease-out",
            cardsReveal.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8",
          )}
          style={{ transitionDelay: "600ms" }}
        >
          <p className="text-sm text-muted-foreground mb-5">
            「どのサービスが合うか分からない」という方もお気軽にご相談ください。
          </p>
          <Button asChild size="lg">
            <Link href="/contact">お問い合わせはこちら</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
