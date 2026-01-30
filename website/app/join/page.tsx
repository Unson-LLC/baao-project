"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

const toFormspreeAction = (value?: string) => {
  if (!value) return null;
  return value.startsWith("http") ? value : `https://formspree.io/f/${value}`;
};

const formspreeActions = {
  general: toFormspreeAction(
    process.env.NEXT_PUBLIC_FORMSPREE_GENERAL ??
      process.env.NEXT_PUBLIC_FORMSPREE_CORPORATE ??
      process.env.NEXT_PUBLIC_FORMSPREE_ENTERPRISE
  ),
  fellow: toFormspreeAction(process.env.NEXT_PUBLIC_FORMSPREE_FELLOW),
  media: toFormspreeAction(process.env.NEXT_PUBLIC_FORMSPREE_MEDIA),
};

function MissingFormNotice({ contact }: { contact?: string }) {
  return (
    <p className="rounded-xl border border-[#D8CFC3] bg-[#F9F6F0] px-4 py-3 text-sm text-[#4B4135]">
      フォームは準備中です。お急ぎの方は {contact ?? "media@baao.or.jp"} までご連絡ください。
    </p>
  );
}

type FormKey =
  | "general"
  | "fellow"
  | "media";

type FormDefinition = {
  key: FormKey;
  label: string;
  anchor: string;
  heading: string;
  description: ReactNode;
  renderForm: (action: string | null, headingId: string) => ReactNode;
};

