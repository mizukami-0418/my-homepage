// "use client";

// import { Box, Button, Link, Paper, Typography } from "@mui/material";

// export function TargetAudienceSection() {
//   const items = [
//     "はじめてホームページを作ろうと考えている方",
//     "何を載せればいいのか分からず、なかなか進まない方",
//     "SNSだけでは少し信頼面が不安に感じる方",
//     "できるだけ費用を抑えて、無理なく始めたい方",
//     "専門用語が多い説明は正直ちょっと苦手な方",
//     "一人で相談できる相手が欲しいと感じている方",
//   ];

//   return (
//     <section className="bg-background py-20 border rounded-4xl">
//       <div className="mx-auto max-w-5xl px-4">
//         {/* Title */}
//         <div className="text-center mb-12">
//           <Typography variant="h4" component="h2" fontWeight="bold">
//             こんな方に、ぴったりです
//           </Typography>

//           <Typography variant="body1" className="mt-4">
//             ホームページを作りたいと思っても、
//             <br className="hidden sm:block" />
//             「何から始めればいいのか分からない」
//             そんな不安を感じている方も多いのではないでしょうか。
//           </Typography>
//         </div>

//         {/* Cards */}
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {items.map((text) => (
//             <Paper
//               key={text}
//               elevation={0}
//               className="border border-border p-6"
//               sx={{
//                 color: "var(--foreground)",
//                 backgroundColor: "var(--background)",
//                 borderRadius: 4,
//               }}
//             >
//               <Typography variant="body1">{text}</Typography>
//             </Paper>
//           ))}
//         </div>

//         {/* Footer message */}
//         <Box
//           component="section"
//           sx={{
//             textAlign: "center",
//             pt: { xs: 4, md: 8 },
//           }}
//         >
//           <Typography variant="body2">
//             「お願いすると、どんな流れになるの？」 そんな疑問をお持ちの方へ。
//           </Typography>

//           <Link
//             href="/workflow"
//             className="inline-flex"
//             sx={{
//               py: 2,
//             }}
//           >
//             制作の流れを見る →
//           </Link>

//           <Typography variant="body1">
//             ひとつでも当てはまれば、どうぞお気軽にご相談ください。
//           </Typography>
//           <Typography variant="body2">
//             「こんなことを聞いてもいいのかな？」という内容でも大丈夫です。
//           </Typography>
//           <Button
//             component={Link}
//             href="/contact"
//             variant="contained"
//             size="large"
//             sx={{
//               marginTop: 4,
//             }}
//           >
//             お問い合わせはこちら
//           </Button>
//         </Box>
//       </div>
//     </section>
//   );
// }

"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AUDIENCE_ITEMS = [
  "はじめてホームページを作ろうと考えている方",
  "何を載せればいいのか分からず、なかなか進まない方",
  "SNSだけでは少し信頼面が不安に感じる方",
  "できるだけ費用を抑えて、無理なく始めたい方",
  "専門用語が多い説明は正直ちょっと苦手な方",
  "一人で相談できる相手が欲しいと感じている方",
];

const SERVICES = [
  {
    label: "ホームページ",
    icon: "🌐",
    description: "集客・信頼につながる、丁寧なWeb制作",
  },
  {
    label: "デザイン",
    icon: "🎨",
    description: "ロゴ・バナー・名刺など各種グラフィック",
  },
  {
    label: "アプリ開発",
    icon: "📱",
    description: "業務効率化や便利な小規模システム開発",
  },
];

// React 19対応: コールバックrefでIntersectionObserverを設定
function useReveal() {
  const [visible, setVisible] = useState(false);

  const ref = useCallback((el: HTMLDivElement | null) => {
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

export function TargetAudienceSection() {
  const titleReveal = useReveal();
  const serviceReveal = useReveal();
  const cardReveal = useReveal();
  const footerReveal = useReveal();

  return (
    <section className="bg-background py-20 px-4">
      <div className="mx-auto max-w-5xl">
        {/* ── タイトル ── */}
        <div
          ref={titleReveal.ref}
          className={cn(
            "text-center mb-14 transition-all duration-700",
            titleReveal.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8",
          )}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            こんな方に、ぴったりです
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            ホームページを作りたいと思っても、
            <br className="hidden sm:block" />
            「何から始めればいいのか分からない」
            そんな不安を感じている方も多いのではないでしょうか。
          </p>
        </div>

        {/* ── サービスバッジ ── */}
        <div
          ref={serviceReveal.ref}
          className={cn(
            "flex flex-wrap justify-center gap-4 mb-14 transition-all duration-700 delay-100",
            serviceReveal.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8",
          )}
        >
          {SERVICES.map((service, i) => (
            <div
              key={service.label}
              className={cn(
                "group flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-sm",
                "hover:shadow-md hover:-translate-y-1 hover:border-primary/40",
                "transition-all duration-300 cursor-default",
              )}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                {service.icon}
              </span>
              <div>
                <p className="font-semibold text-sm text-foreground">
                  {service.label}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── カードグリッド ── */}
        <div
          ref={cardReveal.ref}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {AUDIENCE_ITEMS.map((text, i) => (
            <div
              key={text}
              className={cn(
                "group relative rounded-2xl border border-border bg-card p-6 shadow-sm overflow-hidden",
                "hover:shadow-lg hover:-translate-y-1 hover:border-primary/30",
                "transition-all duration-300",
                cardReveal.visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10",
              )}
              style={{
                transitionDelay: cardReveal.visible ? `${i * 80}ms` : "0ms",
                transitionDuration: "500ms",
              }}
            >
              {/* ホバー時の背景グロー */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className="relative flex items-start gap-3">
                <span className="mt-2 shrink-0 w-2 h-2 rounded-full bg-primary/60 group-hover:bg-primary group-hover:scale-125 transition-all duration-300" />
                <p className="text-sm text-foreground leading-relaxed">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── フッターメッセージ ── */}
        <div
          ref={footerReveal.ref}
          className={cn(
            "mt-16 text-center transition-all duration-700",
            footerReveal.visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8",
          )}
        >
          <p className="text-sm text-muted-foreground">
            「お願いすると、どんな流れになるの？」 そんな疑問をお持ちの方へ。
          </p>

          <Link
            href="/workflow"
            className="inline-flex items-center gap-1 py-2 text-sm text-primary hover:underline underline-offset-4 transition-colors"
          >
            制作の流れを見る →
          </Link>

          <p className="mt-4 text-base text-foreground font-medium">
            ひとつでも当てはまれば、どうぞお気軽にご相談ください。
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            「こんなことを聞いてもいいのかな？」という内容でも大丈夫です。
          </p>

          <Button asChild size="lg" className="mt-8">
            <Link href="/contact">お問い合わせはこちら</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
