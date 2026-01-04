const problems = [
  "Webサイトが古く、集客につながっていない",
  "手作業の業務が多く、効率化したい",
  "簡単な管理ツールを作りたいが、頼める人がいない",
  "技術的な相談をできる相手がいない",
];

import {
  SectionSplit,
  SectionText,
  SectionImage,
} from "@/app/components/layout/SectionSplit";

export default function ProblemsSection() {
  return (
    <SectionSplit
      left={
        <SectionText title="こんなお悩みはありませんか？" list={problems} />
      }
      right={<SectionImage src="/images/problem-image.jpg" alt="Problems" />}
    />
  );
}
