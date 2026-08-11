"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ja">
      <body>
        <div style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>エラーが発生しました</h1>
          <p style={{ marginBottom: "1.5rem" }}>ご不便をおかけして申し訳ありません。</p>
          <button
            onClick={() => reset()}
            style={{ padding: "0.75rem 1.5rem", background: "#111", color: "#fff", border: "none", borderRadius: "0.5rem", cursor: "pointer" }}
          >
            再試行
          </button>
        </div>
      </body>
    </html>
  );
}
