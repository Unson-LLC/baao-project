import Link from "next/link";
import Image from "next/image";
import BrushDivider from "@/components/BrushDivider";

const nextLive = {
  date:
    process.env.NEXT_PUBLIC_NEXT_LIVE_DATE ??
    "毎週木曜 19:30-20:30",
  topic:
    process.env.NEXT_PUBLIC_NEXT_LIVE_TOPIC ??
    "週次稽古｜AIニュースと最新ケースの分解",
  mentor:
    process.env.NEXT_PUBLIC_NEXT_LIVE_MENTOR ??
    "佐藤 圭吾（BAAO理事 / 生成AIエキスパート）",
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#F9F6F0] min-h-[90vh] flex items-center"
    >
      {/* 背景: 畳の色合いを活かす */}
      <div className="absolute inset-0">
        {/* メインビジュアル: 畳の色をしっかり見せる */}
        <Image
          src="/images/hero/main2.png"
          alt="背景"
          fill
          priority
          className="object-cover object-center opacity-80"
        />
        
        {/* 和紙テクスチャを重ねて質感を出す */}
        <div className="absolute inset-0 opacity-30 mix-blend-multiply" 
             style={{ backgroundImage: "url('/images/programs/washi.png')", backgroundSize: "200px" }}>
        </div>
        
        {/* 文字の可読性を確保するためのグラデーション（左側を少し明るく） */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F9F6F0]/95 via-[#F9F6F0]/80 to-[#F9F6F0]/40" />
      </div>
      
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 md:px-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center z-10">
        
        {/* 左側: テキストエリア */}
        <div className="space-y-12 animate-fade-in">
          {/* ラベル */}
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-dojo-gold/60"></span>
            <span className="text-xs font-bold text-dojo-green tracking-[0.2em] uppercase font-sans text-opacity-80">
              BAAO Practical AI Dojo
            </span>
          </div>
          
          {/* メインコピー: タイポグラフィで魅せる */}
          <h1 className="font-serif text-[#1D1A15] leading-tight">
            {/* 上段 */}
            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
              <span className="relative group">
                流派
                <span className="absolute -top-2 -right-3 text-[10px] text-dojo-gold font-normal border border-dojo-gold/30 rounded-full w-4 h-4 flex items-center justify-center bg-[#F9F6F0]">壱</span>
              </span>
              <span className="text-dojo-gold/30 text-2xl font-light">×</span>
              <span className="relative group">
                勝ち筋
                <span className="absolute -top-2 -right-3 text-[10px] text-dojo-gold font-normal border border-dojo-gold/30 rounded-full w-4 h-4 flex items-center justify-center bg-[#F9F6F0]">弐</span>
              </span>
              <span className="text-dojo-gold/30 text-2xl font-light">×</span>
              <span className="relative group">
                型
                <span className="absolute -top-2 -right-3 text-[10px] text-dojo-gold font-normal border border-dojo-gold/30 rounded-full w-4 h-4 flex items-center justify-center bg-[#F9F6F0]">参</span>
              </span>
            </div>
            
            {/* 下段: 力強く */}
            <span className="block text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gradient-gold pb-2">
              四半期で成果を出す。
            </span>
          </h1>
          
          {/* リード文: 縦のラインで規律を持たせる */}
          <div className="flex gap-6">
            <div className="w-px bg-dojo-gold/30 h-auto self-stretch"></div>
            <p className="max-w-lg text-base leading-loose text-ink/80 font-serif">
              道場の稽古は、毎週の無料ライブから。<br />
              月謝で生成AIのアーカイブと伴随を受け、四半期で成果を可視化。<br />
              和の現場知と実装知で、組織のDX・AI活用を定着させます。
            </p>
          </div>

          {/* CTAエリア: シンプルに */}
          <div className="flex flex-col sm:flex-row gap-5 pt-4">
            <Link
              href="/join#enterprise"
              className="btn-primary inline-flex items-center justify-center gap-3"
            >
              <span>四半期で成果を相談する</span>
              <span className="text-xs opacity-60">→</span>
            </Link>
            <Link
              href="/community"
              className="btn-secondary inline-flex items-center justify-center"
            >
              師範として参画する
            </Link>
          </div>
        </div>

        {/* 右側: カードエリア（装飾を削ぎ落とす） */}
        <div className="relative space-y-6 lg:pl-12">
          {/* 背景の円形装飾 - 極めて薄く */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-dojo-green/5 rounded-full pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-dojo-gold/10 rounded-full pointer-events-none"></div>

          {/* 週次稽古カード */}
          <div className="relative bg-white p-8 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-black/5 transition-transform hover:-translate-y-1 duration-500">
            {/* 和風の透かし文字 */}
            <div className="absolute top-4 right-6 pointer-events-none opacity-[0.03]">
              <span className="font-serif text-8xl text-black writing-vertical">稽古</span>
            </div>

            <div className="relative">
              <span className="inline-block py-1 px-2 mb-4 text-[10px] font-bold tracking-widest text-dojo-gold border border-dojo-gold/30 rounded bg-white">
                NEXT LIVE
              </span>
              <h3 className="font-serif text-xl font-bold text-ink mb-6 leading-relaxed">
                {nextLive.topic}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 text-sm">
                  <span className="text-dojo-green/60 font-serif shrink-0">日時</span>
                  <span className="text-ink font-medium">{nextLive.date}</span>
                </div>
                <div className="flex items-start gap-4 text-sm">
                  <span className="text-dojo-green/60 font-serif shrink-0">師範</span>
                  <span className="text-ink font-medium">{nextLive.mentor}</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-black/5">
                <a
                  href="https://line.me/ti/g2/Mb4gQI-33HfsA6V4gv_uFScufGZZIuqrp7q0_w?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group w-full text-left"
                >
                  <span className="text-sm font-bold text-dojo-green group-hover:text-dojo-green/80 transition-colors">
                    今週の稽古に参加する
                  </span>
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-dojo-green/5 text-dojo-green group-hover:bg-dojo-green group-hover:text-white transition-all duration-300">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* サブカード（イベント） */}
          <div className="relative bg-white p-6 rounded-xl border border-dojo-green/20 backdrop-blur-sm hover:shadow-lg transition-all duration-500">
             <div className="flex items-center justify-between mb-3">
               <span className="text-[10px] font-bold tracking-widest text-dojo-green uppercase">Upcoming Event</span>
               <span className="text-[10px] px-2 py-0.5 bg-dojo-green/10 rounded text-dojo-green font-semibold">2/25(水)</span>
             </div>
             <p className="font-serif text-sm font-medium text-ink leading-relaxed mb-3">
               3時間の苦痛が15分の快感に！<br />
               AIで「白いスライド」に悩む時間をゼロにする無料オンラインセミナー
             </p>
             <div className="flex items-center justify-between mt-4 pt-4 border-t border-black/5">
               <span className="text-xs text-ink/60">19:30-20:30 オンライン</span>
               <a
                 href="https://baao-aidojo.peatix.com"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-xs font-bold text-dojo-green hover:text-dojo-green/80 transition-colors"
               >
                 詳細を見る →
               </a>
             </div>
          </div>
        </div>
      </div>
      
      {/* 筆のかすれ区切り線 - 色を薄くして控えめに */}
      <div className="absolute bottom-0 left-0 w-full opacity-30">
        <BrushDivider position="bottom" color="white" />
      </div>
    </section>
  );
}
