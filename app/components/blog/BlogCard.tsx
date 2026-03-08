"use client";

import type { BlogArticle } from "@/types/blog";
import { cn } from "@/lib/utils";

type Props = {
  article: BlogArticle;
};

export default function BlogCard({ article }: Props) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex flex-col rounded-3xl border border-border bg-card p-5 shadow-sm",
        "hover:shadow-lg hover:-translate-y-1 hover:border-primary/30",
        "transition-all duration-300",
      )}
    >
      {/* タイトル */}
      <h3 className="font-bold text-sm text-foreground leading-snug mb-3 group-hover:text-primary transition-colors duration-200">
        {article.title}
      </h3>

      {/* タグ */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-0.5 rounded-full border border-border bg-muted text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* フッター */}
      <div className="mt-auto flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-3">
          <span>
            {new Date(article.created_at).toLocaleDateString("ja-JP", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1">
            ❤️ {article.likes_count}
          </span>
        </div>
        <span className="flex items-center gap-1 text-primary/70 group-hover:text-primary transition-colors duration-200">
          Qiitaで読む
          <svg
            className="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </span>
      </div>
    </a>
  );
}
