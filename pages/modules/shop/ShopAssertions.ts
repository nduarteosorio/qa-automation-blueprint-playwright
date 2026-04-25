import { ShopPage } from './ShopPage';
import { BaseAssertions } from '../../base/BaseAssertions';

export class ShopAssertions extends BaseAssertions {
  private shopPage: ShopPage;

  constructor(page, shopPage: ShopPage) {
    super(page);
    this.shopPage = shopPage;
  }

  async shouldShowProducts() {
    await this.shouldBeVisible(this.shopPage.productItems.first());
  }

  async shouldShowShippingForm() {
    await this.shouldBeVisible(this.shopPage.shippingSection);
  }
}