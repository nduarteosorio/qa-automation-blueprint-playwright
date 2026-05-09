import { Page, Locator } from '@playwright/test';

export class DoubleClickPage {
  readonly page: Page;

  readonly doubleClickBtn: Locator;
  readonly resultMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.doubleClickBtn = page.getByRole('button', { name: /double click/i });
    // Result element shown after double-clicking
    this.resultMessage = page.locator('#result, .result, [id*="message"], [class*="alert"]').first();
  }
}
