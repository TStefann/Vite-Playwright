// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Vite + React");
});

test('has page title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await expect(page.getByText( 'My Hints Demo App' )).toBeVisible();
});


test('has expanded hints', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await page.getByRole("button", { name: 'Show' } ).click()

  await expect(page.getByRole('heading', { name: 'Hint', exact: true })).toBeVisible()
  
});
