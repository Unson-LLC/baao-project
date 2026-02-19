import Image from "next/image";
import BrushDivider from "@/components/BrushDivider";

const fellows = [
  {
    name: "山本 力弥",
    role: "BAAO代表理事 / AI戦略コンサルタント",
    expertise: "製造・通信業のサプライチェーン改革、サービスロボット事業開発。経産省AI原則実践ガバナンス・ガイドライン策定参画。",
    background: "慶應義塾大学理工学部管理工学科卒。外資コンサル、大手通信会社を経て、「AI技術の民主化」を掲げBAAOを設立。",
    image: "/images/yamamoto.webp",
  },
  {
    name: "佐藤 圭吾",
    role: "BAAO理事 / 生成AIエキスパート",
    expertise: "生成AIプロダクト開発、企業のAIトランスフォーメーション支援。NTTコミュニケーションズ生成AIエキスパート。",
    background: "2024年9月に雲孫LLC設立。AI利活用指針の策定や倫理ガイドラインの普及に注力。",
    image: "/images/29F5TBtd_400x400.jpg",
  },
  {
    name: "Hiromi Maeo",
    role: "ブランドデザイナー / Lovable Ambassador",
    expertise: "AI×ブランド設計×デザイン。企業の思想から「意味→構造→形」を導き響くブランドを設計。",
    background: "DFA Silver、A' Design Silver受賞。Behance Featured。企業のAI活用におけるブランド戦略とデザインを支援。",
    image: "/images/KkvKPBYp_400x400.jpg",
  },
];

export default function CommunityFellows() {
  return (
    <section className="relative bg-[#F9F6F0] py-24 md:py-32 overflow-hidden" id="community">
      <BrushDivider position="top" color="white" />
      
      {/* 背景装飾 */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-dojo-green/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-dojo-gold/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="relative mx-auto max-w-6xl px-4 md:px-6 z-10">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-block mb-4">
             <span className="px-4 py-1 border-x border-dojo-gold/50 text-dojo-gold font-serif text-sm tracking-widest">MENTORS</span>
          </div>
          <h2 className="font-serif text-3xl text-[#1D1A15] sm:text-4xl lg:text-5xl heading-seal">
            経験豊富な師範が、<br />
            実装をサポート。
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#4B4135]">
            AI道場には、各業界で実績を持つ師範が在籍。<br className="hidden md:block"/>
            実装の支援から、ケーススタディの共有まで、<br className="hidden md:block"/>
            実践的な知見を直接提供します。
          </p>
        </div>

        <div className="mt-12">
          <div className="rounded-[2.5rem] border border-[#D8CFC3] bg-white/60 p-8 md:p-12 shadow-xl backdrop-blur-sm relative overflow-hidden">
            {/* カード内の背景パターン */}
            <div className="absolute inset-0 pattern-seigaiha opacity-30 pointer-events-none"></div>
            
            <h3 className="relative text-sm font-bold uppercase tracking-widest text-dojo-green text-center mb-10 flex items-center justify-center gap-4">
              <span className="h-px w-8 bg-dojo-green/30"></span>
              在籍する師範（一部）
              <span className="h-px w-8 bg-dojo-green/30"></span>
            </h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {fellows.map((fellow) => (
                <div
                  key={fellow.name}
                  className="group relative rounded-2xl border border-[#D8CFC3] bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-dojo-indigo/30"
                >
                  {/* カードホバー時の光沢エフェクト */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
                  
                  <div className="relative flex items-start gap-4">
                    {fellow.image && (
                      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full ring-4 ring-[#F9F6F0] group-hover:ring-dojo-indigo/10 transition-all duration-500 shadow-inner">
                        <Image
                          src={fellow.image}
                          alt={fellow.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-serif font-bold text-lg text-[#1D1A15] group-hover:text-dojo-indigo transition-colors truncate">{fellow.name}</p>
                      <p className="mt-1 text-xs font-bold text-dojo-green/80 uppercase tracking-tight line-clamp-2">{fellow.role}</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-3 text-xs text-[#4B4135]">
                    <div>
                      <p className="font-semibold text-[#1D1A15] flex items-center gap-1">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-dojo-indigo/50"></span>
                        専門領域
                      </p>
                      <p className="mt-1 pl-2.5 border-l-2 border-[#D8CFC3]/50 group-hover:border-dojo-indigo/30 transition-colors">{fellow.expertise}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1D1A15] flex items-center gap-1">
                         <span className="inline-block h-1.5 w-1.5 rounded-full bg-bamboo/50"></span>
                         経歴
                      </p>
                      <p className="mt-1 pl-2.5 border-l-2 border-[#D8CFC3]/50 group-hover:border-bamboo/30 transition-colors">{fellow.background}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="rounded-2xl border-2 border-dashed border-[#D8CFC3] bg-[#F9F6F0]/50 p-6 flex flex-col items-center justify-center gap-2 text-[#4B4135] transition-colors hover:bg-[#F9F6F0] hover:border-dojo-gold/50 cursor-pointer group">
                <span className="text-3xl opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">✨</span>
                <p className="text-sm font-bold">and more...</p>
                <p className="text-xs opacity-70">様々な領域の専門家が参画中</p>
              </div>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <a
                href="/join#fellow"
                className="btn-primary flex items-center justify-center text-sm"
              >
                師範として参画する
              </a>
              <a
                href="/join#enterprise"
                className="btn-secondary flex items-center justify-center text-sm"
              >
                企業向け導入相談
              </a>
              <a
                href="/community"
                className="flex items-center justify-center rounded-lg border border-black/10 px-6 py-3 text-sm font-semibold text-ink/60 transition hover:bg-black/5 hover:text-ink"
              >
                詳細を見る
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
