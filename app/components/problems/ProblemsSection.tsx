"use client";

import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const problems = [
  {
    icon: "📉",
    text: "Webサイトが古く、集客につながっていない",
  },
  {
    icon: "🔁",
    text: "手作業の業務が多く、効率化したい",
  },
  {
    icon: "🛠️",
    text: "簡単な管理ツールを作りたいが、頼める人がいない",
  },
  {
    icon: "💬",
    text: "技術的な相談をできる相手がいない",
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
      { threshold: 0.15 },
    );
    observer.observe(el);
  }, []);

  return { ref, visible };
}

export default function ProblemsSection() {
  const leftReveal = useReveal();
  const rightReveal = useReveal();

  return (
    <section className="overflow-hidden bg-background py-20 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* ── 左：テキスト（左からスライドイン） ── */}
          <div
            ref={leftReveal.ref as (el: HTMLDivElement | null) => void}
            className={cn(
              "transition-all duration-700 ease-out",
              leftReveal.visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-16",
            )}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Problems
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">
              こんなお悩みは
              <br />
              ありませんか？
            </h2>

            <ul className="space-y-4">
              {problems.map((problem, i) => (
                <li
                  key={problem.text}
                  className={cn(
                    "flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm",
                    "hover:shadow-md hover:-translate-y-0.5 hover:border-primary/30",
                    "transition-all duration-300",
                    leftReveal.visible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8",
                  )}
                  style={{
                    transitionDelay: leftReveal.visible
                      ? `${200 + i * 100}ms`
                      : "0ms",
                    transitionDuration: "600ms",
                  }}
                >
                  <span className="text-2xl shrink-0">{problem.icon}</span>
                  <p className="text-sm text-foreground leading-relaxed pt-1">
                    {problem.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* ── 右：画像（右からスライドイン） ── */}
          <div
            ref={rightReveal.ref as (el: HTMLDivElement | null) => void}
            className={cn(
              "transition-all duration-700 ease-out delay-200",
              rightReveal.visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-16",
            )}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-4/3">
              <Image
                src="/images/problem-image.jpg"
                alt="お悩みのイメージ"
                className="w-full h-full object-cover"
                width={600}
                height={450}
              />
              {/* 画像オーバーレイ装飾 */}
              <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-transparent" />
            </div>

            {/* 画像下の装飾テキスト */}
            <p
              className={cn(
                "mt-6 text-sm text-muted-foreground text-center leading-relaxed",
                "transition-all duration-700 ease-out",
                rightReveal.visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4",
              )}
              style={{ transitionDelay: "500ms" }}
            >
              ひとつでも思い当たるなら、
              <br />
              まずは気軽にご相談ください。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
