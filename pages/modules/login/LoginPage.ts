import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  // Input fields
  readonly email: Locator;
  readonly password: Locator;

  // Actions
  readonly submitBtn: Locator;

  // Error message (handles duplicate #message elements)
  readonly errorMessage: Locator;

  // Success indicator (products section becomes visible after login)
  readonly productsSection: Locator;

  constructor(page: Page) {
    this.page = page;

    // Inputs
    this.email = page.locator('#email');
    this.password = page.locator('#password');

    // Submit button
    this.submitBtn = page.locator('#submitLoginBtn');

    // Error message:
    // The DOM contains duplicate elements with id="message".
    // We target the visible alert using role and text to avoid strict mode conflicts.
    this.errorMessage = page.locator('[role="alert"]', {
      hasText: /bad credentials/i
    });

    // Products section (used to confirm successful login)
    this.productsSection = page.locator('#prooood');
  }
}