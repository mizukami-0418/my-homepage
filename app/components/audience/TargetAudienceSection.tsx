"use client";

import { Box, Button, Link, Paper, Typography } from "@mui/material";

export function TargetAudienceSection() {
  const items = [
    "はじめてホームページを作ろうと考えている方",
    "何を載せればいいのか分からず、なかなか進まない方",
    "SNSだけでは少し信頼面が不安に感じる方",
    "できるだけ費用を抑えて、無理なく始めたい方",
    "専門用語が多い説明は正直ちょっと苦手な方",
    "一人で相談できる相手が欲しいと感じている方",
  ];

  return (
    <section className="bg-background py-20 border rounded-4xl">
      <div className="mx-auto max-w-5xl px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <Typography variant="h4" component="h2" fontWeight="bold">
            こんな方に、ぴったりです
          </Typography>

          <Typography variant="body1" className="mt-4">
            ホームページを作りたいと思っても、
            <br className="hidden sm:block" />
            「何から始めればいいのか分からない」
            そんな不安を感じている方も多いのではないでしょうか。
          </Typography>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((text) => (
            <Paper
              key={text}
              elevation={0}
              className="border border-border p-6"
              sx={{
                color: "var(--foreground)",
                backgroundColor: "var(--background)",
                borderRadius: 4,
              }}
            >
              <Typography variant="body1">{text}</Typography>
            </Paper>
          ))}
        </div>

        {/* Footer message */}
        <Box
          component="section"
          sx={{
            textAlign: "center",
            pt: { xs: 4, md: 8 },
          }}
        >
          <Typography variant="body2">
            「お願いすると、どんな流れになるの？」 そんな疑問をお持ちの方へ。
          </Typography>

          <Link
            href="/workflow"
            className="inline-flex"
            sx={{
              py: 2,
            }}
          >
            制作の流れを見る →
          </Link>

          <Typography variant="body1">
            ひとつでも当てはまれば、どうぞお気軽にご相談ください。
          </Typography>
          <Typography variant="body2">
            「こんなことを聞いてもいいのかな？」という内容でも大丈夫です。
          </Typography>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            size="large"
            sx={{
              marginTop: 4,
            }}
          >
            お問い合わせはこちら
          </Button>
        </Box>
      </div>
    </section>
  );
}
