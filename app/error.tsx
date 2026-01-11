"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-6 text-center">
      <p>エラーが発生しました</p>
      <button onClick={reset}>再読み込み</button>
    </div>
  );
}
