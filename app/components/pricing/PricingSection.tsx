import {
  SectionSplit,
  SectionText,
  SectionImage,
} from "@/app/components/layout/SectionSplit";

export default function PricingSection() {
  return (
    <div id="price">
      <SectionSplit
        reverse={true}
        left={
          <SectionText
            title="料金目安"
            list={[
              "Webサイト制作：5万円〜",
              "LP制作：3万円〜",
              "小規模Webアプリ：10万円〜",
            ]}
            description={[
              "個人事業主の方向けに、必要な機能だけを厳選したプランです。",
              "事前に必ずお見積りをご提示しますので、ご安心ください。",
            ]}
          />
        }
        right={<SectionImage src="/images/pricing-image.jpg" alt="Pricing" />}
      />
    </div>
  );
}
