"use client";

import { useState } from "react";
import { submitContact } from "@/app/actions/contact";
import {
  Box,
  Button,
  TextField,
  Alert,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true });

  async function action(formData: FormData) {
    const result = await submitContact(formData);

    if (!result.success) {
      setError(result.error ?? "送信に失敗しました");
      setStatus("error");
      return;
    }

    setStatus("success");
  }

  if (status === "success") {
    return (
      <>
        <Alert severity="success">
          お問い合わせありがとうございます。 自動返信メールをお送りしました。
        </Alert>
        <Link href="/" style={{ textDecoration: "none" }}>
          トップページに戻る
        </Link>
      </>
    );
  }

  return (
    <Box
      component="form"
      action={action}
      sx={{
        maxWidth: 600,
        mx: "auto",
        px: isMobile ? 2 : 0,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <TextField name="name" label="お名前" fullWidth required />

      <TextField
        name="email"
        label="メールアドレス"
        type="email"
        fullWidth
        required
      />

      <TextField
        name="message"
        label="お問い合わせ内容"
        multiline
        rows={isMobile ? 4 : 6}
        fullWidth
        required
      />

      {status === "error" && <Alert severity="error">{error}</Alert>}

      <Button
        type="submit"
        variant="contained"
        size={isMobile ? "medium" : "large"}
        fullWidth
      >
        送信する
      </Button>
      <Link href="/" className="text-center hover:underline">
        トップページに戻る
      </Link>
    </Box>
  );
}
