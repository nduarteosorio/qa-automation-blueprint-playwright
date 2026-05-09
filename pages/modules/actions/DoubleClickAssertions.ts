import { BaseAssertions } from '../../base/BaseAssertions';
import { DoubleClickPage } from './DoubleClickPage';

export class DoubleClickAssertions extends BaseAssertions {
  private doubleClickPage: DoubleClickPage;

  constructor(page, doubleClickPage: DoubleClickPage) {
    super(page);
    this.doubleClickPage = doubleClickPage;
  }

  async shouldShowButton() {
    await this.shouldBeVisible(this.doubleClickPage.doubleClickBtn);
  }

  async shouldShowResultAfterDoubleClick() {
    await this.shouldBeVisible(this.doubleClickPage.resultMessage);
  }

  async shouldShowResultContaining(text: string) {
    await this.shouldContainText(this.doubleClickPage.resultMessage, text);
  }
}
