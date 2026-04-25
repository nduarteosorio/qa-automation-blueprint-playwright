// pages/base/BasePage.ts

import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //  Navigation
  async navigate(path: string) {
    await this.page.goto(path);
    await this.waitForPageLoad();
  }

  //  Waits
  async waitForPageLoad() {
    await this.page.waitForLoadState('networkidle');
  }

  async waitForElement(locator: Locator) {
    await locator.waitFor({ state: 'visible' });
  }

  // ️ Actions
  async click(locator: Locator) {
    await this.waitForElement(locator);
    await locator.click();
  }

  async fill(locator: Locator, value: string) {
    await this.waitForElement(locator);
    await locator.fill(value);
  }

  async type(locator: Locator, value: string) {
    await this.waitForElement(locator);
    await locator.type(value);
  }

  async press(locator: Locator, key: string) {
    await locator.press(key);
  }

  //  Getters
  async getText(locator: Locator): Promise<string> {
    await this.waitForElement(locator);
    return await locator.innerText();
  }

  async isVisible(locator: Locator): Promise<boolean> {
    return await locator.isVisible();
  }

  //  Assertions (optional but powerful)
  async expectVisible(locator: Locator) {
    await expect(locator).toBeVisible();
  }

  async expectHidden(locator: Locator) {
    await expect(locator).toBeHidden();
  }

  async expectText(locator: Locator, text: string) {
    await expect(locator).toHaveText(text);
  }

  async expectURLContains(value: string) {
    await expect(this.page).toHaveURL(new RegExp(value));
  }

  //  Utilities
  async reload() {
    await this.page.reload();
  }

  async takeScreenshot(name: string) {
    await this.page.screenshot({ path: `reports/screenshots/${name}.png` });
  }
}