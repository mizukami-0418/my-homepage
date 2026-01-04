import { Box } from "@mui/material";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function SectionImage({ src, alt }: Props) {
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: 3,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={800}
        height={600}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
    </Box>
  );
}
