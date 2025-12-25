const strengths = [
  "フロントエンド〜バックエンドまで一貫対応",
  "小さく作って、早く改善する開発スタイル",
  "技術記事執筆・個人開発による継続的な学習",
  "専門用語を使わない丁寧なコミュニケーション",
];

export default function StrengthsSection() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold text-center">選ばれる理由</h2>

      <ul className="max-w-xl mx-auto space-y-3">
        {strengths.map((strength) => (
          <li key={strength}>・{strength}</li>
        ))}
      </ul>
    </section>
  );
}
