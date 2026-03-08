import BlogList from "@/app/components/blog/BlogList";
import BlogPagination from "@/app/components/blog/BlogPagination";
import BlogSearch from "@/app/components/blog/BlogSearch";
import { fetchQiitaArticles } from "@/app/lib/qiita";
import EmptyState from "../components/blog/EmptyState";

const PER_PAGE = 10;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; page?: string }>;
}) {
  const { q, page } = await searchParams;

  const keyword = q ?? "";
  const currentPage = Number(page ?? "1");

  const articles = await fetchQiitaArticles();

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(keyword.toLowerCase()) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(keyword.toLowerCase()),
      ),
  );

  const displayArticles = keyword ? filteredArticles : articles;

  const totalPages = Math.ceil(filteredArticles.length / PER_PAGE);
  const start = (currentPage - 1) * PER_PAGE;
  const end = start + PER_PAGE;
  const paginatedArticles = displayArticles.slice(start, end);

  return (
    <>
      {/* ── ヒーロー画像 ── */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-bg1.jpg')" }}
        />
        <div className="absolute inset-0 bg-white/60 dark:bg-black/50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            Blog
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            tomo Qiita Articles
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Qiita 技術記事まとめ
          </p>
        </div>
      </div>

      {/* ── コンテンツエリア ── */}
      <div className="py-12 px-4">
        <div className="mx-auto max-w-3xl">
          <BlogSearch />

          {displayArticles.length === 0 ? (
            <EmptyState keyword={keyword} />
          ) : (
            <BlogList articles={paginatedArticles} />
          )}

          <BlogPagination
            currentPage={currentPage}
            totalPages={totalPages}
            keyword={keyword}
          />
        </div>
      </div>
    </>
  );
}
