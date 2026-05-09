import { test as base, expect, Page } from '@playwright/test';

// Pages
import { LoginPage } from '../pages/modules/login/LoginPage';
import { ShopPage } from '../pages/modules/shop/ShopPage';
import { RegisterPage } from '../pages/modules/register/RegisterPage';
import { CheckboxPage } from '../pages/modules/elements/CheckboxPage';
import { RadioButtonPage } from '../pages/modules/elements/RadioButtonPage';
import { AlertsPage } from '../pages/modules/alerts/AlertsPage';
import { DoubleClickPage } from '../pages/modules/actions/DoubleClickPage';

// Actions
import { LoginActions } from '../pages/modules/login/LoginActions';
import { ShopActions } from '../pages/modules/shop/ShopActions';
import { RegisterActions } from '../pages/modules/register/RegisterActions';
import { CheckboxActions } from '../pages/modules/elements/CheckboxActions';
import { RadioButtonActions } from '../pages/modules/elements/RadioButtonActions';
import { AlertsActions } from '../pages/modules/alerts/AlertsActions';
import { DoubleClickActions } from '../pages/modules/actions/DoubleClickActions';

// Assertions
import { LoginAssertions } from '../pages/modules/login/LoginAssertions';
import { ShopAssertions } from '../pages/modules/shop/ShopAssertions';
import { RegisterAssertions } from '../pages/modules/register/RegisterAssertions';
import { CheckboxAssertions } from '../pages/modules/elements/CheckboxAssertions';
import { RadioButtonAssertions } from '../pages/modules/elements/RadioButtonAssertions';
import { AlertsAssertions } from '../pages/modules/alerts/AlertsAssertions';
import { DoubleClickAssertions } from '../pages/modules/actions/DoubleClickAssertions';

type TestFixtures = {
  page: Page;

  // Login
  loginPage: LoginPage;
  loginActions: LoginActions;
  loginAssertions: LoginAssertions;

  // Shop
  shopPage: ShopPage;
  shopActions: ShopActions;
  shopAssertions: ShopAssertions;

  // Register
  registerPage: RegisterPage;
  registerActions: RegisterActions;
  registerAssertions: RegisterAssertions;

  // Checkboxes
  checkboxPage: CheckboxPage;
  checkboxActions: CheckboxActions;
  checkboxAssertions: CheckboxAssertions;

  // Radio Buttons
  radioButtonPage: RadioButtonPage;
  radioButtonActions: RadioButtonActions;
  radioButtonAssertions: RadioButtonAssertions;

  // Alerts
  alertsPage: AlertsPage;
  alertsActions: AlertsActions;
  alertsAssertions: AlertsAssertions;

  // Double Click
  doubleClickPage: DoubleClickPage;
  doubleClickActions: DoubleClickActions;
  doubleClickAssertions: DoubleClickAssertions;
};

export const test = base.extend<TestFixtures>({

  page: async ({ page }, use) => {
    await use(page);
  },

  // --- Login ---
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  loginActions: async ({ page }, use) => {
    await use(new LoginActions(page, new LoginPage(page)));
  },
  loginAssertions: async ({ page }, use) => {
    await use(new LoginAssertions(page, new LoginPage(page)));
  },

  // --- Shop ---
  shopPage: async ({ page }, use) => {
    await use(new ShopPage(page));
  },
  shopActions: async ({ page }, use) => {
    await use(new ShopActions(page, new ShopPage(page)));
  },
  shopAssertions: async ({ page }, use) => {
    await use(new ShopAssertions(page, new ShopPage(page)));
  },

  // --- Register ---
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
  registerActions: async ({ page }, use) => {
    await use(new RegisterActions(page, new RegisterPage(page)));
  },
  registerAssertions: async ({ page }, use) => {
    await use(new RegisterAssertions(page, new RegisterPage(page)));
  },

  // --- Checkboxes ---
  checkboxPage: async ({ page }, use) => {
    await use(new CheckboxPage(page));
  },
  checkboxActions: async ({ page }, use) => {
    await use(new CheckboxActions(page, new CheckboxPage(page)));
  },
  checkboxAssertions: async ({ page }, use) => {
    await use(new CheckboxAssertions(page, new CheckboxPage(page)));
  },

  // --- Radio Buttons ---
  radioButtonPage: async ({ page }, use) => {
    await use(new RadioButtonPage(page));
  },
  radioButtonActions: async ({ page }, use) => {
    await use(new RadioButtonActions(page, new RadioButtonPage(page)));
  },
  radioButtonAssertions: async ({ page }, use) => {
    await use(new RadioButtonAssertions(page, new RadioButtonPage(page)));
  },

  // --- Alerts ---
  alertsPage: async ({ page }, use) => {
    await use(new AlertsPage(page));
  },
  alertsActions: async ({ page }, use) => {
    await use(new AlertsActions(page, new AlertsPage(page)));
  },
  alertsAssertions: async ({ page }, use) => {
    await use(new AlertsAssertions(page, new AlertsPage(page)));
  },

  // --- Double Click ---
  doubleClickPage: async ({ page }, use) => {
    await use(new DoubleClickPage(page));
  },
  doubleClickActions: async ({ page }, use) => {
    await use(new DoubleClickActions(page, new DoubleClickPage(page)));
  },
  doubleClickAssertions: async ({ page }, use) => {
    await use(new DoubleClickAssertions(page, new DoubleClickPage(page)));
  },
});

export { expect };
