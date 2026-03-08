// const strengths = [
//   "フロントエンド〜バックエンドまで一貫対応",
//   "小さく作って、早く改善する開発スタイル",
//   "技術記事執筆・個人開発による継続的な学習",
//   "専門用語を使わない丁寧なコミュニケーション",
// ];

// import {
//   SectionSplit,
//   SectionText,
//   SectionImage,
// } from "@/app/components/layout/SectionSplit";

// export default function StrengthsSection() {
//   return (
//     <div id="strengths">
//       <SectionSplit
//         left={<SectionText title="選ばれる理由" list={strengths} />}
//         right={
//           <SectionImage src="/images/strengths-image.jpg" alt="Strengths" />
//         }
//       />
//     </div>
//   );
// }

"use client";

import { useCallback, useState, useRef } from "react";
import { cn } from "@/lib/utils";

const strengths = [
  {
    icon: "⚡",
    title: "フロント〜バックエンドまで一貫対応",
    text: "デザインからサーバー構築まで、ひとりで完結。窓口が一本化されるため、認識のズレが生じにくく、スムーズに進みます。",
  },
  {
    icon: "🔄",
    title: "小さく作って、早く改善するスタイル",
    text: "完璧を目指して時間をかけるより、まず形にして一緒に育てていく開発スタイルを大切にしています。",
  },
  {
    icon: "💬",
    title: "専門用語を使わない丁寧な説明",
    text: "「難しくてよく分からなかった」がないよう、図や具体例を交えながら、分かりやすい言葉でご説明します。",
  },
  {
    icon: "📚",
    title: "継続的な学習と技術のアップデート",
    text: "技術記事の執筆や個人開発を通じ、常に最新の知識を取り入れています。時代遅れの技術でお届けしません。",
  },
  {
    icon: "🤝",
    title: "相談しやすい、近い距離感",
    text: "個人スタジオだからこそ、直接担当者と話せます。「こんなこと聞いてもいいの？」という小さな疑問も歓迎です。",
  },
  {
    icon: "💰",
    title: "無理のない価格設定",
    text: "大手制作会社のような中間コストがない分、適切な価格でご提供できます。予算に合わせた柔軟なご相談も可能です。",
  },
  {
    icon: "🚀",
    title: "スピーディーなレスポンス",
    text: "お問い合わせや修正依頼には、原則24時間以内にご返答。小回りの利く個人スタジオならではの対応力です。",
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

export default function StrengthsSection() {
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
    const cardWidth = container.scrollWidth / strengths.length;
    setActiveIndex(Math.round(container.scrollLeft / cardWidth));
  };

  return (
    <section
      id="strengths"
      className="overflow-hidden bg-background py-20 px-4"
    >
      <div className="mx-auto max-w-5xl">
        {/* ── タイトル ── */}
        <div
          ref={titleReveal.ref as (el: HTMLDivElement | null) => void}
          className={cn(
            "text-center mb-12 transition-all duration-700 ease-out",
            titleReveal.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8",
          )}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Strengths
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            選ばれる理由
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            小さなスタジオだからこそできる、丁寧さと誠実さをお届けします。
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
          <div className="relative -mx-4 px-4 overflow-x-auto overflow-y-visible">
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-5 snap-x snap-mandatory pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {strengths.map((s, i) => (
                <div
                  key={s.title}
                  className={cn(
                    "snap-start shrink-0 w-72 sm:w-80",
                    "rounded-3xl border border-border bg-card p-6 shadow-sm",
                    "hover:shadow-lg hover:-translate-y-1 hover:border-primary/30",
                    "transition-all duration-300 cursor-default",
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
                  {/* アイコン */}
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl mb-5">
                    {s.icon}
                  </div>

                  <h3 className="font-bold text-sm text-foreground mb-3 leading-snug">
                    {s.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {s.text}
                  </p>

                  {/* カード番号 */}
                  <p className="mt-6 text-right text-xs font-semibold text-primary/40">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
