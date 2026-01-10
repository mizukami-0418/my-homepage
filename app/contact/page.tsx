"use client";

import ContactForm from "@/app/components/contact/ContactForm";
import { Container, Typography } from "@mui/material";

export default function ContactPage() {
  return (
    <Container sx={{ py: 10 }}>
      <Typography variant="h4" align="center" gutterBottom>
        お問い合わせ
      </Typography>

      <Typography align="center" sx={{ mb: 6 }}>
        まずはご相談だけでも大丈夫です。お気軽にご連絡ください。
        <br />
        「こんなこと聞いていいのかな？」という内容も歓迎です
      </Typography>

      <ContactForm />
    </Container>
  );
}
