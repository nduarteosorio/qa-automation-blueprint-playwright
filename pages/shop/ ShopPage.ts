
import { Page, Locator } from '@playwright/test';

export class ShopPage {
  readonly page: Page;

  // Cart & products
  readonly productItems: Locator;
  readonly addToCartButtons: Locator;
  readonly cartButton: Locator;
  readonly checkoutButton: Locator;

  // Shipping form
  readonly shippingSection: Locator;
  readonly phone: Locator;
  readonly street: Locator;
  readonly city: Locator;
  readonly country: Locator;
  readonly submitOrder: Locator;

  constructor(page: Page) {
    this.page = page;

    this.productItems = page.locator('.shop-items .shop-item');
    this.addToCartButtons = page.locator('.shop-item button');

    this.cartButton = page.locator('.btn-purchase');
    this.checkoutButton = page.locator('.btn-purchase');

    this.shippingSection = page.locator('#shipping-address');

    this.phone = page.locator('#phone');
    this.street = page.locator('input[name="street"]');
    this.city = page.locator('input[name="city"]');
    this.country = page.locator('#countries_dropdown_menu');

    this.submitOrder = page.locator('#submitOrderBtn');
  }
}