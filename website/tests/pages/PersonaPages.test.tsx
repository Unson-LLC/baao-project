import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import FellowsPage from "@/app/fellows/page";

describe("Fellows landing page", () => {
  it("explains the opt-in and non-ranking credential model", () => {
    render(<FellowsPage />);
    expect(screen.getByText(/活動件数を競わせる仕組みから/)).toBeInTheDocument();
    expect(screen.getByText(/辞退しても資格や案件配分で不利益はありません/)).toBeInTheDocument();
  });
});
