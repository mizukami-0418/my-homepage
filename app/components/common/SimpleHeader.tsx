"use client";

import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function SimpleHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <ThemeToggle />
        </nav>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
