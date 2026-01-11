type Service = {
  title: string;
  description: string[];
  tech: string;
};

const services: Service[] = [
  {
    title: "Webサイト制作",
    description: [
      "コーポレートサイト",
      "ポートフォリオサイト",
      "LP（ランディングページ）",
    ],
    tech: "Next.js / React / Tailwind CSS",
  },
  {
    title: "Webアプリ開発",
    description: ["業務管理ツール", "フォーム・データ管理", "API連携アプリ"],
    tech: "Django / Django REST Framework / Supabase / Vercel / Docker / Heroku",
  },
  {
    title: "改修・保守・技術サポート",
    description: [
      "既存サイトの修正",
      "小規模な機能追加",
      "技術相談・アドバイス",
    ],
    tech: "",
  },
];

export default function ServicesSection() {
  return (
    <section id="skills" className="space-y-12">
      <h2 className="text-2xl font-bold text-center">提供サービス</h2>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="border p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-4">{service.title}</h3>

            <ul className="space-y-1 text-foreground">
              {service.description.map((item) => (
                <li key={item}>・{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
