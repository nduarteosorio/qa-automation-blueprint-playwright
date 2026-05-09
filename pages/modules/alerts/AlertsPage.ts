import { Page, Locator } from '@playwright/test';

export class AlertsPage {
  readonly page: Page;

  readonly alertBtn: Locator;
  readonly confirmBtn: Locator;
  readonly promptBtn: Locator;
  readonly resultMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    // Buttons are targeted by their visible text; IDs may vary
    this.alertBtn = page.getByRole('button', { name: /alert/i }).first();
    this.confirmBtn = page.getByRole('button', { name: /confirm/i });
    this.promptBtn = page.getByRole('button', { name: /prompt/i });

    // Result display shown after interacting with dialogs
    this.resultMessage = page.locator('#result, .result, [id*="message"], [class*="result"]').first();
  }
}
