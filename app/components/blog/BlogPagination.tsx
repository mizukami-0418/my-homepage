"use client";

import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

type Props = {
  currentPage: number;
  totalPages: number;
  keyword?: string;
};

export default function BlogPagination({
  currentPage,
  totalPages,
  keyword,
}: Props) {
  const router = useRouter();

  const goTo = (page: number) => {
    const params = new URLSearchParams();
    if (keyword) params.set("q", keyword);
    params.set("page", String(page));
    router.push(`/blog?${params.toString()}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="mt-12 flex flex-col items-center gap-4">
      <p className="text-xs text-muted-foreground">
        {currentPage} / {totalPages} ページ
      </p>

      <div className="flex items-center gap-1.5">
        {/* 最初へ */}
        <PaginationButton
          onClick={() => goTo(1)}
          disabled={currentPage === 1}
          aria-label="最初のページ"
        >
          «
        </PaginationButton>

        {/* 前へ */}
        <PaginationButton
          onClick={() => goTo(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="前のページ"
        >
          ‹
        </PaginationButton>

        {/* ページ番号 */}
        {pages.map((page) => (
          <PaginationButton
            key={page}
            onClick={() => goTo(page)}
            active={page === currentPage}
          >
            {page}
          </PaginationButton>
        ))}

        {/* 次へ */}
        <PaginationButton
          onClick={() => goTo(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="次のページ"
        >
          ›
        </PaginationButton>

        {/* 最後へ */}
        <PaginationButton
          onClick={() => goTo(totalPages)}
          disabled={currentPage === totalPages}
          aria-label="最後のページ"
        >
          »
        </PaginationButton>
      </div>
    </div>
  );
}

type ButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  active?: boolean;
  children: React.ReactNode;
  "aria-label"?: string;
};

function PaginationButton({
  onClick,
  disabled,
  active,
  children,
  "aria-label": ariaLabel,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={cn(
        "min-w-9 h-9 px-2 rounded-xl border text-sm font-medium",
        "transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
        active
          ? "bg-primary text-primary-foreground border-primary shadow-sm"
          : "bg-card text-foreground border-border hover:border-primary/40 hover:text-primary",
        disabled && "opacity-30 pointer-events-none",
      )}
    >
      {children}
    </button>
  );
}
