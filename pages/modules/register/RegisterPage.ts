import { Page, Locator } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;

  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly phoneInput: Locator;
  readonly countrySelect: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly termsCheckbox: Locator;
  readonly submitBtn: Locator;

  readonly successMessage: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstNameInput = page.getByLabel('First Name');
    this.lastNameInput = page.getByLabel('Last Name');
    this.phoneInput = page.getByLabel('Phone number');
    this.countrySelect = page.getByLabel('Country');
    this.emailInput = page.getByLabel('Email address');
    this.passwordInput = page.getByLabel('Password');
    this.termsCheckbox = page.getByLabel('I agree with the terms and conditions');
    this.submitBtn = page.getByRole('button', { name: /register/i });

    this.successMessage = page.locator('[role="alert"]').filter({ hasText: /success/i });
    this.errorMessage = page.locator('[role="alert"]').filter({ hasText: /error|invalid|required/i });
  }
}
