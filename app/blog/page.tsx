import { fetchQiitaArticles } from "@/app/lib/qiita";
import BlogList from "@/app/components/blog/BlogList";
import BlogPagination from "@/app/components/blog/BlogPagination";
import BlogSearch from "@/app/components/blog/BlogSearch";
import EmptyState from "../components/blog/EmptyState";
import { BlogTitle } from "../components/blog/BlogTitle";

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

  // keyword search
  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(keyword.toLowerCase()) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(keyword.toLowerCase())
      )
  );

  const displayArticles = keyword ? filteredArticles : articles;

  // pagination
  const totalPages = Math.ceil(filteredArticles.length / PER_PAGE);
  const start = (currentPage - 1) * PER_PAGE;
  const end = start + PER_PAGE;
  const paginatedArticles = displayArticles.slice(start, end);

  return (
    <>
      <BlogTitle />

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
    </>
  );
}
