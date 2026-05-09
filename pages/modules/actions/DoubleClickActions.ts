import { BasePage } from '../../base/BasePage';
import { DoubleClickPage } from './DoubleClickPage';

export class DoubleClickActions extends BasePage {
  private doubleClickPage: DoubleClickPage;

  constructor(page, doubleClickPage: DoubleClickPage) {
    super(page);
    this.doubleClickPage = doubleClickPage;
  }

  async navigate() {
    await super.navigate('/double-click.html');
  }

  async doubleClick() {
    await this.waitForElement(this.doubleClickPage.doubleClickBtn);
    await this.doubleClickPage.doubleClickBtn.dblclick();
  }

  async singleClick() {
    await this.click(this.doubleClickPage.doubleClickBtn);
  }
}
