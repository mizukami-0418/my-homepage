import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script, Figtree } from "next/font/google";
import "./globals.css";
import BlogLayoutWrapper from "./LayoutWrapper";
import { cn } from "@/lib/utils";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "tomo Web Studio",
  description: "フリーランスWebデベロッパー、tomoのポートフォリオサイト",
};

export const metadata: Metadata = {
  title: {
    default: "tomo Web Studio",
    template: "%s | tomo Web Studio",
  },
  description: "個人事業主・フリーランスのためのやさしいWeb制作",
  openGraph: {
    title: "tomo Web Studio",
    description: "個人事業主・フリーランスのためのやさしいWeb制作",
    url: "https://tomo-web-studio.toamoku.net",
    siteName: "tomo Web Studio",
    images: [{ url: "/images/hero-bg1.jpg" }],
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", figtree.variable)}>
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${dancingScript.variable}
          antialiased
          bg-background
          text-foreground
          `}
      >
        <BlogLayoutWrapper>{children}</BlogLayoutWrapper>
      </body>
    </html>
  );
}
