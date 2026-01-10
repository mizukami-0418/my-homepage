import { BlogArticle } from "@/types/blog";

export async function fetchQiitaArticles(): Promise<BlogArticle[]> {
  const res = await fetch(
    "https://qiita.com/api/v2/authenticated_user/items?per_page=100",
    {
      headers: {
        Authorization: `Bearer ${process.env.QIITA_TOKEN}`,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Qiita API fetch failed");
  }

  const data = await res.json();

  return data
    .map((item: any) => ({
      id: item.id,
      title: item.title,
      url: item.url,
      created_at: item.created_at,
      tags: item.tags.map((tag: any) => tag.name),
      likes_count: item.likes_count,
    }))
    .sort(
      (a: BlogArticle, b: BlogArticle) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
}
