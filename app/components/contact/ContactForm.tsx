"use client";

import { useState } from "react";
import { submitContact } from "@/app/actions/contact";
import { Box, Button, TextField, Alert } from "@mui/material";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState("");

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
      <Alert severity="success">
        お問い合わせありがとうございました。後ほどご連絡いたします。
      </Alert>
    );
  }

  return (
    <Box
      component="form"
      action={action}
      sx={{
        maxWidth: 500,
        mx: "auto",
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
        rows={5}
        fullWidth
        required
      />

      {status === "error" && <Alert severity="error">{error}</Alert>}

      <Button type="submit" variant="contained" size="large">
        送信する
      </Button>
    </Box>
  );
}
