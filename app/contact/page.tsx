import ContactForm from "@/app/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <section className="py-24 space-y-8">
      <h1 className="text-3xl font-bold text-center">お問い合わせ</h1>

      <p className="text-center text-gray-600">
        ご相談だけでも問題ありません。
        <br />
        お気軽にご連絡ください。
      </p>

      <ContactForm />
    </section>
  );
}
