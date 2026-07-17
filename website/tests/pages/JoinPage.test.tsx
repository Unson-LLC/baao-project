import { beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";

const originalEnv = { ...process.env };

const baseEnv = {
  NEXT_PUBLIC_FORMSPREE_GENERAL: "https://formspree.io/f/xeoprwvk",
  NEXT_PUBLIC_FORMSPREE_FELLOW: "https://formspree.io/f/xkgpqakp",
  NEXT_PUBLIC_FORMSPREE_MEDIA: "https://formspree.io/f/xnnogylk",
};

const resetEnv = (overrides: Record<string, string | undefined> = baseEnv) => {
  for (const key of Object.keys(process.env)) {
    if (!(key in originalEnv)) {
      delete process.env[key];
    }
  }

  Object.assign(process.env, originalEnv);

  for (const [key, value] of Object.entries(overrides)) {
    if (value === undefined) {
      delete process.env[key];
    } else {
      process.env[key] = value;
    }
  }
};

const renderJoinPage = async (
  {
    env = baseEnv,
    hash,
  }: {
    env?: Record<string, string | undefined>;
    hash?: string;
  } = {},
) => {
  resetEnv(env);
  vi.resetModules();
  window.location.hash = hash ?? "";
  const { default: JoinPage } = await import("@/app/join/page");
  render(<JoinPage />);
};

describe("JoinPage tab navigation", () => {
  beforeEach(() => {
    resetEnv(baseEnv);
    vi.resetModules();
    window.location.hash = "";
  });

  it("shows the general inquiry form by default", async () => {
    await renderJoinPage();
    expect(
      await screen.findByRole("heading", { name: "参加希望の方のお問い合わせ" }),
    ).toBeInTheDocument();
  });

  it("opens the Fellow application from its hash", async () => {
    await renderJoinPage({ hash: "#fellow" });
    expect(
      await screen.findByRole("heading", { name: "Fellow応募" }),
    ).toBeInTheDocument();
  });

  it("asks general inquiries for a type and concrete message", async () => {
    await renderJoinPage();
    const form = screen.getByRole("form", { name: "参加希望の方のお問い合わせ" });

    expect(within(form).getByLabelText("お問い合わせ種別")).toBeInTheDocument();
    expect(within(form).getByLabelText("所属（会社名・部門）")).toBeInTheDocument();
    expect(within(form).getByLabelText("お問い合わせ内容")).toBeRequired();
  });

  it("asks Fellows for contribution, expected return, and consent", async () => {
    await renderJoinPage({ hash: "#fellow" });
    const form = screen.getByRole("form", { name: "Fellow応募" });

    expect(within(form).getByLabelText("専門領域")).toBeRequired();
    expect(within(form).getByLabelText("経歴・実績（リンク可）")).toBeRequired();
    expect(
      within(form).getByLabelText("期待する関与（案件実装 / 監修 / 共著 / 登壇など）"),
    ).toBeRequired();
    expect(within(form).getByLabelText("期待するリターン")).toBeRequired();
    expect(
      within(form).getByLabelText(/Green Room \/ 守秘ポリシーへの同意/),
    ).toBeRequired();
  });

  it("keeps media requests separate from Fellow applications", async () => {
    await renderJoinPage();
    fireEvent.click(screen.getByRole("tab", { name: "メディア・協業" }));

    const form = screen.getByRole("form", { name: "メディア・協業のご相談" });
    expect(within(form).getByLabelText("媒体名 / 企業名")).toBeRequired();
    expect(within(form).getByLabelText("企画概要・取材テーマ")).toBeRequired();
    expect(within(form).getByLabelText("公開予定日")).toBeInTheDocument();
  });

  it("links the active tab with the tabpanel for assistive tech", async () => {
    await renderJoinPage();
    const panel = await screen.findByRole("tabpanel");
    const activeTab = screen.getByRole("tab", {
      name: "参加希望の方のお問い合わせ",
      selected: true,
    });

    expect(panel).toHaveAttribute("id", "join-tab-panel");
    expect(activeTab).toHaveAttribute("aria-controls", "join-tab-panel");
    expect(panel).toHaveAttribute("aria-labelledby", activeTab.id);
  });

  it("supports keyboard navigation between the three independent routes", async () => {
    await renderJoinPage();

    const tablist = screen.getByRole("tablist");
    const generalTab = screen.getByRole("tab", { name: "参加希望の方のお問い合わせ" });
    generalTab.focus();
    fireEvent.keyDown(tablist, { key: "ArrowRight" });

    expect(screen.getByRole("tab", { name: "Fellow応募" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  it("shows a neutral notice when the Fellow form action is missing", async () => {
    await renderJoinPage({
      env: { ...baseEnv, NEXT_PUBLIC_FORMSPREE_FELLOW: undefined },
      hash: "#fellow",
    });

    expect(
      within(await screen.findByRole("tabpanel")).getByText(/フォームは準備中です/),
    ).toBeInTheDocument();
  });
});
