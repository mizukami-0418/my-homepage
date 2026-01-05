"use client";

import { useEffect, useState } from "react";

export function ThemeToggleButton() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") return false;
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-md border px-4 py-2 text-sm hover:bg-gray-500 dark:hover:bg-gray-500"
    >
      {isDark ? "☀️ ライトモード" : "🌙 ダークモード"}
    </button>
  );
}
