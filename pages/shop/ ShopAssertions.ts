import { expect } from '@playwright/test';
import { ShopPage } from './ShopPage';

export class ShopAssertions {
  constructor(private shopPage: ShopPage) {}

  async shouldShowProducts() {
    await expect(this.shopPage.productItems.first()).toBeVisible();
  }

  async shouldShowShippingForm() {
    await expect(this.shopPage.shippingSection).toBeVisible();
  }
}