"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SLIDES = [
  { id: 1, image: "/images/hero-bg1.jpg" },
  { id: 2, image: "/images/hero-bg2.jpg" },
  { id: 3, image: "/images/hero-bg3.jpg" },
  { id: 4, image: "/images/hero-bg4.jpg" },
  { id: 5, image: "/images/hero-bg5.jpg" },
];

const SLIDE_INTERVAL = 3000; // 3秒ごとに切り替え

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 800);
    },
    [isTransitioning],
  );

  const goToNext = useCallback(() => {
    goToSlide((current + 1) % SLIDES.length);
  }, [current, goToSlide]);

  useEffect(() => {
    const timer = setInterval(goToNext, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden">
      {/* スライド画像 */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-800 ease-in-out",
            index === current ? "opacity-100" : "opacity-0",
          )}
          style={{
            backgroundImage: `url('${slide.image}')`,
            transitionDuration: "800ms",
          }}
          aria-hidden={index !== current}
        />
      ))}

      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-white/70" />

      {/* コンテンツ */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1
            className="font-bold text-slate-900"
            style={{
              fontFamily: "var(--font-dancing-script)",
              fontSize: "clamp(3rem, 8vw, 4.5rem)",
            }}
          >
            tomo Web Studio
          </h1>

          <p className="mt-2 text-xl text-slate-600">
            小さなスタジオから、確かな信頼を
          </p>

          <p className="mt-4 mb-5 text-base text-slate-600 leading-relaxed">
            Webサイト制作から小規模なシステム開発まで。
            <br />
            個人事業主・フリーランスのためのやさしいホームページ制作。
            <br />
            「何から始めればいいか分からない」方も大歓迎です
            <br />
            個人スタジオだからこそできる、 丁寧で誠実な Web 制作を行っています。
          </p>

          <Button asChild size="lg">
            <Link href="/contact">お問い合わせはこちら</Link>
          </Button>
        </div>
      </div>

      {/* ドットインジケーター */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`スライド ${index + 1} に移動`}
            className={cn(
              "rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900",
              index === current
                ? "w-6 h-2.5 bg-slate-800"
                : "w-2.5 h-2.5 bg-slate-400 hover:bg-slate-600",
            )}
          />
        ))}
      </div>
    </section>
  );
}
