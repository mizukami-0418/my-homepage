"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

type Props = {
  keyword?: string;
};

export default function EmptyState({ keyword }: Props) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-border bg-card p-12 text-center">
      <span className="text-4xl">🔍</span>

      <h2 className="text-base font-bold text-foreground">
        該当する記事が見つかりません
      </h2>

      {keyword && (
        <p className="text-sm text-muted-foreground">
          「<span className="font-semibold text-foreground">{keyword}</span>
          」で検索しました
        </p>
      )}

      <Button
        variant="outline"
        size="sm"
        className="mt-2 rounded-xl"
        onClick={() => router.push("/blog")}
      >
        検索条件をリセット
      </Button>
    </div>
  );
}
