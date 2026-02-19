import Image from "next/image";
import BrushDivider from "@/components/BrushDivider";

const agenda = [
  {
    title: "前半 35分｜基礎編",
    subtitle: "今週押さえたいAIニュース",
    description: "最新のAI動向やトレンドを分かりやすく解説。ビジネスへの影響や注目ポイントを共有します。",
  },
  {
    title: "後半 25分｜応用編",
    subtitle: "深掘りディスカッション",
    description: "AI導入に役立つ実践的な知見を、会話を通じて深く掘り下げます。参加者と一緒に示唆を引き出していきます。",
  },
];

export default function FreeLiveSection() {
  return (
    <section id="free-live" className="relative bg-white overflow-hidden">
      <div className="flex min-h-[600px] flex-col lg:flex-row">
        
        {/* 左側: テキストエリア */}
        <div className="relative flex flex-1 flex-col justify-center px-6 py-24 md:px-16 lg:px-24">
          <div className="max-w-xl mx-auto w-full space-y-16">
            
            {/* ヘッダー部分 */}
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3 text-xs font-medium text-dojo-green/70">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F5F8F6]">
                  <span className="w-1.5 h-1.5 rounded-full bg-dojo-green"></span>
                  顔出し不要
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F5F8F6]">
                  <span className="w-1.5 h-1.5 rounded-full bg-dojo-green"></span>
                  耳だけ参加OK
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F5F8F6]">
                  <span className="w-1.5 h-1.5 rounded-full bg-dojo-green"></span>
                  途中退室自由
                </span>
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-ink">
                無料の稽古ライブで、<br />
                <span className="text-dojo-green/80">道場の空気</span>を感じる。
              </h2>
              
              <p className="text-base leading-loose text-ink/70">
                毎週木曜日夜に開催。最新ケースの分解、実装実況、質疑応答までを60分で凝縮します。登録するとオープンチャット（LINE）に招待され、開催前後のアップデートも受け取れます。
              </p>
            </div>

            {/* アジェンダリスト - ミニマルに */}
            <div className="space-y-8 border-l border-black/5 pl-8">
              {agenda.map((item) => (
                <div key={item.title} className="relative">
                  <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-2 border-white bg-dojo-gold shadow-sm"></div>
                  <h3 className="flex flex-col sm:flex-row sm:items-baseline gap-2 font-bold text-lg text-ink mb-2">
                    <span>{item.title}</span>
                    <span className="text-sm font-normal text-ink/60 hidden sm:inline">/</span>
                    <span className="text-base text-dojo-green">{item.subtitle}</span>
                  </h3>
                  <p className="text-sm leading-relaxed text-ink/60">{item.description}</p>
                </div>
              ))}
            </div>

            {/* CTAエリア */}
            <div className="pt-4">
              <div className="bg-[#F5F8F6] rounded-xl p-8 text-center space-y-6">
                <div>
                  <h3 className="font-serif text-lg font-bold text-ink mb-2">参加方法はシンプルです</h3>
                  <p className="text-sm text-ink/60">LINEオープンチャットに参加するだけ。匿名OK。</p>
                </div>
                
                <a
                  href="https://line.me/ti/g2/Mb4gQI-33HfsA6V4gv_uFScufGZZIuqrp7q0_w?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#06C755] px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-[#05b34c] hover:shadow-lg hover:-translate-y-0.5 w-full sm:w-auto"
                >
                  LINEオープンチャットに参加する
                  <span className="text-white/80">→</span>
                </a>
                
                <p className="text-xs text-ink/40">
                  ※ 利用規約に同意した上でご参加ください
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* 右側: 画像エリア - 余白を活かす */}
        <div className="relative flex-1 min-h-[400px] lg:min-h-auto bg-[#F9F6F0]">
          <div className="absolute inset-8 md:inset-16 lg:inset-20">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/free-live/side.png"
                alt="無料の稽古ライブの雰囲気"
                fill
                className="object-cover object-center image-sepia scale-105 hover:scale-100 transition-transform duration-[10s]"
                sizes="50vw"
              />
              {/* 薄いオーバーレイ */}
              <div className="absolute inset-0 bg-dojo-green/10 mix-blend-multiply"></div>
            </div>
            {/* 装飾的な枠線 */}
            <div className="absolute -inset-4 border border-dojo-gold/30 rounded-[24px] pointer-events-none -z-10"></div>
          </div>
        </div>
      </div>
      
      {/* 筆のかすれ区切り線（下部） */}
      <div className="opacity-30">
        <BrushDivider position="bottom" color="washi" />
      </div>
    </section>
  );
}
