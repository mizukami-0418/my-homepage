"use client";

import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Chip,
  Stack,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import type { BlogArticle } from "@/types/blog";

type Props = {
  article: BlogArticle;
};

export default function BlogCard({ article }: Props) {
  return (
    <Card
      variant="outlined"
      sx={{
        borderColor: "var(--foreground)",
        backgroundColor: "var(--background)",
        transition: "all 0.25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        },
      }}
    >
      <CardActionArea
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          justifyContent: "flex-start",
          alignItems: "stretch",
        }}
      >
        <CardContent sx={{ p: 3, display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "var(--foreground)" }}
          >
            {article.title}
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            flexWrap="wrap"
            useFlexGap
            sx={{ mb: 2 }}
          >
            {article.tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                variant="outlined"
                sx={{
                  color: "var(--foreground)",
                  borderColor: "var(--foreground)",
                  opacity: 0.7,
                }}
              />
            ))}
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            spacing={0.5}
            sx={{ width: "100%" }}
          >
            <Typography variant="body2" sx={{ color: "var(--foreground)" }}>
              {new Date(article.created_at).toLocaleDateString("ja-JP", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Typography>
            <Typography variant="body2" sx={{ color: "var(--foreground)" }}>
              ❤️ {article.likes_count}
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              spacing={0.5}
              sx={{ pl: 16, color: "var(--foreground)" }}
            >
              <Typography variant="caption">Qiita で読む</Typography>
              <OpenInNewIcon
                sx={{
                  fontSize: 14,
                }}
              />
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
