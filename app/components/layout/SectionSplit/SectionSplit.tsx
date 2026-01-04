"use client";

import { Box } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  left: ReactNode;
  right: ReactNode;
  reverse?: boolean; // 交互レイアウト用
};

export default function SectionSplit({ left, right, reverse = false }: Props) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "1fr 1fr",
        },
        gap: { xs: 4, md: 8 },
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          order: {
            xs: 1,
            md: reverse ? 2 : 1,
          },
        }}
      >
        {left}
      </Box>

      <Box
        sx={{
          order: {
            xs: 2,
            md: reverse ? 1 : 2,
          },
        }}
      >
        {right}
      </Box>
    </Box>
  );
}