const formDefinitions: FormDefinition[] = [
  {
    key: "general",
    label: "参加希望の方のお問い合わせ",
    anchor: "#general",
    heading: "参加希望の方のお問い合わせ",
    description: (
      <p className="text-sm text-[#4B4135]">
        無料稽古、月謝プラン、企業向けプログラムなど、参加に関するお問い合わせはこちらから。担当者より2営業日以内にご返信いたします。
      </p>
    ),
    renderForm: (action, headingId) =>
      action ? (
        <form
          aria-labelledby={headingId}
          action={action}
          method="POST"
          className="grid gap-4 md:grid-cols-2"
        >
          <label className="flex flex-col gap-2 text-sm text-[#4B4135] md:col-span-2">
            お問い合わせ種別
            <select
              name="inquiry_type"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-bamboo focus:outline-none focus:ring-2 focus:ring-bamboo/20"
              defaultValue=""
              required
            >
              <option value="" disabled>
                選択してください
              </option>
              <option value="general">一般的な質問・相談</option>
              <option value="corporate">企業向けプログラム（評議会・伴随）</option>
              <option value="monthly">月謝プラン（修行者・書院生）</option>
            </select>
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            お名前
            <input
              type="text"
              name="name"
              autoComplete="name"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-bamboo focus:outline-none focus:ring-2 focus:ring-bamboo/20"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            メールアドレス
            <input
              type="email"
              name="email"
              autoComplete="email"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-bamboo focus:outline-none focus:ring-2 focus:ring-bamboo/20"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135] md:col-span-2">
            所属（会社名・部門）
            <input
              type="text"
              name="organization"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-bamboo focus:outline-none focus:ring-2 focus:ring-bamboo/20"
              placeholder="例）BAAO株式会社 DX推進部"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135] md:col-span-2">
            お問い合わせ内容
            <textarea
              name="message"
              rows={6}
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-bamboo focus:outline-none focus:ring-2 focus:ring-bamboo/20"
              placeholder="お問い合わせ内容を具体的にご記入ください"
              required
            />
          </label>
          <input type="hidden" name="_subject" value="参加希望のお問い合わせ" />
          <input type="hidden" name="origin" value="join_general" />
          <button
            type="submit"
            className="md:col-span-2 inline-flex items-center justify-center rounded-full bg-vermillion px-6 py-3 text-sm font-semibold text-[#1D1A15] transition hover:bg-vermillion-dark"
          >
            送信する
          </button>
        </form>
      ) : (
        <MissingFormNotice />
      ),
  },
  {
    key: "fellow",
    label: "Fellow応募",
    anchor: "#fellow",
    heading: "Fellow応募",
    description: (
      <div className="space-y-3 text-sm text-[#4B4135]">
        <p>専門領域や参画の動機を記入してください。Impact Points・グレードに応じた参画プランをご案内します。</p>
        <ul className="space-y-1 list-disc list-inside">
          <li>応募後 3 営業日以内に担当 Field Director が面談日程をご連絡します。</li>
          <li>面談時に Impact Points の仮付与、参画可能な案件や登壇枠をご提案します。</li>
          <li>合意後は Green Room / Lark へ招待し、最初の案件または登壇にアサインします。</li>
        </ul>
      </div>
    ),
    renderForm: (action, headingId) =>
      action ? (
        <form
          aria-labelledby={headingId}
          action={action}
          method="POST"
          className="grid gap-4 md:grid-cols-2"
        >
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            氏名
            <input
              type="text"
              name="name"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-bamboo focus:outline-none focus:ring-2 focus:ring-bamboo/20"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            メールアドレス
            <input
              type="email"
              name="email"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-bamboo focus:outline-none focus:ring-2 focus:ring-bamboo/20"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135] md:col-span-2">
            専門領域
            <input
              type="text"
              name="speciality"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-bamboo focus:outline-none focus:ring-2 focus:ring-bamboo/20"
              placeholder="例）製造 × Quality-Up × Vision AI"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135] md:col-span-2">
            経歴・実績（リンク可）
            <textarea
              name="experience"
              rows={4}
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-bamboo focus:outline-none focus:ring-2 focus:ring-bamboo/20"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135] md:col-span-2">
            期待する関与（案件実装 / 監修 / 共著 / 登壇など）
            <textarea
              name="engagement"
              rows={3}
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-bamboo focus:outline-none focus:ring-2 focus:ring-bamboo/20"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135] md:col-span-2">
            期待するリターン
            <textarea
              name="expected_return"
              rows={2}
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-bamboo focus:outline-none focus:ring-2 focus:ring-bamboo/20"
              placeholder="報酬、ブランド露出、Impact Pointsなど"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            参画可能な時間帯
            <input
              type="text"
              name="availability"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-bamboo focus:outline-none focus:ring-2 focus:ring-bamboo/20"
              placeholder="例）平日夜・土曜午前"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            参考URL / SNS
            <input
              type="url"
              name="portfolio"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-bamboo focus:outline-none focus:ring-2 focus:ring-bamboo/20"
              placeholder="ポートフォリオやSNSなど"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            推薦者（任意）
            <input
              type="text"
              name="referrer"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-bamboo focus:outline-none focus:ring-2 focus:ring-bamboo/20"
              placeholder="紹介者がいればご記入ください"
            />
          </label>
          <label className="flex items-start gap-2 text-sm text-[#4B4135] md:col-span-2">
            <input
              type="checkbox"
              name="policy_consent"
              className="mt-1 h-4 w-4 rounded border-[#D8CFC3] text-[#2F4C6E] focus:ring-[#2F4C6E]"
              required
            />
            <span>
              Green Room / 守秘ポリシーへの同意
              <span className="block text-xs text-[#6B5D4F]">
                コミュニティ内の情報と案件内容を外部に持ち出さないことに同意します。
              </span>
            </span>
          </label>
          <input type="hidden" name="_subject" value="Fellow応募" />
          <input type="hidden" name="origin" value="join_fellow" />
          <button
            type="submit"
            className="md:col-span-2 inline-flex items-center justify-center rounded-full bg-vermillion px-6 py-3 text-sm font-semibold text-[#1D1A15] transition hover:bg-vermillion-dark"
          >
            応募する
          </button>
        </form>
      ) : (
        <MissingFormNotice />
      ),
  },
  {
    key: "media",
    label: "メディア・協業",
    anchor: "#media",
    heading: "メディア・協業のご相談",
    description: (
      <p className="text-sm text-[#4B4135]">
        取材テーマや希望出演者、公開予定日などをご記入ください。広報チームと Field Director が対応します。
      </p>
    ),
    renderForm: (action, headingId) =>
      action ? (
        <form
          aria-labelledby={headingId}
          action={action}
          method="POST"
          className="grid gap-4 md:grid-cols-2"
        >
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            氏名
            <input
              type="text"
              name="name"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-bamboo focus:outline-none focus:ring-2 focus:ring-bamboo/20"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            メールアドレス
            <input
              type="email"
              name="email"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-bamboo focus:outline-none focus:ring-2 focus:ring-bamboo/20"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            媒体名 / 企業名
            <input
              type="text"
              name="company"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-bamboo focus:outline-none focus:ring-2 focus:ring-bamboo/20"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            希望出演者
            <input
              type="text"
              name="speaker"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-bamboo focus:outline-none focus:ring-2 focus:ring-bamboo/20"
              placeholder="例）Field Director 山本、Senior Fellow 吉見 など"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135] md:col-span-2">
            企画概要・取材テーマ
            <textarea
              name="message"
              rows={4}
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-bamboo focus:outline-none focus:ring-2 focus:ring-bamboo/20"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            公開予定日
            <input
              type="date"
              name="publish_date"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-bamboo focus:outline-none focus:ring-2 focus:ring-bamboo/20"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-[#4B4135]">
            電話番号
            <input
              type="tel"
              name="phone"
              className="rounded-lg border border-[#D8CFC3] bg-white px-3 py-2 focus:border-bamboo focus:outline-none focus:ring-2 focus:ring-bamboo/20"
              placeholder="取材当日のご連絡先"
              required
            />
          </label>
          <input type="hidden" name="_subject" value="メディア取材・協業のご相談" />
          <input type="hidden" name="origin" value="join_media" />
          <button
            type="submit"
            className="md:col-span-2 inline-flex items-center justify-center rounded-full bg-vermillion px-6 py-3 text-sm font-semibold text-[#1D1A15] transition hover:bg-vermillion-dark"
          >
            送信する
          </button>
        </form>
      ) : (
        <MissingFormNotice />
      ),
  },
];

const hashToKey: Record<string, FormKey> = {
  "#general": "general",
  "#fellow": "fellow",
  "#media": "media",
};

