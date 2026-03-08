"use client";

import { useTheme } from "@/app/hooks/useTheme";

type ThemeToggleProps = {
  variant?: "icon" | "button";
  className?: string;
};

export function ThemeToggle({ 
  variant = "icon", 
  className = "cursor-pointer rounded-full p-2 transition hover:bg-muted focus:outline-none focus-visible:ring" 
}: ThemeToggleProps) {
  const { isDark, toggleTheme, mounted } = useTheme();

  // マウント前はプレースホルダーを表示（サーバーとクライアントで一致させる）
  if (!mounted) {
    return (
      <button
        className={className}
        aria-label="Toggle dark mode"
        suppressHydrationWarning
      >
        🌙
      </button>
    );
  }

  if (variant === "button") {
    return (
      <button
        onClick={toggleTheme}
        className="rounded-md border px-4 py-2 text-sm hover:bg-gray-500 dark:hover:bg-gray-500"
        aria-label="Toggle dark mode"
      >
        {isDark ? "☀️ ライトモード" : "🌙 ダークモード"}
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={className}
      aria-label="Toggle dark mode"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
