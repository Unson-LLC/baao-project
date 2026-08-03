const routes = [
  { title: "案件に参画", body: "役務、成果物、責任、工数上限、報酬をSOWで合意します。" },
  { title: "実績を掲載", body: "契約・提供主体、成果根拠、顧客許諾を確認し、元案件の売上帰属を変えずに掲載します。" },
  { title: "知識を提供", body: "Case掲載とは別に、編集・配信・販売・AI利用の範囲と対価を合意します。" },
  { title: "登壇・レビュー", body: "目的、準備工数、公開範囲、報酬を活動ごとに合意します。" },
];

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-[#F9F6F0] text-[#1D1A15]">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <section className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-bamboo">BAAO Community</p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl">貢献を徴収せず、価値を交換する。</h1>
          <p className="mt-5 text-lg leading-relaxed text-[#4B4135]">
            BAAOが受け取った価値には、報酬、流通、案件機会、明確なクレジットを返します。案件・実績・知識・登壇は別々に選べます。
          </p>
        </section>
        <section className="mt-14 grid gap-6 md:grid-cols-2">
          {routes.map((route) => (
            <article key={route.title} className="rounded-3xl border border-[#D8CFC3] bg-white p-8 shadow-sm">
              <h2 className="font-serif text-2xl">{route.title}</h2>
              <p className="mt-3 leading-relaxed text-[#4B4135]">{route.body}</p>
            </article>
          ))}
        </section>
        <section className="mt-12 rounded-3xl border border-dashed border-[#C47E3B]/60 bg-white p-8 text-center">
          <h2 className="font-serif text-2xl">人物・役職の公開は再検証中です</h2>
          <p className="mt-3 text-[#4B4135]">Graph SSOT、一次資料、本人の許諾が揃ったプロフィールから公開します。確認中は在籍者が0人であることを意味しません。</p>
          <a href="/join#fellow" className="mt-6 inline-flex rounded-full bg-[#2F4C6E] px-6 py-3 font-semibold text-white">参画を相談する</a>
        </section>
      </div>
    </main>
  );
}
