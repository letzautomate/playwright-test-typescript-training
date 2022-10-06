import { test, expect } from '@playwright/test';
test('iFrame', async ({ page }) => {
  await page.goto('https://kitchen.applitools.com/ingredients/iframe');
  const frame = page.frameLocator('#the-kitchen-table')
  const rows = frame.locator("#fruits-vegetables").locator("//tr")
  console.log(`Number of Rows in the table: ${await rows.count()}`)  
});
