import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { SearchProvider } from "@/components/search/search-provider";
import { SiteHeader } from "@/components/site-header";

describe("site navigation", () => {
  it("opens search and moves focus into the dialog", async () => {
    const user = userEvent.setup();
    render(<SearchProvider><SiteHeader /></SearchProvider>);
    await user.click(screen.getByRole("button", { name: "Open search" }));
    expect(screen.getByRole("dialog", { name: "Search BHARAT" })).toBeTruthy();
    expect(document.activeElement).toBe(screen.getByRole("textbox", { name: /search places/i }));
  });

  it("opens the mobile navigation", async () => {
    const user = userEvent.setup();
    render(<SearchProvider><SiteHeader /></SearchProvider>);
    await user.click(screen.getByRole("button", { name: "Open navigation" }));
    expect(screen.getByRole("navigation", { name: "Mobile navigation" })).toBeTruthy();
  });
});
