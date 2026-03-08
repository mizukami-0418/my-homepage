"use client";

export function BlogTitle() {
  return (
    <section className="text-center py-16 md:py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
        Blog
      </p>
      <h1
        className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent mb-3"
        style={{
          backgroundImage:
            "linear-gradient(90deg, var(--primary), hsl(var(--primary) / 0.5))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        tomo Qiita Articles
      </h1>
      <p className="text-base text-muted-foreground">Qiita 技術記事まとめ</p>
    </section>
  );
}
