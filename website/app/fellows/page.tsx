import Link from "next/link";

const principles = [
  {
    title: "役割と責任を示す",
    description: "肩書きは人気や貢献量の順位ではなく、委任された権限・責任範囲・任期を示します。",
  },
  {
    title: "活動を証跡にする",
    description: "案件、監修、執筆、登壇はActivity Ledgerに記録し、点数やランキングへ変換しません。",
  },
  {
    title: "断る自由を守る",
    description: "実績掲載や知識提供は案件ごとの任意選択です。辞退しても資格や案件配分で不利益はありません。",
  },
  {
    title: "寄与した範囲だけ名乗る",
    description: "会員実績、BAAO共同提供、BAAO受注を分け、契約と提供の実態に合う表示だけを行います。",
  },
] as const;

const reviewCriteria = [
  "専門品質と検証済み成果",
  "再現可能な方法と学習共有",
  "顧客・共同提供者への信頼性",
  "倫理・守秘・権利・利益相反への対応",
  "協働とレビューの質",
  "役割の責任を引き受ける意思と可用性",
] as const;

export default function FellowsPage() {
  return (
    <main className="min-h-screen bg-[#F9F6F0] text-[#1D1A15]">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <section className="rounded-3xl border border-[#D8CFC3] bg-white/90 p-8 shadow-sm md:p-12">
          <span className="inline-flex items-center rounded-full bg-[#2F4C6E]/10 px-4 py-1 text-sm font-semibold text-[#2F4C6E]">
            Fellows & Governance Roles
          </span>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl">
            専門性を順位にせず、役割・品質・信頼を検証する。
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#4B4135]">
            BAAOの会員・役職制度は、活動件数を競わせる仕組みから、責任と実績を確認できる仕組みへ移行しました。
            実績掲載や知識提供は案件ごとの任意選択で、BAAOが受け取った価値には報酬、流通、案件機会、明確なクレジットを返します。
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/join#fellow"
              className="inline-flex items-center rounded-full bg-[#2F4C6E] px-5 py-2 font-semibold text-white transition hover:bg-[#4E6E92]"
            >
              Fellowに応募する
            </Link>
            <Link
              href="/join#fellow-assign"
              className="inline-flex items-center rounded-full border border-[#2F4C6E] px-5 py-2 font-semibold text-[#2F4C6E] transition hover:bg-[#2F4C6E]/10"
            >
              共同提供を相談する
            </Link>
          </div>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-2">
          {principles.map((principle) => (
            <article key={principle.title} className="rounded-3xl border border-[#D8CFC3] bg-white/80 p-6">
              <h2 className="font-serif text-2xl">{principle.title}</h2>
              <p className="mt-3 leading-relaxed text-[#4B4135]">{principle.description}</p>
            </article>
          ))}
        </section>

        <section className="mt-12 rounded-3xl border border-[#D8CFC3] bg-white/80 p-8">
          <h2 className="font-serif text-3xl">任命・更新で確認すること</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-[#4B4135]">
            自動昇格・自動降格は行いません。審査理由、承認者、任期を記録し、本人に確認・異議申立て・辞退の機会を設けます。
          </p>
          <ul className="mt-6 grid gap-3 text-[#4B4135] md:grid-cols-2">
            {reviewCriteria.map((criterion) => (
              <li key={criterion} className="rounded-2xl bg-[#F9F6F0] px-4 py-3">
                {criterion}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 rounded-3xl border border-dashed border-[#C47E3B]/60 bg-[#FDFBF7] p-8">
          <h2 className="font-serif text-3xl">公開プロフィールは再検証中です</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-[#4B4135]">
            人物、会員状態、役職、所属、専門領域、実績をGraph SSOTと一次資料で確認し、本人・顧客の許諾が揃ったプロフィールから公開します。
            未確認の人物やサンプル任命番号を、実在する公式メンバーとして表示しません。
          </p>
          <p className="mt-3 text-sm text-[#4B4135]">
            公開待ちは「該当者なし」ではなく「確認中」を意味します。
          </p>
        </section>
      </div>
    </main>
  );
}
