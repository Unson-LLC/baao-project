export default function FAQSchema() {
  const faqData = [
    {
      question: "無料ライブは誰でも参加できますか？",
      answer: "はい、誰でも無料で参加できます。LINEのオープンチャットに参加するだけでOKです。匿名での参加も可能です。"
    },
    {
      question: "無料稽古の開催頻度と時間は？",
      answer: "毎週木曜日 19:30-20:30 に開催しています。ZoomまたはYouTube Liveで視聴できます。開始1時間前に視聴URLとスライドを配信します。"
    },
    {
      question: "稽古の内容はどのようなものですか？",
      answer: "前半35分は基礎編で今週押さえたいAIニュースを解説します。後半25分は応用編で、AI導入に役立つ実践的な知見を会話を通じて深く掘り下げます。"
    },
    {
      question: "月謝プランと企業向けプランの違いは？",
      answer: "月謝プラン（修行者・書院生）は個人で学ぶためのプランで、過去の稽古や知見を検索しながら学べます。企業向けプラン（評議会・伴随・秘伝書）は成果を出すための支援で、専任チームが伴随します。"
    },
    {
      question: "四半期で成果を出すとはどういう意味ですか？",
      answer: "Before/Afterを可視化し、KPIの改善を測定します。例えば、不良率の削減、業務時間の短縮、受注率の向上など、具体的な数値で成果を示します。伴随期間中に測定方法も設計します。"
    },
    {
      question: "師範として参画するにはどうすればいいですか？",
      answer: "まずは無料稽古に参加し、月謝プランで学習を深めてください。その後、実案件への参画を相談いただけます。師範には役割に応じた報酬や特典があります。"
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
