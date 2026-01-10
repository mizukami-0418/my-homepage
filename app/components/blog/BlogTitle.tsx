"use client";

import { Box, Typography, useTheme } from "@mui/material";

export function BlogTitle() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        textAlign: "center",
        py: { xs: 8, md: 12 },
      }}
    >
      {/* Main Title */}
      <Typography
        variant="h2"
        component="h1"
        fontWeight="bold"
        sx={{
          mb: 2,
          background: `linear-gradient(
            90deg,
            ${theme.palette.primary.main},
            ${theme.palette.secondary.main}
          )`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        tomo Qiita Articles
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="h6"
        component="p"
        sx={{ color: "var(--foreground)" }}
      >
        Qiita技術記事まとめ
      </Typography>
    </Box>
  );
}
