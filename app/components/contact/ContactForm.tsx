"use client";

import { useState } from "react";
import { submitContact } from "@/app/actions/contact";

// Contact form component
export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function action(formData: FormData) {
    const result = await submitContact(formData);

    if (!result.success) {
      setError(result.error ?? "エラーが発生しました");
      setStatus("error");
      return;
    }

    setStatus("success");
  }

  if (status === "success") {
    return (
      <p className="text-center text-green-600">
        お問い合わせありがとうございました。
      </p>
    );
  }

  return (
    <form action={action} className="space-y-6 max-w-md mx-auto">
      <input
        name="name"
        placeholder="お名前"
        className="w-full border p-3 rounded"
        required
      />

      <input
        name="email"
        type="email"
        placeholder="メールアドレス"
        className="w-full border p-3 rounded"
        required
      />

      <textarea
        name="message"
        placeholder="お問い合わせ内容"
        rows={5}
        className="w-full border p-3 rounded"
        required
      />

      {status === "error" && <p className="text-red-500 text-sm">{error}</p>}

      <button type="submit" className="w-full bg-black text-white py-3 rounded">
        送信する
      </button>
    </form>
  );
}
