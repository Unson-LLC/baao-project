"use client";

import { useState } from "react";

const faqs = [
  {
    question: "生成AI導入の無料ライブは誰でも参加できますか？",
    answer:
      "はい、DX推進担当者から経営層、現場の方まで誰でも無料で参加できます。LINEのオープンチャットに参加するだけでOKです。顔出し不要・匿名での参加も可能で、途中退室も自由です。",
  },
  {
    question: "DX人材育成（月謝）とAI導入支援（企業向け）の違いは？",
    answer:
      "月謝プラン（修行者・書院生）は個人のAIスキル習得・リスキリングのためのプランです。企業向けプラン（評議会・伴随・秘伝書）は組織としての成果創出・AI導入を目的とし、専任チームが伴随支援します。",
  },
  {
    question: "参加までにどれくらい時間がかかりますか？",
    answer:
      "無料稽古はLINEオープンチャットに参加すればすぐに視聴できます（約10秒）。月謝プランは登録後すぐ利用開始できます。企業向けプランは初回相談から1〜2週間で開始できます。",
  },
  {
    question: "しつこい営業や勧誘はありますか？",
    answer:
      "一切ありません。BAAOは「現場知の共有」を目的としたコミュニティであり、無理な勧誘はポリシーに反します。安心してご参加ください。",
  },
];

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#F9F6F0] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-[#1D1A15] sm:text-4xl">
            よくある質問（抜粋）
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4B4135]">
            詳細は FAQ セクションをご覧ください。守秘・料金・導入スケジュールに関する質問をまとめています。
          </p>
        </div>
        <div className="mt-10 space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                openIndex === index
                  ? "border-dojo-green bg-white shadow-md"
                  : "border-[#D8CFC3] bg-white hover:border-dojo-green/50"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <span className={`font-bold transition-colors ${openIndex === index ? "text-dojo-green" : "text-[#1D1A15]"}`}>
                  {faq.question}
                </span>
                <span
                  className={`ml-4 flex h-8 w-8 items-center justify-center rounded-full transition-all ${
                    openIndex === index ? "bg-dojo-green text-white rotate-180" : "bg-[#F9F6F0] text-[#1D1A15]"
                  }`}
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="border-t border-[#F9F6F0] px-6 py-4 text-sm leading-relaxed text-[#4B4135]">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="/resources/faq"
            className="inline-flex items-center rounded-full border border-dojo-green px-6 py-2.5 text-sm font-bold text-dojo-green transition hover:bg-dojo-green hover:text-white"
          >
            FAQをもっと読む →
          </a>
        </div>
      </div>
    </section>
  );
}
