import Link from "next/link";

export const metadata = {
  title: "プライバシーポリシー | tomo Web Studio",
};

const toc = [
  { id: "personal-info", label: "1.個人情報の取得" },
  { id: "purpose", label: "2.利用目的" },
  { id: "management", label: "3.個人情報の管理" },
  { id: "third-party", label: "4.第三者への提供" },
  { id: "external-service", label: "5.外部サービス" },
  { id: "policy-change", label: "6.ポリシーの変更" },
  { id: "contact", label: "7.お問い合わせ" },
];

const sectionTitle =
  "scroll-mt-24 mt-16 mb-4 pb-2 border-b text-2xl font-semibold";

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-20">
      <h1 className="text-center text-4xl md:text-5xl font-bold tracking-tight mb-12">
        プライバシーポリシー
      </h1>
      <div className="grid gap-12 md:grid-cols-[240px_1fr]">
        {/* 目次 */}
        <nav className="sticky top-24 h-fit rounded-lg border bg-background p-4">
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

        <article className="prose prose-neutral max-w-none">
          <p>
            tomo Web
            Studio（以下「当社」）は、本ウェブサイト上で提供するサービスにおいて、
            ユーザーの個人情報を適切に取り扱うことを重要な責務と考え、
            以下の通りプライバシーポリシーを定めます。
          </p>

          <h2 className={sectionTitle} id="personal-info">
            1. 個人情報の取得について
          </h2>
          <p>
            当社は、お問い合わせフォーム等を通じて、以下の個人情報を取得することがあります。
          </p>
          <ul className="list-disc ml-6">
            <li>氏名</li>
            <li>メールアドレス</li>
            <li>お問い合わせ内容</li>
          </ul>

          <h2 className={sectionTitle} id="purpose">
            2. 個人情報の利用目的
          </h2>
          <p>取得した個人情報は、以下の目的で利用します。</p>
          <ul className="list-disc ml-6">
            <li>お問い合わせへの回答</li>
            <li>サービス提供およびご案内</li>
            <li>必要に応じたご連絡</li>
          </ul>

          <h2 className={sectionTitle} id="management">
            3. 個人情報の管理
          </h2>
          <p>
            当社は、個人情報を正確かつ最新の状態に保ち、
            不正アクセス・漏洩・紛失等を防止するため、
            適切な安全対策を講じます。
          </p>

          <h2 className={sectionTitle} id="third-party">
            4. 第三者への提供
          </h2>
          <p>
            法令に基づく場合を除き、本人の同意なく
            第三者に個人情報を提供することはありません。
          </p>

          <h2 className={sectionTitle} id="external-service">
            5. 外部サービスの利用
          </h2>
          <p>
            本サイトでは、利便性向上のため外部サービス （Google Analytics
            等）を利用する場合があります。 これらのサービスでは Cookie
            を使用することがあります。
          </p>

          <h2 className={sectionTitle} id="policy-change">
            6. プライバシーポリシーの変更
          </h2>
          <p>
            本ポリシーの内容は、必要に応じて
            事前の通知なく変更することがあります。
          </p>

          <h2 className={sectionTitle} id="contact">
            7. お問い合わせ
          </h2>
          <p>
            個人情報の取り扱いに関するお問い合わせは、
            お問い合わせフォームよりご連絡ください。
          </p>
        </article>
      </div>
    </section>
  );
}
