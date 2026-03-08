"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

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

export function BlogLink() {
  const leftReveal = useReveal();
  const rightReveal = useReveal();

  return (
    <section id="blog" className="overflow-hidden bg-background py-20 px-4">
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
              Blog
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">
              tomo Qiita Articles
            </h2>

            <div className="space-y-3 mb-8">
              {[
                "日々の開発で得た気づきや学びをQiitaに投稿しています。",
                "初心者の方にも伝わるよう丁寧にまとめています。",
                "Python・React・設計・セキュリティ・ネットワーク・データベースなど、実務に活きる内容を中心に発信中です。",
              ].map((text, i) => (
                <p
                  key={i}
                  className={cn(
                    "text-sm text-muted-foreground leading-relaxed",
                    "transition-all duration-600 ease-out",
                    leftReveal.visible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-6",
                  )}
                  style={{
                    transitionDelay: leftReveal.visible
                      ? `${200 + i * 100}ms`
                      : "0ms",
                    transitionDuration: "600ms",
                  }}
                >
                  {text}
                </p>
              ))}
            </div>

            <Link
              href="/blog"
              className={cn(
                "inline-flex items-center gap-2.5 rounded-2xl border border-border bg-card px-5 py-3",
                "text-sm font-semibold text-foreground",
                "hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5",
                "transition-all duration-300",
              )}
            >
              <Image
                src="/images/logo-background-color.png"
                alt="Qiita"
                width={56}
                height={14}
                className="rounded"
              />
              記事一覧を見る
              <svg
                className="w-3.5 h-3.5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </Link>
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
                src="/images/blog-image.png"
                alt="Blog"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
