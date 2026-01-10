"use client";

import { useRouter } from "next/navigation";

type Props = {
  keyword?: string;
};

export default function EmptyState({ keyword }: Props) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center gap-4 rounded-lg border border-dashed p-10 text-center">
      <p className="text-2xl">🔍</p>

      <h2 className="text-lg font-semibold">該当する記事が見つかりません</h2>

      {keyword && (
        <p className="text-sm text-muted-foreground">
          「<span className="font-medium text-foreground">{keyword}</span>
          」で検索しました
        </p>
      )}

      <button
        onClick={() => router.push("/blog")}
        className="mt-2 rounded bg-primary px-4 py-2 text-sm text-primary-foreground hover:opacity-90"
      >
        検索条件をリセット
      </button>
    </div>
  );
}
