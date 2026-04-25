import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly submitBtn: Locator;
  readonly errorMessage: Locator;
  readonly productsSection: Locator;

  constructor(page: Page) {
    this.page = page;
    this.email = page.locator('#email');
    this.password = page.locator('#password');
    this.submitBtn = page.locator('#submitLoginBtn');
    this.errorMessage = page.locator('#message');
    this.productsSection = page.locator('#prooood');
  }
}