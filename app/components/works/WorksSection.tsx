// export default function WorksSection() {
//   return (
//     <section className="space-y-8">
//       <h2 className="text-2xl font-bold text-center">制作実績</h2>

//       <div className="max-w-xl mx-auto border p-6 rounded-lg space-y-4">
//         <h3 className="font-semibold">Webアプリ（個人開発）</h3>

//         <p className="text-gray-700">
//           ユーザー管理・データ登録ができるWebアプリ
//         </p>

//         <p className="text-sm text-gray-500">
//           React / Django REST Framework / Docker
//         </p>

//         <div className="flex gap-4">
//           <a href="https://flashcard.toamoku.net" className="underline">
//             単語帳アプリ
//           </a>
//           <a href="https://the-wild-oasis.toamoku.net" className="underline">
//             架空宿泊施設予約管理アプリ
//           </a>
//           <a href="https://pizzalu.toamoku.net" className="underline">
//             架空ピザ屋さんの注文管理アプリ
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

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
import GitHubIcon from "@mui/icons-material/GitHub";

import { works } from "./worksData";

export default function WorksSection() {
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", px: 2, py: 10 }}>
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
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: 4,
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {work.title}
              </Typography>

              <Typography variant="body2" color="text.secondary" mb={2}>
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

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {work.techs.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    variant="outlined"
                  />
                ))}
              </Box>
            </CardContent>

            <CardActions>
              {work.github && (
                <Button
                  size="small"
                  startIcon={<GitHubIcon />}
                  href={work.github}
                  target="_blank"
                >
                  GitHubへ
                </Button>
              )}
              {work.demo && (
                <Button
                  size="small"
                  startIcon={<LaunchIcon />}
                  href={work.demo}
                  target="_blank"
                >
                  Webサイトへ
                </Button>
              )}
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
