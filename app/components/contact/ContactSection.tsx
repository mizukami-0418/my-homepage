"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
      { threshold: 0.2 },
    );
    observer.observe(el);
  }, []);
  return { ref, visible };
}

const reassurances = [
  { icon: "💬", text: "ご相談だけでも大歓迎です" },
  { icon: "🤝", text: "無理な営業・契約の催促は一切なし" },
  { icon: "⚡", text: "原則24時間以内にご返答します" },
];

export default function ContactSection() {
  const reveal = useReveal();

  return (
    <section id="contact" className="overflow-hidden bg-background py-20 px-4">
      <div
        ref={reveal.ref as (el: HTMLDivElement | null) => void}
        className="mx-auto max-w-2xl"
      >
        {/* ── タイトル ── */}
        <div
          className={cn(
            "text-center mb-10 transition-all duration-700 ease-out",
            reveal.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8",
          )}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Contact
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
            お問い合わせ
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            「まだ決まっていない」「相談だけしたい」
            <br />
            そんな段階からでも、どうぞお気軽にご連絡ください。
          </p>
        </div>

        {/* ── 安心ポイント ── */}
        <div
          className={cn(
            "grid grid-cols-3 gap-3 mb-10 transition-all duration-700 ease-out",
            reveal.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8",
          )}
          style={{ transitionDelay: "150ms" }}
        >
          {reassurances.map((item, i) => (
            <div
              key={item.text}
              className={cn(
                "flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-4 text-center shadow-sm",
                "transition-all duration-500 ease-out",
                reveal.visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6",
              )}
              style={{
                transitionDelay: reveal.visible ? `${200 + i * 100}ms` : "0ms",
              }}
            >
              <span className="text-2xl">{item.icon}</span>
              <p className="text-xs text-muted-foreground leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div
          className={cn(
            "text-center transition-all duration-700 ease-out",
            reveal.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8",
          )}
          style={{ transitionDelay: "500ms" }}
        >
          <Button
            asChild
            size="lg"
            className="rounded-full px-10 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <Link href="/contact">お問い合わせはこちら</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
