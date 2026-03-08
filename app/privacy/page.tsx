import Link from "next/link";

export const metadata = {
  title: "プライバシーポリシー | tomo Web Studio",
};

const toc = [
  { id: "personal-info", label: "1. 個人情報の取得" },
  { id: "purpose", label: "2. 利用目的" },
  { id: "management", label: "3. 個人情報の管理" },
  { id: "third-party", label: "4. 第三者への提供" },
  { id: "external-service", label: "5. 外部サービス" },
  { id: "policy-change", label: "6. ポリシーの変更" },
  { id: "contact", label: "7. お問い合わせ" },
];

export default function PrivacyPage() {
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
            Privacy Policy
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            プライバシーポリシー
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
              tomo Web
              Studio（以下「当社」）は、本ウェブサイト上で提供するサービスにおいて、
              ユーザーの個人情報を適切に取り扱うことを重要な責務と考え、
              以下の通りプライバシーポリシーを定めます。
            </p>

            <Section id="personal-info" title="1. 個人情報の取得について">
              <p>
                お問い合わせフォーム等を通じて、以下の個人情報を取得することがあります。
              </p>
              <Items items={["氏名", "メールアドレス", "お問い合わせ内容"]} />
            </Section>

            <Section id="purpose" title="2. 個人情報の利用目的">
              <p>取得した個人情報は、以下の目的で利用します。</p>
              <Items
                items={[
                  "お問い合わせへの回答",
                  "サービス提供およびご案内",
                  "必要に応じたご連絡",
                ]}
              />
            </Section>

            <Section id="management" title="3. 個人情報の管理">
              <p>
                当社は、個人情報を正確かつ最新の状態に保ち、
                不正アクセス・漏洩・紛失等を防止するため、適切な安全対策を講じます。
              </p>
            </Section>

            <Section id="third-party" title="4. 第三者への提供">
              <p>
                法令に基づく場合を除き、本人の同意なく第三者に個人情報を提供することはありません。
              </p>
            </Section>

            <Section id="external-service" title="5. 外部サービスの利用">
              <p>
                本サイトでは、利便性向上のため外部サービス（Google Analytics
                等）を利用する場合があります。 これらのサービスでは Cookie
                を使用することがあります。
              </p>
            </Section>

            <Section id="policy-change" title="6. プライバシーポリシーの変更">
              <p>
                本ポリシーの内容は、必要に応じて事前の通知なく変更することがあります。
              </p>
            </Section>

            <Section id="contact" title="7. お問い合わせ">
              <p>
                個人情報の取り扱いに関するお問い合わせは、お問い合わせフォームよりご連絡ください。
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
