import { BasePage } from '../../base/BasePage';
import { ShopPage } from './ShopPage';

export class ShopActions extends BasePage {
  private shopPage: ShopPage;

  constructor(page, shopPage: ShopPage) {
    super(page);
    this.shopPage = shopPage;
  }

  // Wait for products to load (VERY IMPORTANT for this app)
  async waitForProductsToLoad() {
    await this.page.waitForSelector('.shop-item');
  }

  // Add first product
  async addFirstProductToCart() {
    await this.waitForProductsToLoad();
    await this.click(this.shopPage.addToCartButtons.first());
  }

  // Add product by name (more advanced + reusable)
  async addProductToCart(productName: string) {
    await this.waitForProductsToLoad();

    const product = this.page.locator('.shop-item', {
      hasText: productName
    });

    const button = product.locator('button');

    await this.click(button);
  }

  // Proceed to checkout
  async proceedToCheckout() {
    await this.click(this.shopPage.checkoutButton);

    // Wait for shipping form to appear
    await this.shopPage.shippingSection.waitFor({ state: 'visible' });
  }

  // Fill shipping form
  async fillShippingDetails(data?: {
    phone?: string;
    street?: string;
    city?: string;
    country?: string;
  }) {
    const {
      phone = '1234567890',
      street = '123 Test Street',
      city = 'Test City',
      country = 'Colombia'
    } = data || {};

    await this.fill(this.shopPage.phone, phone);
    await this.fill(this.shopPage.street, street);
    await this.fill(this.shopPage.city, city);

    await this.shopPage.country.selectOption({ label: country });
  }

  // Submit order
  async submitOrder() {
    await this.click(this.shopPage.submitOrder);
  }

  // Full flow helper (optional but powerful)
  async completeCheckoutFlow() {
    await this.addFirstProductToCart();
    await this.proceedToCheckout();
    await this.fillShippingDetails();
    await this.submitOrder();
  }
}