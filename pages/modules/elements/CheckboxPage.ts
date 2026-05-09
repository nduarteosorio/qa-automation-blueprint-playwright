import { Page, Locator } from '@playwright/test';

export class CheckboxPage {
  readonly page: Page;

  readonly checkbox1: Locator;
  readonly checkbox2: Locator;
  readonly checkbox3: Locator;
  readonly allCheckboxes: Locator;
  readonly resetBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.checkbox1 = page.getByLabel('Check me out - 1');
    this.checkbox2 = page.getByLabel('Check me out - 2');
    this.checkbox3 = page.getByLabel('Check me out - 3');
    this.allCheckboxes = page.locator('input[type="checkbox"]');
    this.resetBtn = page.getByRole('button', { name: /reset/i });
  }
}
