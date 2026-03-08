"use client";

import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const plans = [
  {
    icon: "📄",
    title: "LP制作",
    subtitle: "Landing Page",
    price: "¥ 58,000",
    unit: "〜",
    note: "一般相場：8〜15万円",
    description: "商品・サービスを魅力的に伝える1ページ構成。集客・販促に。",
    features: [
      "デザイン・コーディング一式",
      "レスポンシブ対応（SP/PC）",
      "お問い合わせフォーム設置",
      "公開後の軽微な修正1回分",
    ],
    accent: "border-border",
    badge: "",
  },
  {
    icon: "🌐",
    title: "Webサイト制作",
    subtitle: "Corporate / Portfolio",
    price: "¥ 98,000",
    unit: "〜",
    note: "一般相場：15〜25万円",
    description: "会社・個人事業主向けのコーポレートサイトやポートフォリオ。",
    features: [
      "5ページ程度まで対応",
      "デザイン・コーディング一式",
      "レスポンシブ対応（SP/PC）",
      "お問い合わせフォーム設置",
      "SEO基本設定",
      "公開後の軽微な修正2回分",
    ],
    accent: "border-primary/50 shadow-lg shadow-primary/10",
    badge: "人気",
  },
  {
    icon: "📱",
    title: "小規模Webアプリ",
    subtitle: "Web Application",
    price: "¥ 168,000",
    unit: "〜",
    note: "一般相場：25〜50万円",
    description: "業務管理ツール・予約システムなど、小規模なWebアプリ開発。",
    features: [
      "要件定義・設計から対応",
      "フロント＋バックエンド実装",
      "データベース設計・構築",
      "管理画面の作成",
      "デプロイ・サーバー設定",
      "納品後サポート（1ヶ月）",
    ],
    accent: "border-border",
    badge: "",
  },
];

const options = [
  { label: "ロゴ・バナーデザイン", price: "¥ 15,000〜" },
  { label: "追加ページ制作（1ページ）", price: "¥ 15,000〜" },
  { label: "保守・運用サポート（月額）", price: "¥ 8,000〜" },
  { label: "既存サイトの改修・修正", price: "¥ 10,000〜" },
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

export default function PricingSection() {
  const titleReveal = useReveal();
  const cardsReveal = useReveal();
  const optionReveal = useReveal();

  return (
    <section id="price" className="overflow-hidden bg-background py-20 px-4">
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
            Pricing
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            料金目安
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            個人スタジオだからできる、リーズナブルな価格設定。
            <br />
            事前に必ずお見積りをご提示しますので、安心してご相談ください。
          </p>
        </div>

        {/* ── 料金カード ── */}
        <div
          ref={cardsReveal.ref as (el: HTMLDivElement | null) => void}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {plans.map((plan, i) => (
            <div
              key={plan.title}
              className={cn(
                "group relative flex flex-col rounded-3xl border-2 bg-card p-6 shadow-sm",
                "hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300",
                plan.accent,
                cardsReveal.visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12",
              )}
              style={{
                transitionDelay: cardsReveal.visible ? `${i * 120}ms` : "0ms",
                transitionDuration: "600ms",
              }}
            >
              {/* バッジ */}
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow">
                  {plan.badge}
                </span>
              )}

              {/* ヘッダー */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center text-xl flex-shrink-0">
                  {plan.icon}
                </div>
                <div>
                  <p className="font-bold text-sm text-foreground">
                    {plan.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {plan.subtitle}
                  </p>
                </div>
              </div>

              {/* 価格 */}
              <div className="mb-1">
                <span className="text-3xl font-extrabold text-foreground tracking-tight">
                  {plan.price}
                </span>
                <span className="text-base text-muted-foreground ml-1">
                  {plan.unit}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mb-4 line-through decoration-muted-foreground/50">
                {plan.note}
              </p>

              {/* 説明 */}
              <p className="text-xs text-muted-foreground leading-relaxed mb-5 border-t border-border pt-4">
                {plan.description}
              </p>

              {/* 機能リスト */}
              <ul className="space-y-2 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-xs text-foreground/80"
                  >
                    <span className="mt-0.5 text-primary flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.badge ? "default" : "outline"}
                size="sm"
                className="w-full rounded-xl"
              >
                <Link href="/contact">相談してみる</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* ── オプション ── */}
        <div
          ref={optionReveal.ref as (el: HTMLDivElement | null) => void}
          className={cn(
            "mt-16 transition-all duration-700 ease-out",
            optionReveal.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8",
          )}
        >
          <p className="text-center text-sm font-semibold text-foreground mb-6">
            オプション料金
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {options.map((opt, i) => (
              <div
                key={opt.label}
                className={cn(
                  "flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4",
                  "hover:border-primary/30 hover:shadow-sm transition-all duration-300",
                  optionReveal.visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6",
                )}
                style={{
                  transitionDelay: optionReveal.visible ? `${i * 80}ms` : "0ms",
                  transitionDuration: "500ms",
                }}
              >
                <span className="text-sm text-foreground">{opt.label}</span>
                <span className="text-sm font-semibold text-primary ml-4 whitespace-nowrap">
                  {opt.price}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground leading-relaxed">
            ※
            表示価格はすべて税抜きの目安です。要件によって変動する場合があります。
            <br />
            まずはお気軽にご相談ください。一緒に最適なプランを考えます。
          </p>
        </div>
      </div>
    </section>
  );
}
