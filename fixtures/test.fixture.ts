import { test as base, expect, Page } from '@playwright/test';

// Pages
import { LoginPage } from '../pages/modules/login/LoginPage';

// Actions
import { LoginActions } from '../pages/modules/login/LoginActions';

// Assertions
import { LoginAssertions } from '../pages/modules/login/LoginAssertions';

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

  // 🔹 Page Object
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  // 🔹 Actions (uses LoginPage internally)
  loginActions: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(new LoginActions(page, loginPage));
  },

  // 🔹 Assertions
  loginAssertions: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(new LoginAssertions(loginPage));
  },

});

export { expect };