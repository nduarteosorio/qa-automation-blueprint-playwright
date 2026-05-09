import { BasePage } from '../../base/BasePage';
import { CheckboxPage } from './CheckboxPage';

export class CheckboxActions extends BasePage {
  private checkboxPage: CheckboxPage;

  constructor(page, checkboxPage: CheckboxPage) {
    super(page);
    this.checkboxPage = checkboxPage;
  }

  async navigate() {
    await super.navigate('/checkboxes.html');
  }

  async checkFirst() {
    await this.checkboxPage.checkbox1.check();
  }

  async checkSecond() {
    await this.checkboxPage.checkbox2.check();
  }

  async checkThird() {
    await this.checkboxPage.checkbox3.check();
  }

  async checkAll() {
    await this.checkboxPage.checkbox1.check();
    await this.checkboxPage.checkbox2.check();
    await this.checkboxPage.checkbox3.check();
  }

  async uncheckAll() {
    await this.checkboxPage.checkbox1.uncheck();
    await this.checkboxPage.checkbox2.uncheck();
    await this.checkboxPage.checkbox3.uncheck();
  }

  async reset() {
    await this.click(this.checkboxPage.resetBtn);
  }
}
