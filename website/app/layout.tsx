import type { Metadata } from "next";
import { Inter, Noto_Serif_JP, Yuji_Syuku } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import StickyCTA from "@/components/StickyCTA";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSerif = Noto_Serif_JP({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-noto-serif" });
const yujiBrush = Yuji_Syuku({ subsets: ["latin"], weight: ["400"], variable: "--font-yuji-brush" });

export const metadata: Metadata = {
  metadataBase: new URL('https://dojo.baao.or.jp'),
  title: "BAAO 実戦AI道場｜四半期で成果を出す、和の現場知と実装知",
  description:
    "AI導入の失敗を防ぎ、四半期で具体的な成果を出すための「実戦AI道場」。毎週の無料ライブ稽古、過去の成功事例（秘伝書）、専門家による伴随支援で、組織のAI活用を確実に定着させます。まずは無料で見学から。",
  keywords: [
    "BAAO",
    "AI道場",
    "生成AI",
    "DX伴随",
    "実戦AI",
    "AI導入 失敗しない",
    "Field Director",
    "Fellow",
    "成功事例",
    "ROI",
  ],
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: 'https://dojo.baao.or.jp',
  },
  openGraph: {
    title: "BAAO 実戦AI道場｜四半期で成果を出す、和の現場知と実装知",
    description:
      "AI導入の失敗を防ぎ、四半期で具体的な成果を出すための「実戦AI道場」。毎週の無料ライブ稽古、過去の成功事例（秘伝書）、専門家による伴随支援で、組織のAI活用を確実に定着させます。",
    type: "website",
    locale: "ja_JP",
    url: 'https://dojo.baao.or.jp',
    siteName: "BAAO 実戦AI道場",
    images: [
      {
        url: 'https://dojo.baao.or.jp/images/hero/main2.png',
        width: 1200,
        height: 630,
        alt: 'BAAO 実戦AI道場 - 四半期で成果を出すAI導入支援',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BAAO 実戦AI道場｜四半期で成果を出す、和の現場知と実装知",
    description: "AI導入の失敗を防ぎ、四半期で具体的な成果を出すための「実戦AI道場」。まずは無料で見学から。",
    images: ['https://dojo.baao.or.jp/images/hero/main2.png'],
  },
};

import WebSiteSchema from "@/components/seo/WebSiteSchema";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSerif.variable} ${yujiBrush.variable}`}>
      <head>
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body className="bg-washi text-ink">
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <StickyCTA />
        <Analytics />
      </body>
    </html>
  );
}
