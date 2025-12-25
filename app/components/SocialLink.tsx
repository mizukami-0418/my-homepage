import { Box, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArticleIcon from "@mui/icons-material/Article";

export default function SocialLinks() {
  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/your-account",
      icon: <GitHubIcon fontSize="large" />,
    },
    {
      label: "X",
      href: "https://x.com/your-account",
      icon: <TwitterIcon fontSize="large" />,
    },
    {
      label: "Qiita",
      href: "https://qiita.com/your-account",
      icon: <ArticleIcon fontSize="large" />,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 3,
        mt: 4,
      }}
    >
      {socials.map((s) => (
        <Box
          key={s.label}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <IconButton
            component="a"
            href={s.href}
            target="_blank"
            aria-label={s.label}
          >
            {s.icon}
          </IconButton>
          <Typography variant="caption">{s.label}</Typography>
        </Box>
      ))}
    </Box>
  );
}
