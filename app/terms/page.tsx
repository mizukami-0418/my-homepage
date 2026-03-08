import Link from "next/link";

export const metadata = {
  title: "利用規約 | tomo Web Studio",
};

const toc = [
  { id: "article-1", label: "第1条（適用）" },
  { id: "article-2", label: "第2条（禁止事項）" },
  { id: "article-3", label: "第3条（著作権）" },
  { id: "article-4", label: "第4条（免責事項）" },
  { id: "article-5", label: "第5条（サービス内容の変更・中断・終了）" },
  { id: "article-6", label: "第6条（プライバシー）" },
  { id: "article-7", label: "第7条（利用規約の変更）" },
  { id: "article-8", label: "第8条（準拠法・管轄）" },
];

export default function TermsPage() {
  return (
    <>
      {/* ── ヒーロー ── */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-bg1.jpg')" }}
        />
        <div className="absolute inset-0 bg-white/65 dark:bg-black/55" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            Terms of Service
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            利用規約
          </h1>
        </div>
      </div>

      {/* ── コンテンツ ── */}
      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-[220px_1fr]">
          {/* 目次 */}
          <nav className="sticky top-24 h-fit rounded-2xl border border-border bg-card shadow-sm p-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">
              目次
            </p>
            <ul className="space-y-2">
              {toc.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    className="text-xs text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 本文 */}
          <article className="space-y-10 text-sm text-foreground leading-relaxed">
            <p className="text-muted-foreground">
              この利用規約（以下「本規約」）は、tomo Web
              Studio（以下「当社」）が提供する
              本ウェブサイトおよび関連サービス（以下「本サービス」）の利用条件を定めるものです。
              ユーザーは、本サービスを利用することにより、本規約に同意したものとみなされます。
            </p>

            <Section id="article-1" title="第1条（適用）">
              <p>
                本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されます。
              </p>
            </Section>

            <Section id="article-2" title="第2条（禁止事項）">
              <Items
                items={[
                  "法令または公序良俗に違反する行為",
                  "不正アクセス、サーバーやネットワークへの攻撃行為",
                  "当社または第三者の権利を侵害する行為",
                  "本サービスの運営を妨害する行為",
                  "その他、当社が不適切と判断する行為",
                ]}
              />
            </Section>

            <Section id="article-3" title="第3条（著作権）">
              <p>
                本サービスに掲載されている文章、画像、デザイン、プログラム、ソースコード等の著作権は、
                当社または正当な権利を有する第三者に帰属します。
              </p>
              <p>
                ユーザーは、私的利用の範囲を超えて、無断で複製・転載・改変・再配布することを禁止します。
              </p>
            </Section>

            <Section id="article-4" title="第4条（免責事項）">
              <p>
                当社は、本サービスに掲載する情報について、正確性・完全性・有用性・最新性を保証するものではありません。
              </p>
              <p>
                ユーザーが本サービスの情報を利用したこと、または利用できなかったことによって生じた損害について、
                当社は一切の責任を負いません。
              </p>
              <p>
                本サービスに掲載されているコードや技術情報は、動作や結果を保証するものではありません。
                実行・利用は、ユーザー自身の責任において行うものとします。
              </p>
              <p>
                また、本サービスからリンクされている外部サイトや外部サービスの利用によって生じた損害についても、
                当社は責任を負いかねます。
              </p>
            </Section>

            <Section
              id="article-5"
              title="第5条（サービス内容の変更・中断・終了）"
            >
              <p>
                当社は、ユーザーへの事前通知なく、本サービスの内容を変更・中断・終了することがあります。
              </p>
            </Section>

            <Section id="article-6" title="第6条（プライバシーの取り扱い）">
              <p>
                本サービスの利用における個人情報の取り扱いについては、「プライバシーポリシー」に従うものとします。
              </p>
            </Section>

            <Section id="article-7" title="第7条（利用規約の変更）">
              <p>
                当社は、必要に応じて本規約を変更することがあります。
                変更は、当社が本サイトに掲載した日から効力を生じるものとします。
              </p>
            </Section>

            <Section id="article-8" title="第8条（準拠法・管轄）">
              <p>
                本規約は日本法を準拠法とし、本サービスに関して生じた紛争については、
                当社所在地を管轄する裁判所を専属的合意管轄とします。
              </p>
            </Section>
          </article>
        </div>
      </div>
    </>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-base font-bold text-foreground mb-3 pb-2 border-b border-border">
        {title}
      </h2>
      <div className="space-y-2 text-muted-foreground">{children}</div>
    </section>
  );
}

function Items({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-sm">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}
