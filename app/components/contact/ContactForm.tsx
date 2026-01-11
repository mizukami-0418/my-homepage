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
  Stack,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
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
      <Box
        sx={{
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
        }}
      >
        <Stack
          spacing={3}
          sx={{
            maxWidth: 480,
            width: "100%",
            textAlign: "center",
          }}
        >
          {/* 成功メッセージ */}
          <Alert
            severity="success"
            icon={<CheckCircleIcon fontSize="inherit" />}
            sx={{
              fontSize: "0.95rem",
              borderRadius: 2,
            }}
          >
            <Typography fontWeight="bold" gutterBottom>
              送信が完了しました 🎉
            </Typography>
            <Typography variant="body2">
              お問い合わせありがとうございます。
              <br />
              自動返信メールをお送りしました。
            </Typography>
          </Alert>

          {/* トップへ戻るボタン */}
          <Button
            component={Link}
            href="/"
            variant="contained"
            size="large"
            sx={{
              borderRadius: 999,
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            トップページに戻る
          </Button>
        </Stack>
      </Box>
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
      <TextField
        name="name"
        label="お名前"
        fullWidth
        required
        slotProps={{
          inputLabel: {
            shrink: true,
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            color: "hsl(var(--foreground))",
            "& fieldset": {
              borderColor: "hsl(var(--foreground))",
            },
            "&:hover fieldset": {
              borderColor: "hsl(var(--foreground))",
            },
            "&.Mui-focused fieldset": {
              borderColor: "hsl(var(--foreground))",
            },
          },
          "& .MuiInputLabel-root": {
            color: "hsl(var(--foreground))",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "hsl(var(--foreground))",
          },
        }}
      />

      <TextField
        name="email"
        label="メールアドレス"
        type="email"
        fullWidth
        required
        slotProps={{
          inputLabel: {
            shrink: true,
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            color: "hsl(var(--foreground))",
            "& fieldset": {
              borderColor: "hsl(var(--foreground))",
            },
            "&:hover fieldset": {
              borderColor: "hsl(var(--foreground))",
            },
            "&.Mui-focused fieldset": {
              borderColor: "hsl(var(--foreground))",
            },
          },
          "& .MuiInputLabel-root": {
            color: "hsl(var(--foreground))",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "hsl(var(--foreground))",
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
        slotProps={{
          inputLabel: {
            shrink: true,
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            color: "hsl(var(--foreground))",
            "& fieldset": {
              borderColor: "hsl(var(--foreground))",
            },
            "&:hover fieldset": {
              borderColor: "hsl(var(--foreground))",
            },
            "&.Mui-focused fieldset": {
              borderColor: "hsl(var(--foreground))",
            },
          },
          "& .MuiInputLabel-root": {
            color: "hsl(var(--foreground))",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "hsl(var(--foreground))",
          },
        }}
      />

      {status === "error" && <Alert severity="error">{error}</Alert>}

      <Button
        type="submit"
        variant="contained"
        size={isMobile ? "medium" : "large"}
        fullWidth
        sx={{
          fontWeight: "bold",
        }}
      >
        送信する
      </Button>
      <Button component={Link} href="/" variant="contained" size="large">
        トップページに戻る
      </Button>
    </Box>
  );
}
