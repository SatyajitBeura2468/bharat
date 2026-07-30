import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { DataExplorer } from "@/components/data/data-explorer";

describe("DataExplorer", () => {
  it("switches dataset and preserves a table alternative", async () => {
    const user = userEvent.setup();
    render(<DataExplorer />);
    expect(screen.getByRole("table")).toBeTruthy();
    await user.click(screen.getByRole("tab", { name: /education/i }));
    expect(screen.getByRole("heading", { name: /literacy rate/i })).toBeTruthy();
    expect(screen.getByText(/Reference year: 2011/i)).toBeTruthy();
  });
});
