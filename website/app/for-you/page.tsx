const personas = [
  {
    id: "executive",
    title: "経営層・意思決定者の方",
    icon: "👔",
    challenges: [
      "AI投資のROIが見えず、役員会で説明できない",
      "四半期単位で具体的な成果を示す必要がある",
      "社内にAI人材がおらず、何から始めればいいかわからない",
    ],
    solutions: [
      {
        title: "伴随（はんずい）",
        description: "4〜8週でKPIを可視化し、Before/Afterを測定。専任チームが伴随し、四半期後に役員会で使える成果レポートを提供します。",
        cta: "伴随の相談をする",
        href: "/join#enterprise",
      },
      {
        title: "評議会（ひょうぎかい）",
        description: "未公開ケースや現場見学を通じて、他社の成功・失敗事例を学び、月次のクイック相談で四半期内の意思決定を後押しします。",
        cta: "評議会の詳細を見る",
        href: "/programs#prime",
      },
    ],
    testimonial: {
      quote: "四半期で役員会へ成果を示せる道筋が見えた。伴随レポートがそのまま経営会議資料になり、投資判断が進んだ。",
      source: "製造業 事業本部長（伴随プロジェクト導入企業）",
    },
  },
  {
    id: "dx-lead",
    title: "DX推進・プロジェクトリーダーの方",
    icon: "🚀",
    challenges: [
      "現場の協力を得られず、プロジェクトが進まない",
      "PoC止まりで終わり、他部署への横展開ができない",
      "実装の具体的な手順やツール選定で迷う",
    ],
    solutions: [
      {
        title: "書院生（しょいんせい）",
        description: "過去の稽古から必要な知見を検索でき、業界別ダイジェストで最新の手法を学べます。Larkで師範に質問も可能。",
        cta: "書院生プランを見る",
        href: "/programs#active",
      },
      {
        title: "週次稽古",
        description: "毎週木曜日に最新ケースの分解と実装実況を配信。現場を巻き込む方法や、失敗事例から学べます。",
        cta: "無料稽古に登録",
        href: "/join#free-live",
      },
    ],
    testimonial: {
      quote: "ノーコードによるアプリ開発の最前線を理解できた。人生が変わるほどのインパクトを受けました。",
      source: "参加者（未経験・知人紹介）",
    },
  },
  {
    id: "operator",
    title: "現場担当者・実装する方",
    icon: "⚙️",
    challenges: [
      "AIツールに興味はあるが、何から手をつけていいかわからない",
      "実際の業務でどう活用するか具体的なイメージが湧かない",
      "失敗事例を知り、同じ失敗を避けたい",
    ],
    solutions: [
      {
        title: "修行者（しゅぎょうしゃ）",
        description: "過去の稽古をいつでも視聴でき、週次ノートで実装の手順を学べます。Larkで師範に質問しながら進められます。",
        cta: "修行者プランを見る",
        href: "/programs#basic",
      },
      {
        title: "週次稽古",
        description: "実装ハンズオン実況で、実際の画面を見ながら学べます。質疑応答の時間もあります。",
        cta: "無料稽古に登録",
        href: "/join#free-live",
      },
    ],
    testimonial: {
      quote: "実際に触って、動かして、チームメンバの成果物を確認できた。会話を通してコミュニケーションが生まれるのが道場らしくて良い。",
      source: "参加者（5年以上・知人紹介）",
    },
  },
];

export default function ForYouPage() {
  return (
    <div className="bg-[#F9F6F0] min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-[#1D1A15] sm:text-5xl">
            参加を検討している方へ
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[#4B4135]">
            経営層、DX推進担当、現場担当者——それぞれの役割や課題に応じた最適な始め方をご案内します。
            <br />
            まずは毎週木曜の無料稽古で、道場の空気を体感してください。
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {personas.map((persona) => (
            <div
              key={persona.id}
              id={persona.id}
              className="rounded-3xl border-2 border-[#D8CFC3] bg-white p-8 shadow-lg md:p-12"
            >
              <div className="flex items-center gap-4">
                <div className="text-5xl">{persona.icon}</div>
                <h2 className="font-serif text-3xl font-bold text-[#1D1A15]">
                  {persona.title}
                </h2>
              </div>

              {/* よくある課題 */}
              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-bamboo">
                  よくある課題
                </h3>
                <ul className="mt-4 space-y-2">
                  {persona.challenges.map((challenge) => (
                    <li key={challenge} className="flex items-start gap-2 text-[#4B4135]">
                      <span className="mt-1 h-2 w-2 rounded-full bg-bamboo flex-shrink-0" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* おすすめの始め方 */}
              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-bamboo">
                  おすすめの始め方
                </h3>
                <div className="mt-4 grid gap-6 md:grid-cols-2">
                  {persona.solutions.map((solution) => (
                    <div
                      key={solution.title}
                      className="rounded-2xl border border-[#D8CFC3] bg-[#F9F6F0] p-6"
                    >
                      <h4 className="font-semibold text-[#1D1A15]">{solution.title}</h4>
                      <p className="mt-2 text-sm text-[#4B4135]">{solution.description}</p>
                      <a
                        href={solution.href}
                        className="mt-4 inline-flex items-center text-sm font-semibold text-bamboo hover:text-bamboo-light"
                      >
                        {solution.cta} →
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* 参加者の声 */}
              <div className="mt-8 rounded-2xl border border-[#D8CFC3] bg-white/70 p-6 backdrop-blur">
                <p className="font-serif text-lg text-[#1D1A15]">
                  &ldquo;{persona.testimonial.quote}&rdquo;
                </p>
                <p className="mt-3 text-sm text-[#4B4135]">{persona.testimonial.source}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 共通CTA */}
        <div className="mt-16 rounded-3xl border-2 border-bamboo bg-white p-8 text-center shadow-lg">
          <h3 className="font-serif text-2xl font-bold text-[#1D1A15]">
            まずは無料稽古から始めましょう
          </h3>
          <p className="mt-3 text-sm text-[#4B4135]">
            毎週木曜日 19:30-20:30、無料のライブ配信で道場の空気を体感。
            <br />
            最新のAIニュース解説と実践的なケース分解を通じて、実装のヒントを得られます。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://line.me/ti/g2/Mb4gQI-33HfsA6V4gv_uFScufGZZIuqrp7q0_w?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-vermillion px-6 py-3 text-sm font-semibold text-[#1D1A15] transition hover:bg-vermillion-dark shadow-lg"
            >
              週次稽古（無料）に参加する
            </a>
            <a
              href="/programs"
              className="inline-flex items-center justify-center rounded-full border border-bamboo px-6 py-3 text-sm font-semibold text-bamboo transition hover:bg-bamboo/10"
            >
              すべてのプログラムを見る
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
