"use client";

import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { works } from "./worksData";

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

export default function WorksSection() {
  const titleReveal = useReveal();
  const cardsReveal = useReveal();

  return (
    <section id="works" className="overflow-hidden bg-background py-20 px-4">
      <div className="mx-auto max-w-5xl">
        {/* ── タイトル ── */}
        <div
          ref={titleReveal.ref as (el: HTMLDivElement | null) => void}
          className={cn(
            "text-center mb-14 transition-all duration-700 ease-out",
            titleReveal.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8",
          )}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Works
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            制作実績
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            これまでに手がけた作品の一部をご紹介します。
          </p>
        </div>

        {/* ── カードグリッド ── */}
        <div
          ref={cardsReveal.ref as (el: HTMLDivElement | null) => void}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {works.map((work, i) => (
            <div
              key={work.title}
              className={cn(
                "group flex flex-col rounded-3xl border border-border bg-card shadow-sm overflow-hidden",
                "hover:shadow-xl hover:-translate-y-1.5 hover:border-primary/30",
                "transition-all duration-300",
                cardsReveal.visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12",
              )}
              style={{
                transitionDelay: cardsReveal.visible ? `${i * 100}ms` : "0ms",
                transitionDuration: "600ms",
              }}
            >
              {/* カラーバー */}
              <div
                className={cn(
                  "h-1.5 w-full bg-linear-to-r transition-all duration-300",
                  "from-primary/60 to-primary/20",
                  "group-hover:from-primary group-hover:to-primary/50",
                )}
              />

              <div className="flex flex-col flex-1 p-6">
                {/* タイトル */}
                <h3 className="font-bold text-base text-foreground mb-2 leading-snug">
                  {work.title}
                </h3>

                {/* 説明 */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {work.description}
                </p>

                {/* 主な機能 */}
                <div className="mb-5">
                  <p className="text-xs font-semibold text-foreground mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                    主な機能
                  </p>
                  <ul className="space-y-1.5">
                    {work.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-muted-foreground/40 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 技術スタック */}
                <div className="flex flex-wrap gap-1.5 mt-auto mb-5">
                  {work.techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-full border border-border bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* リンクボタン */}
                {work.demo && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full rounded-xl group-hover:border-primary/50 group-hover:text-primary transition-colors"
                  >
                    <a
                      href={work.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-1.5">🔗</span>
                      アプリケーションを見る
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
