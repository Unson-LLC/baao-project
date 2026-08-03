import Link from "next/link";

const verificationSteps = [
  "契約主体、提供主体、本人の役割を確認する",
  "Before / After、測定方法、期間、除外条件を一次資料で確認する",
  "企業名、個人名、ロゴ、数値、成果物の公開範囲を個別に確認する",
  "Case掲載とKnowledge・AI利用の許諾を分ける",
  "BAAO受注、BAAO共同提供、BAAO会員による実績を区別して表示する",
] as const;

export default function SuccessStoriesPage() {
  return (
    <main className="min-h-screen bg-[#F9F6F0] text-[#1D1A15]">
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <section className="rounded-3xl border border-[#D8CFC3] bg-white/90 p-8 shadow-sm md:p-12">
          <span className="inline-flex rounded-full bg-[#2F4C6E]/10 px-4 py-1 text-sm font-semibold text-[#2F4C6E]">
            Verified Cases
          </span>
          <h1 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">公開ケースは再検証中です</h1>
          <p className="mt-5 text-lg leading-relaxed text-[#4B4135]">
            BAAOは、サンプルや未確認の成果数値を実績として公開しません。Graph SSOT、一次資料、顧客・提供者の許諾が揃ったケースから掲載します。
          </p>
          <p className="mt-3 text-sm text-[#4B4135]">確認中は、実績が0件であることを意味しません。</p>
        </section>

        <section className="mt-10 rounded-3xl border border-[#D8CFC3] bg-white/80 p-8">
          <h2 className="font-serif text-3xl">掲載前に確認すること</h2>
          <ol className="mt-6 space-y-3 text-[#4B4135]">
            {verificationSteps.map((step, index) => (
              <li key={step} className="flex gap-3 rounded-2xl bg-[#F9F6F0] px-4 py-3">
                <span className="font-semibold text-[#C47E3B]">{index + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-10 rounded-3xl border border-dashed border-[#C47E3B]/60 bg-[#FDFBF7] p-8">
          <h2 className="font-serif text-2xl">実績掲載・共同提供の相談</h2>
          <p className="mt-3 leading-relaxed text-[#4B4135]">
            実績掲載は元案件の売上帰属を変えません。監修・品質レビュー・方法論提供が必要な場合は、案件開始前に共同提供の役務を別途合意します。
          </p>
          <Link href="/join#media" className="mt-5 inline-flex rounded-full bg-[#2F4C6E] px-5 py-2 font-semibold text-white">
            相談する
          </Link>
        </section>
      </div>
    </main>
  );
}
