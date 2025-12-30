// export default function HeroSection() {
//   return (
//     <section className="text-center space-y-6 py-24">
//       <h1 className="text-4xl font-bold leading-tight">
//         Webサイト・Webアプリで
//         <br />
//         事業の「困った」を解決します
//       </h1>

//       <p className="text-lg text-gray-600">
//         中小事業者・個人事業主向け
//         <br />
//         React / Next.js × Django REST Framework
//       </p>

//       <p className="text-gray-500">
//         要件整理から実装・運用まで一貫して対応します
//       </p>

//       <a
//         href="#contact"
//         className="inline-block rounded-md bg-black px-6 py-3 text-white hover:bg-gray-800"
//       >
//         お問い合わせはこちら
//       </a>
//     </section>
//   );
// }

// "use client";
// 背景白バージョン
// import { Box, Typography, Button, Container } from "@mui/material";
// import Link from "next/link";

// export default function HeroSection() {
//   return (
//     <Box
//       component="section"
//       sx={{
//         minHeight: "70vh",
//         display: "flex",
//         alignItems: "center",
//         backgroundColor: "#f9fafb",
//       }}
//     >
//       <Container maxWidth="md">
//         <Box sx={{ textAlign: "center" }}>
//           {/* サイト名 */}
//           <Typography
//             variant="h3"
//             component="h1"
//             fontWeight="bold"
//             gutterBottom
//           >
//             TAMK Web Studio
//           </Typography>

//           {/* キャッチコピー */}
//           <Typography
//             variant="h5"
//             component="p"
//             color="text.secondary"
//             gutterBottom
//           >
//             小さなスタジオから、確かな信頼を
//           </Typography>

//           {/* 説明文 */}
//           <Typography
//             variant="body1"
//             color="text.secondary"
//             sx={{ mt: 3, mb: 5, lineHeight: 1.8 }}
//           >
//             Webサイト制作から小規模なシステム開発まで。
//             <br />
//             個人スタジオだからこそできる、 丁寧で誠実な Web 制作を行っています。
//           </Typography>

//           {/* CTA */}
//           <Button
//             component={Link}
//             href="/contact"
//             variant="contained"
//             size="large"
//           >
//             お問い合わせはこちら
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// }

// "use client";
// 背景グラデーションバージョン
// import { Box, Typography, Button, Container } from "@mui/material";
// import Link from "next/link";

// export default function HeroSection() {
//   return (
//     <section
//       className="
//         min-h-[70vh]
//         flex items-center
//         bg-gradient-to-br
//         from-slate-50
//         via-blue-50
//         to-indigo-100
//       "
//     >
//       <Container maxWidth="md">
//         <Box textAlign="center">
//           {/* サイト名 */}
//           <Typography variant="h3" component="h1" fontWeight="bold">
//             TAMK Web Studio
//           </Typography>

//           {/* キャッチコピー */}
//           <Typography
//             variant="h5"
//             component="p"
//             color="text.secondary"
//             sx={{ mt: 2 }}
//           >
//             小さなスタジオから、確かな信頼を
//           </Typography>

//           {/* 説明文 */}
//           <Typography
//             variant="body1"
//             color="text.secondary"
//             sx={{ mt: 4, mb: 5, lineHeight: 1.8 }}
//           >
//             Webサイト制作から小規模なシステム開発まで。
//             <br />
//             個人スタジオだからこそできる、 丁寧で誠実な Web 制作を行っています。
//           </Typography>

//           {/* CTA */}
//           <Button
//             component={Link}
//             href="/contact"
//             variant="contained"
//             size="large"
//           >
//             お問い合わせはこちら
//           </Button>
//         </Box>
//       </Container>
//     </section>
//   );
// }

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
          <Typography variant="h3" component="h1" fontWeight="bold">
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
