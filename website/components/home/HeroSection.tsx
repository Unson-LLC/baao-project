import Link from "next/link";
import Image from "next/image";

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
      className="relative overflow-hidden bg-gradient-to-br from-washi via-washi-dark to-dojo-green/10 ink-bleed"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero/main2.png"
          alt="流派 × 勝ち筋 × 型で、四半期で成果を出す。"
          fill
          priority
          className="object-cover object-center opacity-30 image-sepia"
        />
        <div className="absolute -left-24 top-16 h-96 w-96 rounded-full bg-dojo-gold/20 blur-3xl animate-float" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-dojo-green/30 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-dojo-indigo/10 blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-16 px-4 py-24 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-36">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-lg bg-dojo-green/10 px-5 py-2 border border-dojo-gold/30">
            <span className="h-2 w-2 rounded-full bg-dojo-gold animate-pulse" />
            <span className="text-sm font-bold text-dojo-green tracking-wide">
              実戦AI道場
            </span>
          </div>
          <h1 className="font-serif text-3xl font-bold leading-tight text-[#1D1A15] sm:text-4xl lg:text-5xl drop-shadow-sm">
            流派 × 勝ち筋 × 型で、
            <br />
            <span className="text-dojo-green">四半期で成果を出す。</span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-ink font-serif opacity-100">
            道場の稽古は、毎週の無料ライブから始まります。月謝でアーカイブと伴随を受け、四半期で成果を可視化し、ケースとして公開。和の現場知と実装知で、組織のAI活用を定着させます。
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/join#enterprise"
              className="btn-primary flex items-center justify-center"
            >
              四半期で成果を相談する
            </Link>
            <Link
              href="/community"
              className="flex items-center justify-center rounded-lg border-2 border-dojo-indigo px-6 py-3 text-dojo-indigo font-bold transition-all hover:bg-dojo-indigo hover:text-white"
            >
              師範として参画する
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          {/* 週次稽古カード - コンパクト版 */}
          <aside className="shoji-card corner-decoration rounded-2xl border-2 border-dojo-gold/30 bg-white/90 p-6 backdrop-blur">
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-wider text-dojo-gold border-b-2 border-dojo-gold pb-2 inline-block">
                次回 無料稽古
              </p>
              <h3 className="mt-3 font-serif text-lg font-bold text-dojo-green leading-snug">{nextLive.topic}</h3>
              <dl className="mt-4 space-y-2 text-xs">
                <div className="flex items-start gap-2 p-2 rounded-lg bg-washi/50">
                  <span className="mt-1 h-2 w-2 rounded-full bg-dojo-gold flex-shrink-0" />
                  <div>
                    <dt className="font-bold text-dojo-green">日時</dt>
                    <dd className="text-ink">{nextLive.date}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-2 p-2 rounded-lg bg-washi/50">
                  <span className="mt-1 h-2 w-2 rounded-full bg-dojo-gold flex-shrink-0" />
                  <div>
                    <dt className="font-bold text-dojo-green">師範</dt>
                    <dd className="text-ink">{nextLive.mentor}</dd>
                  </div>
                </div>
              </dl>
              <a
                href="https://line.me/ti/g2/Mb4gQI-33HfsA6V4gv_uFScufGZZIuqrp7q0_w?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block w-full text-center rounded-lg bg-dojo-green px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-dojo-green/90 shadow-md"
              >
                今週の稽古に参加する →
              </a>
            </div>
          </aside>

          {/* ハンズオン合宿イベントカード */}
          <aside className="shoji-card corner-decoration rounded-2xl border-2 border-[#4B4135]/30 bg-gradient-to-br from-[#4B4135]/5 to-[#D8CFC3]/20 p-6 backdrop-blur opacity-75">
            <div className="relative">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#4B4135] border-b-2 border-[#4B4135] pb-1 inline-block">
                  特別イベント
                </span>
                <span className="px-2 py-0.5 text-[10px] font-bold bg-[#4B4135]/20 text-[#4B4135] rounded-full">
                  開催終了
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1D1A15] leading-snug">
                実践！AI道場 〜AI活用で生産性5倍にするハンズオン合宿〜
              </h3>
              <dl className="mt-4 space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5">📅</span>
                  <div>
                    <dd className="text-ink font-semibold">2025年12月21日（日）開催終了</dd>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-0.5">📍</span>
                  <div>
                    <dd className="text-ink">ご参加ありがとうございました。次回もお楽しみに！</dd>
                  </div>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
