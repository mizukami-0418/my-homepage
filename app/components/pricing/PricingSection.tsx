import {
  SectionSplit,
  SectionText,
  SectionImage,
} from "@/app/components/layout/SectionSplit";

export default function PricingSection() {
  return (
    <SectionSplit
      left={
        <SectionText
          title="料金目安"
          list={[
            "Webサイト制作：5万円〜",
            "LP制作：3万円〜",
            "小規模Webアプリ：10万円〜",
          ]}
        />
      }
      right={<SectionImage src="/images/pricing-image.jpg" alt="Pricing" />}
    />
  );
}
