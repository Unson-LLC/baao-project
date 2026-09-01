const quotes = [
  {
    quote: "公開する声は、本人の文言確認と利用許諾を取得します。",
    source: "公開基準",
  },
  {
    quote: "成果数値は、測定方法・比較期間・除外条件を一次資料で確認します。",
    source: "検証基準",
  },
  {
    quote: "実績掲載と知識・AI利用の許諾は分け、何も選ばない自由を守ります。",
    source: "権利基準",
  },
];

import Image from "next/image";

export default function SampleVideosVoices() {
  return (
    <section id="voices" className="relative overflow-hidden bg-[#F9F6F0] py-16 md:py-20">
      {/* 背景に淡いアクセント画像（禅庭） */}
      <div className="pointer-events-none absolute -right-24 top-10 hidden h-[340px] w-[340px] rotate-6 opacity-20 sm:block">
        <Image
          src="/images/voices/zen.png"
          alt="禅的な気づきのイメージ"
          fill
          sizes="340px"
          className="object-cover rounded-full"
          priority
        />
      </div>
      <div className="pointer-events-none absolute -left-20 bottom-0 hidden h-[260px] w-[260px] -rotate-6 opacity-15 sm:block">
        <Image
          src="/images/voices/zen.png"
          alt="禅的な気づきのイメージ"
          fill
          sizes="260px"
          className="object-cover rounded-full"
          priority
        />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="rounded-3xl border border-[#D8CFC3] bg-white p-8 shadow-[0_12px_24px_rgba(29,26,21,0.08)]">
          <div className="relative overflow-hidden rounded-2xl bg-[#1D1A15]">
            <div className="aspect-video relative">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/0a2fe0sa08o?start=1"
                title="週次稽古｜AIニュース解説の一部"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm font-medium text-[#4B4135]">
                週次稽古｜AIニュース解説の一部
              </p>
            </div>
          </div>
          <p className="mt-6 rounded-xl bg-bamboo/10 px-5 py-4 text-sm text-[#4B4135]">
            動画・イベント情報は開催実績と公開許諾を確認したものだけ掲載します。
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="font-serif text-3xl text-[#1D1A15] sm:text-4xl">
            証拠と許諾を揃えて公開する。
          </h2>
          <div className="relative grid gap-5">
            {quotes.map((quote) => (
              <div
                key={quote.quote}
                className="rounded-2xl border border-[#D8CFC3] bg-white/70 p-5 shadow-sm backdrop-blur"
              >
                <p className="font-serif text-lg text-[#1D1A15]">&ldquo;{quote.quote}&rdquo;</p>
                <p className="mt-3 text-sm text-[#4B4135]">{quote.source}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
