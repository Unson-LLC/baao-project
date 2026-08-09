import BrushDivider from "@/components/BrushDivider";

const principles = [
  { title: "役割を先に合意", body: "案件、登壇、実績掲載、知識提供を分け、責任・報酬・公開範囲を個別に確認します。" },
  { title: "断っても不利益なし", body: "実績掲載や知識提供を辞退・保留しても、会員資格や案件配分で不利益を与えません。" },
  { title: "プロフィールは検証後", body: "人物、所属、役職、専門領域、実績をGraph SSOTと一次資料で確認してから公開します。" },
];

export default function CommunityFellows() {
  return (
    <section className="relative overflow-hidden bg-[#F9F6F0] py-24 md:py-32" id="community">
      <BrushDivider position="top" color="white" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-dojo-gold">Community</span>
          <h2 className="mt-4 font-serif text-3xl text-[#1D1A15] sm:text-4xl">責任と実績を確認できる専門家コミュニティへ。</h2>
          <p className="mt-6 text-lg leading-relaxed text-[#4B4135]">
            活動件数や肩書で競わせず、専門品質、信頼、倫理、協働、検証済み成果を確認します。
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {principles.map((item) => (
            <article key={item.title} className="rounded-3xl border border-[#D8CFC3] bg-white p-7 shadow-sm">
              <h3 className="font-serif text-xl text-[#1D1A15]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4B4135]">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="/join#fellow" className="btn-primary flex items-center justify-center text-sm">参画を相談する</a>
          <a href="/fellows" className="btn-secondary flex items-center justify-center text-sm">役職・公開基準を見る</a>
        </div>
        <p className="mt-6 text-center text-sm text-[#4B4135]">公開プロフィールは現在再検証中です。確認中は在籍者が0人であることを意味しません。</p>
      </div>
    </section>
  );
}
