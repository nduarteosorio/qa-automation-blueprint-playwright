import { expect } from '@playwright/test';
import { LoginPage } from './LoginPage';

export class LoginAssertions {
  constructor(private loginPage: LoginPage) {}

  async shouldLoginSuccessfully() {
    await expect(this.loginPage.productsSection).toBeVisible();
  }

  async shouldShowLoginError() {
    await expect(this.loginPage.errorMessage).toBeVisible();
  }
}