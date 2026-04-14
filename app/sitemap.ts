// app/sitemap.ts
import { MetadataRoute } from "next";
import { fetchQiitaArticles } from "@/app/lib/qiita";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await fetchQiitaArticles();

  const blogUrls = articles.map((article) => ({
    url: article.url, // Qiitaの記事URL
    lastModified: new Date(article.created_at),
  }));

  return [
    { url: "https://tomo-web-studio.toamoku.net" },
    { url: "https://tomo-web-studio.toamoku.net/contact" },
    { url: "https://tomo-web-studio.toamoku.net/blog" },
    { url: "https://tomo-web-studio.toamoku.net/workflow" },
    { url: "https://tomo-web-studio.toamoku.net/privacy" },
    { url: "https://tomo-web-studio.toamoku.net/terms" },
    ...blogUrls, // 記事を自動追加
  ];
}
