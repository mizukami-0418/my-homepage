import {
  SectionSplit,
  SectionText,
  SectionImage,
} from "@/app/components/layout/SectionSplit";

export default function AboutSection() {
  return (
    <div id="about">
      <SectionSplit
        reverse={true}
        left={
          <SectionText
            title="About Me"
            description={[
              "tomo ― 友達のように、共に歩む Web スタジオ",
              "tomo Web Studio の tomo には、「友達」と「共に」という二つの意味があります。",
              "一人で事業をされている方が、安心して相談できる存在でありたい。",
              "小さなスタジオだからこそできる、丁寧で誠実な対応を大切にし、確かな信頼をお届けします。",
            ]}
          />
        }
        right={<SectionImage src="/images/about-image.png" alt="About Me" />}
      />
    </div>
  );
}
