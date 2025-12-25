const problems = [
  "Webサイトが古く、集客につながっていない",
  "手作業の業務が多く、効率化したい",
  "簡単な管理ツールを作りたいが、頼める人がいない",
  "技術的な相談をできる相手がいない",
];

export default function ProblemsSection() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold text-center">
        こんなお悩みはありませんか？
      </h2>

      <ul className="max-w-xl mx-auto space-y-3">
        {problems.map((problem, index) => (
          <li key={index} className="text-gray-700">
            ・{problem}
          </li>
        ))}
      </ul>
    </section>
  );
}
