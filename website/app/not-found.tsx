import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-4 text-4xl font-bold text-ink">404</h1>
      <p className="mb-6 text-lg text-ink-light">お探しのページは見つかりませんでした。</p>
      <Link
        href="/"
        className="rounded-lg bg-ink px-6 py-3 text-white transition hover:bg-ink/90"
      >
        トップへ戻る
      </Link>
    </div>
  );
}
