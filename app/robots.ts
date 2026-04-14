// app/robots.ts
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://tomo-web-studio.toamoku.net/sitemap.xml",
  };
}
