"use client";

import { usePathname } from "next/navigation";
import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { ReactNode } from "react";
import { SimpleHeader } from "@/app/components/common/SimpleHeader";
import { SimpleFooter } from "@/app/components/common/SimpleFooter";

export default function BlogLayoutWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const isBlog = pathname.startsWith("/blog");
  const isPrivacy = pathname.startsWith("/privacy");
  const isWorkflow = pathname.startsWith("/workflow");
  const isTerms = pathname.startsWith("/terms");
  const isContact = pathname.startsWith("/contact");
  const isSimple = isBlog || isPrivacy || isTerms || isWorkflow || isContact;

  return (
    <>
      {isSimple ? <SimpleHeader /> : <Header />}
      <main>{children}</main>
      {isSimple ? <SimpleFooter /> : <Footer />}
    </>
  );
}
