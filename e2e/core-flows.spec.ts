import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
});

test("home to explore and map to state", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "A living atlas of a civilization." })).toBeVisible();
  await page.getByRole("link", { name: "Open the map" }).click();
  await expect(page).toHaveURL(/\/explore/);
  await expect(page.getByRole("heading", { name: /One land, many worlds/i })).toBeVisible();
  await page.getByRole("complementary", { name: "Map controls" }).getByRole("button", { name: "Odisha" }).click();
  await page.getByRole("link", { name: /Enter state atlas/i }).click();
  await expect(page).toHaveURL(/\/states\/odisha/);
  await expect(page.getByRole("heading", { name: "Odisha" })).toBeVisible();
});

test("global search reaches a story", async ({ page, isMobile }) => {
  await page.goto("/");
  if (isMobile) {
    await page.getByRole("button", { name: "Open navigation" }).click();
    await page.getByRole("button", { name: "Search BHARAT" }).click();
  } else {
    await page.getByRole("button", { name: "Open search" }).click();
  }
  await page.getByRole("textbox", { name: /search places/i }).fill("monsoon");
  await page.getByRole("dialog", { name: "Search BHARAT" }).getByRole("link", { name: /How the monsoon shapes India/i }).click();
  await expect(page).toHaveURL(/how-the-monsoon-shapes-india/);
});

test("data control, theme and sources work", async ({ page, isMobile }) => {
  await page.goto("/data");
  await page.getByRole("tab", { name: /education/i }).click();
  await expect(page.getByRole("heading", { name: /literacy rate/i })).toBeVisible();
  const initialTheme = await page.locator("html").getAttribute("data-theme");
  if (isMobile) {
    await page.getByRole("button", { name: "Open navigation" }).click();
    await page.getByTestId("mobile-theme-toggle").click();
  } else {
    await page.getByTestId("theme-toggle").click();
  }
  await expect(page.locator("html")).toHaveAttribute("data-theme", initialTheme === "dark" ? "light" : "dark");
  await page.goto("/sources");
  await expect(page.getByRole("heading", { name: /Every claim begins somewhere/i })).toBeVisible();
});

test("timeline and story reading remain usable with reduced motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/history/timeline");
  await expect(page.getByText("Indus cities")).toBeVisible();
  await page.goto("/stories/the-story-of-zero");
  await expect(page.getByRole("heading", { name: "The story of zero" })).toBeVisible();
});

test("mobile menu does not overflow", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile-chromium");
  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation" }).click();
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(overflow).toBe(false);
});

test("homepage visual baseline", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page).toHaveScreenshot("homepage-viewport.png", {
    animations: "disabled",
    fullPage: false,
  });
});
