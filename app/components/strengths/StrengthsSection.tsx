const strengths = [
  "フロントエンド〜バックエンドまで一貫対応",
  "小さく作って、早く改善する開発スタイル",
  "技術記事執筆・個人開発による継続的な学習",
  "専門用語を使わない丁寧なコミュニケーション",
];

import {
  SectionSplit,
  SectionText,
  SectionImage,
} from "@/app/components/layout/SectionSplit";

export default function StrengthsSection() {
  return (
    <SectionSplit
      reverse={true}
      left={<SectionText title="選ばれる理由" list={strengths} />}
      right={<SectionImage src="/images/strengths-image.jpg" alt="Strengths" />}
    />
  );
}
