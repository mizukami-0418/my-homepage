import { Box, IconButton, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function SocialLinks() {
  const socials = [
    {
      label: "Instagram",
      href: "#",
      icon: <InstagramIcon fontSize="large" />,
    },
    {
      label: "X",
      href: "https://x.com/your-account",
      icon: <TwitterIcon fontSize="large" />,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/your-account",
      icon: <FacebookIcon fontSize="large" />,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 3,
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
            mt: 2,
          }}
        >
          <IconButton
            component="a"
            href={s.href}
            target="_blank"
            aria-label={s.label}
            color="inherit"
            className="color-foreground"
          >
            {s.icon}
          </IconButton>
          <Typography variant="caption">{s.label}</Typography>
        </Box>
      ))}
    </Box>
  );
}