const anchorByKey = formDefinitions.reduce<Record<FormKey, string>>((acc, def) => {
  acc[def.key] = def.anchor;
  return acc;
}, {
  general: "#general",
  fellow: "#fellow",
  media: "#media",
});

export default function ContactPage() {
  const [activeKey, setActiveKey] = useState<FormKey>("general");
  const tabRefs = useRef<Record<FormKey, HTMLButtonElement | null>>({
    general: null,
    fellow: null,
    media: null,
  });
  const panelId = "join-tab-panel";

  useEffect(() => {
    if (typeof window === "undefined") return;
    const initialKey = hashToKey[window.location.hash] ?? "general";
    setActiveKey(initialKey);
    const handleHashChange = () => {
      setActiveKey(hashToKey[window.location.hash] ?? "general");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const activeDefinition = useMemo(
    () => formDefinitions.find((def) => def.key === activeKey) ?? formDefinitions[0],
    [activeKey]
  );

  const focusTab = (key: FormKey) => {
    const target = tabRefs.current[key];
    target?.focus();
  };

  const scrollPanelIntoView = () => {
    if (typeof document === "undefined") return;
    const panel = document.getElementById(panelId);
    if (panel && typeof panel.scrollIntoView === "function") {
      panel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const selectTab = (key: FormKey, { scroll = true }: { scroll?: boolean } = {}) => {
    setActiveKey(key);
    if (typeof window !== "undefined") {
      const anchor = anchorByKey[key] ?? "";
      const target = anchor ? `/join${anchor}` : "/join";
      try {
        window.history.replaceState(null, "", target);
      } catch {
        // ignore history errors in non-browser environments
      }
      if (scroll) {
        scrollPanelIntoView();
      }
    }
  };

  const handleSelect = (key: FormKey, options?: { scroll?: boolean }) => {
    selectTab(key, options);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const navigableKeys = formDefinitions.map((def) => def.key) as FormKey[];
    const { key } = event;
    if (!(["ArrowRight", "ArrowLeft", "Home", "End"].includes(key))) {
      return;
    }

    event.preventDefault();

    const activeElement = (typeof document !== "undefined"
      ? document.activeElement
      : null) as HTMLButtonElement | null;

    let currentIndex = navigableKeys.findIndex(
      (formKey) => tabRefs.current[formKey] === activeElement
    );

    if (currentIndex === -1) {
      currentIndex = navigableKeys.findIndex((formKey) => formKey === activeKey);
    }

    if (currentIndex === -1) {
      currentIndex = 0;
    }

    let nextIndex = currentIndex;
    if (key === "Home") {
      nextIndex = 0;
    } else if (key === "End") {
      nextIndex = navigableKeys.length - 1;
    } else if (key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % navigableKeys.length;
    } else if (key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + navigableKeys.length) % navigableKeys.length;
    }

    const nextKey = navigableKeys[nextIndex];
    focusTab(nextKey);
    selectTab(nextKey, { scroll: false });
  };

  const activeTabId = `join-tab-${activeDefinition.key}`;
  const activeAnchorId = activeDefinition.anchor.replace("#", "");
  const headingId = `${activeDefinition.key}-heading`;

  return (
    <main className="min-h-screen bg-[#F9F6F0] text-[#1D1A15]">
      <div className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-[#1D1A15] sm:text-5xl">
            お問い合わせ・各種受付
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[#4B4135]">
            参加に関するご質問、Fellow応募、メディア取材依頼などをこちらで受け付けています。<br />
            送信後は担当よりメールまたはLarkでご連絡します
          </p>
        </div>

        <nav
          role="tablist"
          aria-label="お問い合わせの種類"
          aria-orientation="horizontal"
          onKeyDown={handleKeyDown}
          className="flex flex-wrap gap-3 rounded-3xl border border-[#D8CFC3] bg-white p-4 shadow-sm"
        >
          {formDefinitions.map((tab) => {
            const selected = tab.key === activeKey;
            const tabId = `join-tab-${tab.key}`;
            return (
              <button
                key={tab.key}
                role="tab"
                aria-selected={selected}
                aria-controls={panelId}
                id={tabId}
                ref={(element) => {
                  tabRefs.current[tab.key] = element;
                }}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  selected
                    ? "bg-bamboo text-white shadow"
                    : "bg-[#F9F6F0] text-bamboo hover:bg-bamboo/10"
                }`}
                onClick={() => handleSelect(tab.key)}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        <div id={activeAnchorId} aria-hidden className="h-0" />
        <section
          id={panelId}
          role="tabpanel"
          aria-labelledby={activeTabId}
          className="mt-8 space-y-6 rounded-3xl border border-[#D8CFC3] bg-white p-6 shadow-sm"
        >
          <h2 id={headingId} className="text-2xl font-semibold">
            {activeDefinition.heading}
          </h2>
          <div className="space-y-3">{activeDefinition.description}</div>
          <div className="space-y-4">
            {activeDefinition.renderForm(
              formspreeActions[activeDefinition.key],
              headingId
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
