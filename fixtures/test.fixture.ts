import { test as base, expect, Page } from '@playwright/test';

// Pages
import { LoginPage } from '../pages/modules/login/LoginPage';
import { ShopPage } from '../pages/modules/shop/ShopPage';

// Actions
import { LoginActions } from '../pages/modules/login/LoginActions';
import { ShopActions } from '../pages/modules/shop/ShopActions';

// Assertions
import { LoginAssertions } from '../pages/modules/login/LoginAssertions';
import { ShopAssertions } from '../pages/modules/shop/ShopAssertions';

// Define types for fixtures
type TestFixtures = {
  page: Page;
  loginPage: LoginPage;
  loginActions: LoginActions;
  loginAssertions: LoginAssertions;
};

// Extend Playwright test
export const test = base.extend<TestFixtures>({

  // Base Playwright page (already provided, but we expose it)
  page: async ({ page }, use) => {
    await use(page);
  },

  // LoginPage
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  loginActions: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(new LoginActions(page, loginPage));
  },

  loginAssertions: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(new LoginAssertions(loginPage));
  },
  // ShopPage
   shopPage: async ({ page }, use) => {
     await use(new ShopPage(page));
   },

   shopActions: async ({ page }, use) => {
     const shopPage = new ShopPage(page);
     await use(new ShopActions(page, shopPage));
   },

   shopAssertions: async ({ page }, use) => {
     const shopPage = new ShopPage(page);
     await use(new ShopAssertions(shopPage));
   },
});

export { expect };