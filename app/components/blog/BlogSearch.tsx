"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function BlogSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";
  const [keyword, setKeyword] = useState(q);

  const handleSearch = () => {
    if (!keyword.trim()) {
      router.push("/blog");
    } else {
      router.push(`/blog?q=${encodeURIComponent(keyword.trim())}`);
    }
  };

  const handleClear = () => {
    setKeyword("");
    router.push("/blog");
  };

  return (
    <div className="mb-10 flex justify-center">
      <div className="relative w-full max-w-xl">
        {/* 検索アイコン */}
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
          />
        </svg>

        <input
          type="text"
          value={keyword}
          placeholder="キーワードで記事を検索"
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className={cn(
            "w-full rounded-full border border-border bg-card text-foreground",
            "pl-11 pr-10 py-3 text-sm",
            "placeholder:text-muted-foreground",
            "focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary",
            "transition-all duration-200",
          )}
        />

        {/* クリアボタン */}
        {keyword && (
          <button
            onClick={handleClear}
            aria-label="クリア"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
