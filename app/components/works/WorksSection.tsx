"use client";

import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Chip,
  Button,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

import { works } from "./worksData";

export default function WorksSection() {
  return (
    <div id="works">
      <Box sx={{ maxWidth: 1200, mx: "auto", px: 2 }}>
        {/* Section Title */}
        <Typography
          variant="h4"
          component="h2"
          fontWeight="bold"
          textAlign="center"
          mb={6}
        >
          制作実績
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 4,
          }}
        >
          {works.map((work) => (
            <Card
              key={work.title}
              className="border border-foreground"
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent
                className="text-foreground bg-background"
                sx={{ flexGrow: 1 }}
              >
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {work.title}
                </Typography>

                <Typography variant="body2" mb={2}>
                  {work.description}
                </Typography>

                <Typography variant="subtitle2" fontWeight="bold">
                  主な機能
                </Typography>
                <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                  {work.features.map((feature) => (
                    <li key={feature}>
                      <Typography variant="body2">{feature}</Typography>
                    </li>
                  ))}
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                  }}
                >
                  {work.techs.map((tech) => (
                    <Chip
                      key={tech}
                      label={<span className="text-foreground">{tech}</span>}
                      size="small"
                      variant="outlined"
                    />
                  ))}
                </Box>
              </CardContent>
              <CardActions className="text-foreground bg-background">
                {work.demo && (
                  <Button
                    size="small"
                    startIcon={<LaunchIcon />}
                    href={work.demo}
                    target="_blank"
                    sx={{
                      color: "var(--foreground)",
                    }}
                  >
                    アプリケーションへ移動する
                  </Button>
                )}
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
    </div>
  );
}
