import { expect, test } from '@playwright/test';

test('home page renders the heading and CTA', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'adamllm' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Get started' })).toBeVisible();
});
