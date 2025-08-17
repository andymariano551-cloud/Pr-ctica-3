import { test, expect } from '@playwright/test';
test('muestra el título', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await expect(page.locator('#title')).toContainText('Hola CI/CD');
});
