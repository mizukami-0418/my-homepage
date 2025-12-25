export default function WorksSection() {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-bold text-center">制作実績</h2>

      <div className="max-w-xl mx-auto border p-6 rounded-lg space-y-4">
        <h3 className="font-semibold">Webアプリ（個人開発）</h3>

        <p className="text-gray-700">
          ユーザー管理・データ登録ができるWebアプリ
        </p>

        <p className="text-sm text-gray-500">
          React / Django REST Framework / Docker
        </p>

        <div className="flex gap-4">
          <a href="#" className="underline">
            GitHub
          </a>
          <a href="#" className="underline">
            Demo
          </a>
        </div>
      </div>
    </section>
  );
}
