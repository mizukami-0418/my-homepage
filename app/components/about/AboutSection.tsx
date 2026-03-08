"use client";

import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

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

const descriptions = [
  "tomo ― 友達のように、共に歩む Web スタジオ",
  "tomo Web Studio の tomo には、「友達」と「共に」という二つの意味があります。",
  "一人で事業をされている方が、安心して相談できる存在でありたい。",
  "小さなスタジオだからこそできる、丁寧で誠実な対応を大切にし、確かな信頼をお届けします。",
];

export default function AboutSection() {
  const leftReveal = useReveal();
  const rightReveal = useReveal();

  return (
    <section id="about" className="overflow-hidden bg-background py-20 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* ── 左：画像（左からスライドイン） ── */}
          <div
            ref={leftReveal.ref as (el: HTMLDivElement | null) => void}
            className={cn(
              "transition-all duration-700 ease-out",
              leftReveal.visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-16",
            )}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-4/3">
              <Image
                src="/images/about-image.png"
                alt="About Me"
                className="w-full h-full object-cover"
                width={600}
                height={450}
              />
              <div className="absolute inset-0 bg-linear-to-bl from-primary/10 to-transparent" />
            </div>
          </div>

          {/* ── 右：テキスト（右からスライドイン） ── */}
          <div
            ref={rightReveal.ref as (el: HTMLDivElement | null) => void}
            className={cn(
              "transition-all duration-700 ease-out delay-200",
              rightReveal.visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-16",
            )}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              About
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">
              About Me
            </h2>

            <div className="space-y-4">
              {descriptions.map((text, i) => (
                <p
                  key={i}
                  className={cn(
                    "text-sm text-muted-foreground leading-relaxed",
                    i === 0 && "text-base font-semibold text-foreground",
                    "transition-all duration-600 ease-out",
                    rightReveal.visible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8",
                  )}
                  style={{
                    transitionDelay: rightReveal.visible
                      ? `${300 + i * 100}ms`
                      : "0ms",
                    transitionDuration: "600ms",
                  }}
                >
                  {text}
                </p>
              ))}
            </div>

            {/* 区切り線 + サブテキスト */}
            <div
              className={cn(
                "mt-8 pt-6 border-t border-border transition-all duration-700",
                rightReveal.visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4",
              )}
              style={{ transitionDelay: "700ms" }}
            >
              <p className="text-xs text-muted-foreground">
                📍 個人スタジオ・フルリモート対応
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
