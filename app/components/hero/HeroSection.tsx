"use client";

import { Box, Typography, Button, Container } from "@mui/material";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        min-h-[75vh]
        flex items-center
        bg-cover bg-center
        bg-no-repeat
      "
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
      }}
    >
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-white/70" />

      <Container maxWidth="md" className="relative z-10">
        <Box textAlign="center">
          <Typography
            variant="h3"
            component="h1"
            fontWeight="bold"
            sx={{
              fontFamily: "var(--font-dancing-script)",
              fontSize: { xs: "3rem", md: "4rem", lg: "4.5rem" },
              color: "#1e293b",
            }}
          >
            TAMK Web Studio
          </Typography>

          <Typography
            variant="h5"
            component="p"
            color="text.secondary"
            sx={{ mt: 2 }}
          >
            小さなスタジオから、確かな信頼を
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 4, mb: 5, lineHeight: 1.8 }}
          >
            Webサイト制作から小規模なシステム開発まで。
            <br />
            個人スタジオだからこそできる、 丁寧で誠実な Web 制作を行っています。
          </Typography>

          <Button
            component={Link}
            href="/contact"
            variant="contained"
            size="large"
          >
            お問い合わせはこちら
          </Button>
        </Box>
      </Container>
    </section>
  );
}
