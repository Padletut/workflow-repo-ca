import { test, expect } from "@playwright/test";

test.describe("Login", () => {
  test("user can log in", async ({ page }) => {
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

  test("empty credentials shows error", async ({ page }) => {
    // Go to login page
    await page.goto("/login");

    // Click login
    await page.getByRole("button", { name: "Login" }).click();

    // Check if we see error message
    await expect(page.locator("#message-container > div")).toHaveText(
      "Please enter a noroff.no or stud.noroff.no email address.Password must be at least 8 characters long.",
    );
  });

  test("invalid email shows error", async ({ page }) => {
    // Go to login page
    await page.goto("/login");

    // Fill in form using name attributes
    await page.locator('input[name="email"]').fill("invalid-email");
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);

    // Click login
    await page.getByRole("button", { name: "Login" }).click();

    // Check if we see error message
    await expect(page.locator("#message-container > div")).toHaveText(
      "Please enter a noroff.no or stud.noroff.no email address.",
    );
  });

  test("wrong password shows error", async ({ page }) => {
    // Go to login page
    await page.goto("/login");

    // Fill in form using name attributes
    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page.locator('input[name="password"]').fill("wrong-password");

    // Click login
    await page.getByRole("button", { name: "Login" }).click();

    // Check if we see error message
    await expect(page.locator("#message-container > div")).toHaveText(
      "Invalid email or password",
    );
  });
});
