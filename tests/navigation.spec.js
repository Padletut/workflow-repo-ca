import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    // Go to login page
    await page.goto("/login");

    // Fill in form using name attributes
    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);

    // Click login
    await page.getByRole("button", { name: "Login" }).click();

    // Check if we see logout button - means we're logged in
    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });

  test("should navigate to the home page, click the first venue, and verify the venue details page", async ({
    page,
  }) => {
    // Navigate to the home page
    await page.goto("/");

    // Wait for the venue list to load
    await page.waitForSelector("#venue-container");

    // Click the first venue
    await page.locator("#venue-container a").first().click();

    // Verify that the venue details page loads and contains the words "Venue details" in the heading
    await expect(page.locator("h1")).toHaveText(/Venue details/i);
  });
});
