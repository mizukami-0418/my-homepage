"use client";

import { Button, Card, CardContent, Link, Typography } from "@mui/material";

type Step = {
  step: number;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    step: 1,
    title: "まずはご相談",
    description:
      "「何から始めればいいか分からない」状態でも大丈夫です。ご要望やお悩みをお聞きしながら、方向性を一緒に整理していきます。",
  },
  {
    step: 2,
    title: "ご提案・お見積り",
    description:
      "ヒアリング内容をもとに、構成やデザインの方向性をご提案します。内容と金額にご納得いただいてから制作を開始します。",
  },
  {
    step: 3,
    title: "制作・ご確認",
    description:
      "デザイン・コーディングを進めながら、途中段階でご確認いただきます。修正のご要望もお気軽にお伝えください。",
  },
  {
    step: 4,
    title: "公開・納品",
    description:
      "最終確認後、ホームページを公開します。公開後の簡単な修正やご相談にも対応しています。",
  },
];

export function WorkflowSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <Typography variant="h4" component="h2" fontWeight="bold">
            制作の流れ
          </Typography>
          <Typography variant="body1" className="pt-4">
            ご相談から公開まで、シンプルで分かりやすい流れです。
          </Typography>
        </div>

        {/* Steps */}
        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step) => (
            <Card
              key={step.step}
              elevation={0}
              className="border"
              sx={{
                backgroundColor: "var(--background)",
                color: "var(--foreground)",
                borderRadius: 4,
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* Step Number */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    {step.step}
                  </div>

                  {/* Text */}
                  <div>
                    <Typography variant="h6" fontWeight="bold">
                      {step.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text-foreground"
                      className="mt-2"
                    >
                      {step.description}
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center text-center">
          <Typography variant="body1" className="pb-4">
            どんなことでも構いせんので、どうぞ遠慮なくお気軽にご相談ください。
          </Typography>
          <Button
            component={Link}
            href="/contact"
            variant="contained"
            size="large"
          >
            お問い合わせはこちら
          </Button>
          <Link href="/" className="pt-4">
            トップページへ戻る
          </Link>
        </div>
      </div>
    </section>
  );
}
