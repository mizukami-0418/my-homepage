import ContactForm from "@/app/components/contact/ContactForm";
import { Box, Typography } from "@mui/material";

export default function ContactPage() {
  return (
    <Box sx={{ py: 10 }}>
      <Typography variant="h4" align="center" gutterBottom>
        お問い合わせ
      </Typography>

      <Typography align="center" color="text.secondary" sx={{ mb: 6 }}>
        ご相談だけでも問題ありません。
        <br />
        お気軽にご連絡ください。
      </Typography>

      <ContactForm />
    </Box>
  );
}
