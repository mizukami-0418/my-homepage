import Link from "next/link";
import {
  SectionImage,
  SectionSplit,
  SectionText,
} from "../layout/SectionSplit";
import Image from "next/image";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export function BlogLink() {
  return (
    <div id="blog">
      <SectionSplit
        left={
          <SectionText
            title="tomo Qiita Articles"
            description={[
              "日々の開発で得た気づきや学びをQiitaに投稿しています。",
              "初心者の方にも伝わるよう丁寧にまとめています。",
              "Python・React・設計・セキュリティ・ネットワークなど、実務に活きる内容を中心に発信中です。",
              "下のリンクから記事をご覧いただけます。",
            ]}
            actions={
              <Link
                href="/blog"
                className="
                inline-flex items-center gap-2 rounded-xl px-8 py-3 font-semibold text-foreground
                "
              >
                <Image
                  src="/images/logo-background-color.png"
                  alt="Qiita"
                  width={72}
                  height={16}
                  className="rounded"
                />
                記事一覧を見る
                <OpenInNewIcon
                  sx={{
                    fontSize: 16,
                  }}
                />
              </Link>
            }
          />
        }
        right={<SectionImage src="/images/blog-image.png" alt="About Me" />}
      />
    </div>
  );
}
