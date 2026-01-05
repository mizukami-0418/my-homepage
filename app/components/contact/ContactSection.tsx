import { Button, Link } from "@mui/material";

export default function ContactSection() {
  return (
    <section id="contact" className="text-center space-y-6 mb-16">
      <h2 className="text-2xl font-bold">お問い合わせ</h2>

      <p className="text-gray-600">
        ご相談だけでも問題ありません。
        <br />
        お気軽にご連絡ください。
      </p>
      <Button component={Link} href="/contact" variant="contained" size="large">
        お問い合わせはこちら
      </Button>
    </section>
  );
}
