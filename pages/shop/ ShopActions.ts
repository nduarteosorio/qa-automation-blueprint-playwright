import { BasePage } from '../../base/BasePage';
import { ShopPage } from './ShopPage';

export class ShopActions extends BasePage {
  private shopPage: ShopPage;

  constructor(page, shopPage: ShopPage) {
    super(page);
    this.shopPage = shopPage;
  }

  async addFirstProductToCart() {
    await this.shopPage.addToCartButtons.first().click();
  }

  async proceedToCheckout() {
    await this.click(this.shopPage.checkoutButton);
  }

  async fillShippingDetails() {
    await this.fill(this.shopPage.phone, '1234567890');
    await this.fill(this.shopPage.street, '123 Test Street');
    await this.fill(this.shopPage.city, 'Test City');
    await this.shopPage.country.selectOption({ label: 'Colombia' });
  }

  async submitOrder() {
    await this.click(this.shopPage.submitOrder);
  }
}