export default function HeroSection() {
  return (
    <section className="text-center space-y-6 py-24">
      <h1 className="text-4xl font-bold leading-tight">
        Webサイト・Webアプリで
        <br />
        事業の「困った」を解決します
      </h1>

      <p className="text-lg text-gray-600">
        中小事業者・個人事業主向け
        <br />
        React / Next.js × Django REST Framework
      </p>

      <p className="text-gray-500">
        要件整理から実装・運用まで一貫して対応します
      </p>

      <a
        href="#contact"
        className="inline-block rounded-md bg-black px-6 py-3 text-white"
      >
        お問い合わせはこちら
      </a>
    </section>
  );
}
