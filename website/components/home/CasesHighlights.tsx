const caseTypes = [
  {
    label: "BAAO受注",
    condition: "BAAOが顧客との契約主体となり、成果責任と請求責任を負う案件です。",
  },
  {
    label: "BAAO共同提供",
    condition: "案件開始前のSOWに基づき、BAAOが監修・品質・PM・方法論などを提供した案件です。",
  },
  {
    label: "BAAO会員による実績",
    condition: "会員・会員法人が契約・提供した実績を、許諾と事実確認を経て掲載します。BAAO受注や品質保証を意味しません。",
  },
] as const;

export default function CasesHighlights() {
  return (
    <section id="cases" className="ink-bleed bg-[#F9F6F0] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-[#1D1A15] sm:text-4xl">
            寄与した範囲だけを、検証可能な実績として公開する。
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4B4135]">
            契約主体、提供者、BAAOの役割、成果の根拠、顧客許諾を確認し、第三者が誤認しない区分で掲載します。
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {caseTypes.map((type) => (
            <article key={type.label} className="rounded-3xl border-2 border-[#D8CFC3] bg-white p-6 shadow-sm">
              <h3 className="font-serif text-2xl text-[#1D1A15]">{type.label}</h3>
              <p className="mt-3 leading-relaxed text-[#4B4135]">{type.condition}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-dashed border-[#C47E3B]/60 bg-white/70 p-8 text-center">
          <h3 className="font-serif text-2xl text-[#1D1A15]">公開ケースは再検証中です</h3>
          <p className="mx-auto mt-3 max-w-3xl leading-relaxed text-[#4B4135]">
            既存のサンプル人物、任命番号、成果数値は公開面から外しました。Graph SSOT、一次資料、顧客・提供者の許諾が揃ったケースから順次公開します。
          </p>
          <p className="mt-2 text-sm text-[#4B4135]">確認中は「実績なし」や「0件」を意味しません。</p>
        </div>
      </div>
    </section>
  );
}
