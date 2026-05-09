import { Page, Locator } from '@playwright/test';

export class RadioButtonPage {
  readonly page: Page;

  readonly allRadioButtons: Locator;
  readonly radioButton1: Locator;
  readonly radioButton2: Locator;
  readonly radioButton3: Locator;
  readonly radioButtonDisabled: Locator;

  constructor(page: Page) {
    this.page = page;

    this.allRadioButtons = page.locator('input[type="radio"]');
    // Radio buttons addressed by position since labels may not have explicit `for` attributes
    this.radioButton1 = page.locator('input[type="radio"]').nth(0);
    this.radioButton2 = page.locator('input[type="radio"]').nth(1);
    this.radioButton3 = page.locator('input[type="radio"]').nth(2);
    this.radioButtonDisabled = page.locator('input[type="radio"][disabled]');
  }
}
