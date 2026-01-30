import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BAAO道場ブログ | AI導入の実践知とノウハウ",
  description: "四半期で成果を出すAI導入の実践アプローチ、最新AIツール比較、組織変革のヒントをお届けします。経営層・DX推進担当者・現場担当者向けの実践的なコンテンツ。",
  keywords: ["AI導入", "DX推進", "ノーコードAI", "四半期成果", "組織変革", "AIツール比較", "実践AI"],
  openGraph: {
    title: "BAAO道場ブログ | AI導入の実践知とノウハウ",
    description: "四半期で成果を出すAI導入の実践アプローチ、最新AIツール比較、組織変革のヒントをお届けします。",
    type: "website",
    url: "https://baao-dojo.com/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "BAAO道場ブログ | AI導入の実践知とノウハウ",
    description: "四半期で成果を出すAI導入の実践アプローチ、最新AIツール比較、組織変革のヒントをお届けします。",
  },
};

export default function BlogPage() {
  return (
    <div className="bg-[#F9F6F0] min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-[#1D1A15] sm:text-5xl">
            BAAO道場ブログ
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[#4B4135]">
            AI導入の実践知、最新ツール比較、組織変革のヒントをお届けします
          </p>
        </div>

        {/* Coming Soon */}
        <div className="mt-16 rounded-3xl border-2 border-[#D8CFC3] bg-white p-12 md:p-20 text-center shadow-lg">
          <div className="font-serif text-6xl md:text-8xl text-bamboo mb-6">
            Coming Soon
          </div>
          <p className="text-lg text-[#4B4135] mb-8">
            ブログコンテンツを準備中です
          </p>
          <p className="text-sm text-[#4B4135] max-w-2xl mx-auto">
            AI導入の実践知、最新ツール比較、組織変革のヒントなど、<br />
            四半期で成果を出すための情報を発信予定です。
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl border-2 border-bamboo bg-white p-8 text-center shadow-lg">
          <h3 className="font-serif text-2xl font-bold text-[#1D1A15]">
            実践で学びたい方へ
          </h3>
          <p className="mt-3 text-sm text-[#4B4135]">
            ブログの更新をお待ちいただく間、<br />
            毎週木曜日の無料稽古で実践的に学んでいただけます
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://line.me/ti/g2/Mb4gQI-33HfsA6V4gv_uFScufGZZIuqrp7q0_w?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-vermillion px-6 py-3 text-sm font-semibold text-[#1D1A15] transition hover:bg-vermillion-dark shadow-lg"
            >
              週次稽古（無料）に参加する
            </a>
            <a
              href="/programs"
              className="inline-flex items-center justify-center rounded-full border border-bamboo px-6 py-3 text-sm font-semibold text-bamboo transition hover:bg-bamboo/10"
            >
              プログラムを見る
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
