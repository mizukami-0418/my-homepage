"use client";

import { useEffect, useState } from "react";

export function useTheme() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(false);

  // クライアント側でのみマウント後にlocalStorageから読み取る
  useEffect(() => {
    setMounted(true);
    const theme = localStorage.getItem("theme");
    const initialIsDark = theme === "dark";
    setIsDark(initialIsDark);
    
    // 初期テーマを適用
    const html = document.documentElement;
    html.classList.toggle("dark", initialIsDark);
  }, []);

  // テーマ変更時にDOMを更新
  useEffect(() => {
    if (!mounted) return;
    const html = document.documentElement;
    html.classList.toggle("dark", isDark);
  }, [isDark, mounted]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return { isDark: mounted ? isDark : false, toggleTheme, mounted };
}
