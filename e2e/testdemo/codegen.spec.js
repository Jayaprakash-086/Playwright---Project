import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.locator('#singleFileInput').click();
  await page.locator('#singleFileInput').setInputFiles('507.jpg.webp');
});