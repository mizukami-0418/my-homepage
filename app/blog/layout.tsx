import type { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-background">
      <section className="max-w-4xl mx-auto px-4 py-16">{children}</section>
    </main>
  );
}
