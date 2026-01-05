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
        ご相談だけでも問題ありません。 お気軽にご連絡ください。
      </Typography>

      <ContactForm />
    </Container>
  );
}
