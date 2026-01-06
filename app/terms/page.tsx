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

const sectionTitle =
  "scroll-mt-24 mt-16 mb-4 pb-2 border-b text-2xl font-semibold";

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20">
      <h1 className="text-center text-4xl md:text-5xl font-bold tracking-tight mb-12">
        利用規約
      </h1>

      <div className="grid gap-12 md:grid-cols-[240px_1fr]">
        {/* 目次 */}
        <nav className="sticky top-24 h-fit rounded-lg border bg-background p-4 mb-4">
          <p className="mb-3 text-sm font-semibold text-muted-foreground">
            目次
          </p>
          <ul className="space-y-2 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  className="text-muted-foreground hover:text-foreground underline-offset-4 hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 本文 */}
        <article className="prose prose-neutral max-w-none">
          <p>
            この利用規約（以下「本規約」）は、tomo Web
            Studio（以下「当社」）が提供する
            本ウェブサイトおよび関連サービス（以下「本サービス」）の利用条件を定めるものです。
            <br />
            ユーザーは、本サービスを利用することにより、本規約に同意したものとみなされます。
          </p>

          <h2 id="article-1" className={sectionTitle}>
            第1条（適用）
          </h2>
          <p>
            本規約は、ユーザーと当社との間の
            本サービスの利用に関わる一切の関係に適用されます。
          </p>

          <h2 id="article-2" className={sectionTitle}>
            第2条（禁止事項）
          </h2>
          <ul className="list-disc ml-6">
            <li>法令または公序良俗に違反する行為</li>
            <li>不正アクセス、サーバーやネットワークへの攻撃行為</li>
            <li>当社または第三者の権利を侵害する行為</li>
            <li>本サービスの運営を妨害する行為</li>
            <li>その他、当社が不適切と判断する行為</li>
          </ul>

          <h2 id="article-3" className={sectionTitle}>
            第3条（著作権）
          </h2>
          <p className="mb-2">
            本サービスに掲載されている文章、画像、デザイン、
            プログラム、ソースコード等の著作権は、
            当社または正当な権利を有する第三者に帰属します。
          </p>
          <p>
            ユーザーは、
            私的利用の範囲を超えて、無断で複製・転載・改変・再配布することを禁止します。
          </p>

          <h2 id="article-4" className={sectionTitle}>
            第4条（免責事項）
          </h2>
          <p className="mb-2">
            当社は、本サービスに掲載する情報について、
            正確性・完全性・有用性・最新性を保証するものではありません。
          </p>
          <p className="mb-2">
            ユーザーが本サービスの情報を利用したこと、または利用できなかったことによって
            生じた損害について、当社は一切の責任を負いません。
          </p>
          <p className="mb-2">
            本サービスに掲載されているコードや技術情報は、
            動作や結果を保証するものではありません。
            実行・利用は、ユーザー自身の責任において行うものとします。
          </p>
          <p>
            また、本サービスからリンクされている外部サイトや、
            外部サービスの利用によって生じた損害についても、
            当社は責任を負いかねます。
          </p>

          <h2 id="article-5" className={sectionTitle}>
            第5条（サービス内容の変更・中断・終了）
          </h2>
          <p>
            当社は、ユーザーへの事前通知なく、
            本サービスの内容を変更・中断・終了することがあります。
          </p>

          <h2 id="article-6" className={sectionTitle}>
            第6条（プライバシーの取り扱い）
          </h2>
          <p>
            本サービスの利用における個人情報の取り扱いについては、
            「プライバシーポリシー」に従うものとします。
          </p>
          <h2 id="article-7" className={sectionTitle}>
            第7条（利用規約の変更）
          </h2>
          <p>
            当社は、必要に応じて、本規約を変更することがあります。
            本規約の変更は、当社が本サイトに掲載した日から効力を生じるものとします。
          </p>

          <h2 id="article-8" className={sectionTitle}>
            第8条（準拠法・管轄）
          </h2>
          <p>
            本規約は日本法を準拠法とし、本サービスに関して生じた紛争については、
            当社所在地を管轄する裁判所を専属的合意管轄とします。
          </p>
        </article>
      </div>
    </section>
  );
}
