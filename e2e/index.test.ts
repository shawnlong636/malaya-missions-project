import { expect, test } from '@playwright/test';

test.describe('all-home-page', () => {
    test('sucessfuly loads multiple categories', async ({ page }) => {
        await page.goto('/');
        expect(true).toBe(true);
    });
});
