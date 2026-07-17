const operatingPrinciples = [
  { key: "1", title: "役務と対価", description: "BAAOが対価を受け取るときは、紹介、監修、編集、配信など具体的な役務と責任を示します。" },
  { key: "2", title: "個別Opt-in", description: "共同提供、実績掲載、知識利用を分け、何も選ばない・保留・撤回の自由を守ります。" },
  { key: "3", title: "帰属と表示", description: "契約主体、提供主体、BAAOの役割を分け、実際に寄与した範囲だけを名乗ります。" },
  { key: "4", title: "権利の分離", description: "Case掲載の同意を、教材化、販売、AI学習、RAG利用の同意へ流用しません。" },
  { key: "5", title: "証跡と学習", description: "活動を点数競争にせず、品質、許諾、報酬、失敗をActivity Ledgerに残して改善します。" },
];

export default function MethodsPage() {
  return (
    <main className="min-h-screen bg-[#F9F6F0] text-[#1D1A15]">
      <div className="mx-auto max-w-4xl px-4 py-16 md:px-6">
        <header className="mb-12 space-y-4">
          <span className="text-sm font-semibold uppercase tracking-wide text-[#C47E3B]">
            Methods & FieldWorks
          </span>
          <h1 className="font-serif text-4xl">FieldWorks フレームワーク</h1>
          <p className="text-[#4B4135]">
            BAAO 実戦AI道場では、案件を「流派（Field）× 勝ち筋（Mission）× 型（Practice）」の三軸で整理し、契約主体、役務、RACI、権利、採算を明確にします。
          </p>
        </header>

        <section id="matrix" className="rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm">
          <h2 className="font-serif text-2xl text-[#1D1A15]">1. 三軸マトリクス</h2>
          <p className="mt-3 text-sm text-[#4B4135]">
            Field（業界）、Mission（勝ち筋）、Practice（型）の組み合わせで案件を設計。どの流派でも同じ品質で実装できるよう、秘伝書と監修プロセスを標準化しています。
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[#4B4135]">
            <li>製造 × Quality-Up × Ops Automation：検査AIでP95不良率を改善。</li>
            <li>医療 × Speed-Up × GenAI Apps：問診生成でリードタイム短縮。</li>
            <li>公共 × Cost-Down × Change & Enablement：窓口問い合わせ自動化。</li>
            <li>金融 × Growth-Up × Data & Integration：提案資料生成を半自動化。</li>
          </ul>
        </section>

        <section id="raci" className="mt-10 rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm">
          <h2 className="font-serif text-2xl text-[#1D1A15]">2. 役割（RACI）</h2>
          <p className="mt-3 text-sm text-[#4B4135]">
            案件ごとに契約主体と最終責任者（A）を決め、実装、監修、紹介、公開の役割を分けます。役職だけで案件責任が自動的に決まることはありません。
          </p>
          <ul className="mt-4 space-y-2 text-sm text-[#4B4135]">
            <li><strong>Responsible</strong>：Fellow／実装チーム</li>
            <li><strong>Accountable</strong>：契約と権限に基づき指名された案件責任者</li>
            <li><strong>Consulted</strong>：Senior Fellow（監修・RECIPES執筆）</li>
            <li><strong>Informed</strong>：Catalyst・Community Manager など</li>
          </ul>
        </section>

        <section id="quality" className="mt-10 rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm">
          <h2 className="font-serif text-2xl text-[#1D1A15]">3. 品質担保フロー</h2>
          <p className="mt-3 text-sm text-[#4B4135]">
            プレイブック、レビュー、検証証跡の三層で品質を担保します。成果の公開と再利用は、顧客・提供者・権利者の許諾を分けて確認します。
          </p>
          <ol className="mt-4 space-y-2 text-sm text-[#4B4135] list-decimal list-inside">
            <li>秘伝書：Flow × Mission × Practice ごとの成功パターンを文書化。</li>
            <li>週次レビュー：Field Director と Senior Fellow が進捗・品質をチェック。</li>
            <li>Activity Ledger：役割、品質、許諾、報酬、学習を記録し、件数ランキングには使わない。</li>
          </ol>
        </section>

        <section id="principles" className="mt-10 rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm">
          <h2 className="font-serif text-2xl text-[#1D1A15]">4. 価値交換の原則</h2>
          <p className="mt-3 text-sm text-[#4B4135]">
            希少性や地位喪失で参加を迫らず、受け取る価値と返す価値を透明にします。
          </p>
          <ul className="mt-4 grid gap-4 md:grid-cols-2">
            {operatingPrinciples.map((item) => (
              <li key={item.key} className="rounded-2xl border border-[#D8CFC3] bg-[#F9F6F0] p-4 text-sm text-[#4B4135]">
                <p className="font-semibold text-[#1D1A15]">{item.key}：{item.title}</p>
                <p className="mt-1">{item.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-12 space-y-4">
          <p className="text-sm text-[#4B4135]">
            FieldWorksの詳細や導入に関するご相談は <a href="/join#enterprise" className="text-[#2F4C6E] underline">/join#enterprise</a> から受け付けています。コミュニティ運営やFellow制度については <a href="/community#fellow" className="text-[#2F4C6E] underline">/community#fellow</a> をご覧ください。
          </p>
        </div>
      </div>
    </main>
  );
}
