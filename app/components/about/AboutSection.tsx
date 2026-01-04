import {
  SectionSplit,
  SectionText,
  SectionImage,
} from "@/app/components/layout/SectionSplit";

export default function AboutSection() {
  return (
    <SectionSplit
      reverse={true}
      left={
        <SectionText
          title="About Me"
          description={[
            "「PASSION LED US HERE. 情熱が私たちをここに導いた」",
            "TAMK Web Studio は、Webを通じて人の役に立ちたいという情熱から生まれた小さな Web スタジオです。",
            "個人で制作を行っているからこそ、ご相談から公開後のサポートまで、一貫して丁寧に対応しています。",
            "技術だけでなく、「安心して任せられる存在」であることを大切に。小さなスタジオから、確かな信頼をお届けします。",
          ]}
        />
      }
      right={<SectionImage src="/images/about-image.jpg" alt="About Me" />}
    />
  );
}
