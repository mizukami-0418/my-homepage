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
      <Alert severity="success">
        お問い合わせありがとうございます。 自動返信メールをお送りしました。
      </Alert>
    );
  }

  return (
    // <Box
    //   component="form"
    //   action={action}
    //   sx={{
    //     maxWidth: 600,
    //     mx: "auto",
    //     px: isMobile ? 2 : 0,
    //     display: "flex",
    //     flexDirection: "column",
    //     gap: 3,
    //   }}
    // >
    //   <TextField name="name" label="お名前" fullWidth required />

    //   <TextField
    //     name="email"
    //     label="メールアドレス"
    //     type="email"
    //     fullWidth
    //     required
    //   />

    //   <TextField
    //     name="message"
    //     label="お問い合わせ内容"
    //     multiline
    //     rows={isMobile ? 4 : 6}
    //     fullWidth
    //     required
    //   />

    //   {status === "error" && <Alert severity="error">{error}</Alert>}

    //   <Button
    //     type="submit"
    //     variant="contained"
    //     size={isMobile ? "medium" : "large"}
    //     fullWidth
    //   >
    //     送信する
    //   </Button>
    // </Box>
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
      <TextField
        name="name"
        label="お名前"
        fullWidth
        required
        sx={{
          "& .MuiInputLabel-root": {
            color: "#6b7280", // gray-500
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#2563eb", // blue-600
          },
          "& .MuiOutlinedInput-root": {
            color: "#111827", // gray-900
            backgroundColor: "#ffffff",
            "& fieldset": {
              borderColor: "#e5e7eb", // gray-200
            },
            "&:hover fieldset": {
              borderColor: "#9ca3af", // gray-400
            },
            "&.Mui-focused fieldset": {
              borderColor: "#2563eb",
              borderWidth: 2,
            },
          },
        }}
      />

      <TextField
        name="email"
        label="メールアドレス"
        type="email"
        fullWidth
        required
        sx={{
          "& .MuiInputLabel-root": {
            color: "#6b7280",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#2563eb",
          },
          "& .MuiOutlinedInput-root": {
            color: "#111827",
            backgroundColor: "#ffffff",
            "& fieldset": {
              borderColor: "#e5e7eb",
            },
            "&:hover fieldset": {
              borderColor: "#9ca3af",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#2563eb",
              borderWidth: 2,
            },
          },
        }}
      />

      <TextField
        name="message"
        label="お問い合わせ内容"
        multiline
        rows={isMobile ? 4 : 6}
        fullWidth
        required
        sx={{
          "& .MuiInputLabel-root": {
            color: "#6b7280",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#2563eb",
          },
          "& .MuiOutlinedInput-root": {
            color: "#111827",
            backgroundColor: "#ffffff",
            "& fieldset": {
              borderColor: "#e5e7eb",
            },
            "&:hover fieldset": {
              borderColor: "#9ca3af",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#2563eb",
              borderWidth: 2,
            },
          },
        }}
      />

      {status === "error" && (
        <Alert severity="error" sx={{ mt: 1 }}>
          {error}
        </Alert>
      )}

      <Button
        type="submit"
        variant="contained"
        size={isMobile ? "medium" : "large"}
        fullWidth
        sx={{
          mt: 2,
          py: 1.5,
          fontWeight: "bold",
          backgroundColor: "#2563eb",
          "&:hover": {
            backgroundColor: "#1d4ed8",
          },
        }}
      >
        送信する
      </Button>
    </Box>
  );
}
