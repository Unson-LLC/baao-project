import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SuccessStoriesPage from "@/app/success-stories/page";

describe("SuccessStoriesPage", () => {
  it("states that public cases are being re-verified", () => {
    render(<SuccessStoriesPage />);
    expect(screen.getByRole("heading", { level: 1, name: "公開ケースは再検証中です" })).toBeInTheDocument();
  });

  it("shows the verification steps before publication", () => {
    render(<SuccessStoriesPage />);
    expect(screen.getByText(/契約主体、提供主体、本人の役割を確認する/)).toBeInTheDocument();
    expect(screen.getByText(/公開範囲を個別に確認する/)).toBeInTheDocument();
    expect(screen.getByText(/Case掲載とKnowledge・AI利用の許諾を分ける/)).toBeInTheDocument();
  });

  it("provides a consultation path without claiming an unverified result", () => {
    render(<SuccessStoriesPage />);
    const link = screen.getByRole("link", { name: "相談する" });
    expect(link).toHaveAttribute("href", "/join#media");
  });
});
