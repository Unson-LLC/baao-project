import Image from "next/image";

const partners = [
  {
    name: "グローウィンパートナーズ",
    logo: "/images/partners/growin-partners.png",
    alt: "グローウィンパートナーズ ロゴ",
    url: "https://www.growin.jp/",
  },
];

export default function TrainingPartners() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-bold text-[#1D1A15] sm:text-4xl">
            研修事業実績
          </h2>
          <p className="mt-4 text-lg text-[#4B4135]">
            企業向けAI研修プログラムを提供しています
          </p>
        </div>

        {/* パートナーロゴ */}
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              <Image
                src={partner.logo}
                alt={partner.alt}
                width={200}
                height={200}
                className="h-32 w-auto object-contain"
              />
            </a>
          ))}
        </div>

        {/* 説明テキスト */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#4B4135]">
            生成AI活用の実践的な研修プログラムを、企業様向けにカスタマイズして提供しています。
          </p>
        </div>
      </div>
    </section>
  );
}
