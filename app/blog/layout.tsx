import type { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <main className="min-h-screen bg-background">{children}</main>;
}
