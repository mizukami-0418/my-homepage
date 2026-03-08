"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

const sections = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Strengths", href: "#strengths" },
  { label: "Works", href: "#works" },
  { label: "Price", href: "#price" },
  { label: "Qiita Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  // IntersectionObserver（これは問題なし）
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.href.replace("#", ""));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {sections.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className={`text-sm hover:text-primary ${
                active === s.href.replace("#", "")
                  ? "font-semibold text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {s.label}
            </a>
          ))}

          <ThemeToggle />
        </nav>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {sections.map((s) => (
              <a
                key={s.href}
                href={s.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
