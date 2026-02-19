import BrushDivider from "@/components/BrushDivider";

const steps = [
  {
    number: "1",
    title: "無料で試す",
    description: "週次の稽古ライブで雰囲気を体験",
    cta: { label: "稽古に参加", href: "/join#free-live" },
  },
  {
    number: "2",
    title: "月謝で学ぶ",
    description: "過去の知見を検索し、師範に質問しながら習得",
    cta: { label: "月謝プランを見る", href: "/programs#basic" },
  },
  {
    number: "3",
    title: "伴随で成果を出す",
    description: "専任チームと共に四半期で成果を可視化",
    cta: { label: "成果伴随を相談", href: "/join#enterprise" },
  },
];

export default function PathToMastery() {
  return (
    <section id="journey" className="relative bg-white py-24 md:py-32 overflow-hidden">
      {/* 上部の筆区切り */}
      <BrushDivider position="top" color="washi" />

      {/* 背景パターン */}
      <div className="absolute inset-0 pattern-asanoha opacity-40 pointer-events-none" />
      
      <div className="relative mx-auto max-w-6xl px-4 md:px-6 z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-block mb-4">
            <span className="text-dojo-gold font-brush text-xl tracking-widest">道場への入門</span>
          </div>
          <h2 className="font-serif text-3xl text-[#1D1A15] sm:text-4xl heading-seal">
            無料体験から成果まで、<br className="md:hidden" />3つの階梯
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#4B4135]">
            まずは無料で試して、自分のペースで学び、<br className="hidden md:block" />必要に応じて成果を出す。無理のないステップで進めます。
          </p>
        </div>
        <div className="relative mt-16">
          {/* 接続線（デスクトップのみ） */}
          <div className="absolute left-1/2 top-8 hidden h-[2px] w-[calc(100%-8rem)] -translate-x-1/2 bg-gradient-to-r from-bamboo/30 via-bamboo/50 to-bamboo/30 lg:block" />

          <div className="grid gap-12 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="relative group">
                <div className="flex flex-col items-center text-center p-6 rounded-3xl transition-all duration-300 hover:bg-white/50">
                  {/* ステップ番号 */}
                  <div className="relative z-10 mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#1D1A15] text-dojo-gold shadow-lg transition-transform group-hover:scale-105 duration-500 border-4 border-washi">
                    <span className="font-serif text-3xl mt-1">{["壱", "弐", "参"][index]}</span>
                  </div>

                  {/* タイトル */}
                  <h3 className="mb-3 font-serif text-xl font-bold text-[#1D1A15] group-hover:text-dojo-green transition-colors">
                    {step.title}
                  </h3>

                  {/* 説明 */}
                  <p className="mb-6 text-sm leading-relaxed text-[#4B4135]">
                    {step.description}
                  </p>

                  {/* CTA */}
                  <a
                    href={step.cta.href}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-bamboo px-6 py-2.5 text-sm font-semibold text-bamboo transition-all hover:bg-bamboo hover:text-white hover:shadow-md"
                  >
                    {step.cta.label}
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
