"use client";

import { usePathname } from "next/navigation";
import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { ReactNode } from "react";
import { SimpleHeader } from "@/app/components/common/SimpleHeader";
import { SimpleFooter } from "@/app/components/common/SimpleFooter";

const SIMPLE_LAYOUT_PATHS = ["/blog", "/privacy", "/workflow", "/terms", "/contact"];

export default function BlogLayoutWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const isSimple = SIMPLE_LAYOUT_PATHS.some(path => pathname.startsWith(path));

  return (
    <>
      {isSimple ? <SimpleHeader /> : <Header />}
      <main>{children}</main>
      {isSimple ? <SimpleFooter /> : <Footer />}
    </>
  );
}
