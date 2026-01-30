import type { Metadata } from "next";
import { Inter, Noto_Serif_JP, Yuji_Syuku } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import OrganizationSchema from "@/components/seo/OrganizationSchema";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSerif = Noto_Serif_JP({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-noto-serif" });
const yujiBrush = Yuji_Syuku({ subsets: ["latin"], weight: ["400"], variable: "--font-yuji-brush" });

export const metadata: Metadata = {
  metadataBase: new URL('https://baao-dojo.com'),
  title: "BAAO 実戦AI道場｜流派 × 勝ち筋 × 型で四半期で成果",
  description:
    "無料稽古で空気を掴み、月謝で型を得て、師範が伴随して四半期で成果を公開する。役割別の稽古ガイドと師範コミュニティ案内を備えた常設サイト。",
  keywords: [
    "BAAO",
    "AI道場",
    "生成AI",
    "DX伴随",
    "月謝プラン",
    "Field Director",
    "Fellow",
    "成功事例",
    "ROI",
  ],
  alternates: {
    canonical: 'https://baao-dojo.com',
  },
  openGraph: {
    title: "BAAO 実戦AI道場｜四半期で成果を証明",
    description:
      "無料稽古 → 月謝 → 師範が伴随して → 成果公開。役割別の稽古ルートと師範コミュニティ情報を二層構造で提供します。",
    type: "website",
    locale: "ja_JP",
    url: 'https://baao-dojo.com',
    siteName: "BAAO 実戦AI道場",
    images: [
      {
        url: '/images/hero/main2.png',
        width: 1200,
        height: 630,
        alt: 'BAAO 実戦AI道場 - 四半期で成果を出すAI導入支援',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BAAO 実戦AI道場｜四半期で成果を証明",
    description: "無料稽古から師範の伴随まで一貫支援。役割別ガイドで疑問を解消。",
    images: ['/images/hero/main2.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSerif.variable} ${yujiBrush.variable}`}>
      <head>
        <OrganizationSchema />
      </head>
      <body className="bg-washi text-ink">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
