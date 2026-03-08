import { BlogArticle } from "@/types/blog";
import BlogCard from "./BlogCard";

export default function BlogList({ articles }: { articles: BlogArticle[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {articles.map((article) => (
        <BlogCard key={article.id} article={article} />
      ))}
    </div>
  );
}
