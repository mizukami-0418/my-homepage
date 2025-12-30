// components/Works/worksData.ts

export type Work = {
  title: string;
  description: string;
  features: string[];
  techs: string[];
  github?: string;
  demo?: string;
};

export const works: Work[] = [
  {
    title: "単語帳アプリ",
    description: "英単語学習を効率化するための、シンプルな単語帳管理アプリ。",
    features: [
      "単語の登録・編集・削除（CRUD）",
      "学習ステータス管理",
      "レスポンシブ対応",
    ],
    techs: ["Python", "Django", "Heroku", "PostgreSQL"],
    github: "https://github.com/mizukami-0418/DjangoWordProject_Version2",
    demo: "https://flashcard.toamoku.net",
  },
  {
    title: "架空宿泊施設予約アプリ",
    description: "小規模宿泊施設の予約管理を想定したWebアプリ。",
    features: [
      "宿泊施設一覧・予約管理",
      "管理者用予約一覧画面",
      "自動返信メール",
    ],
    techs: [
      "Next.js",
      "JavaScript",
      "Material UI",
      "Supabase",
      "Tailwind CSS",
      "Vercel",
    ],
    github: "https://github.com/mizukami-0418/the-wild-oasis-website",
    demo: "https://the-wild-oasis.toamoku.net",
  },
  {
    title: "架空ピザ屋さんの注文管理アプリ",
    description: "飲食店の注文受付・管理を想定した業務アプリ。",
    features: ["メニュー表示・注文作成", "注文ステータス管理", "管理画面対応"],
    techs: ["React", "JavaScript", "Vite", "Tailwind CSS"],
    github: "https://github.com/mizukami-0418/fast-react-pizza",
    demo: "https://pizzalu.toamoku.net",
  },
];
