import { expect, Locator, Page } from '@playwright/test';

export class BaseAssertions {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Visibility
  async shouldBeVisible(locator: Locator) {
    await expect(locator).toBeVisible();
  }

  async shouldBeHidden(locator: Locator) {
    await expect(locator).toBeHidden();
  }

  // Text
  async shouldHaveText(locator: Locator, text: string | RegExp) {
    await expect(locator).toHaveText(text);
  }

  async shouldContainText(locator: Locator, text: string | RegExp) {
    await expect(locator).toContainText(text);
  }

  // URL
  async shouldHaveUrl(path: string | RegExp) {
    await expect(this.page).toHaveURL(path);
  }

  // Count
  async shouldHaveCount(locator: Locator, count: number) {
    await expect(locator).toHaveCount(count);
  }

  // Attribute
  async shouldHaveAttribute(locator: Locator, attr: string, value: string) {
    await expect(locator).toHaveAttribute(attr, value);
  }
}