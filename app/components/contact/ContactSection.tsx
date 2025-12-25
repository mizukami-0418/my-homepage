export default function ContactSection() {
  return (
    <section id="contact" className="text-center space-y-6 py-24">
      <h2 className="text-2xl font-bold">お問い合わせ</h2>

      <p className="text-gray-600">
        ご相談だけでも問題ありません。
        <br />
        お気軽にご連絡ください。
      </p>

      <a
        href="/contact"
        className="inline-block rounded-md bg-black px-6 py-3 text-white"
      >
        お問い合わせフォームへ
      </a>
    </section>
  );
}
