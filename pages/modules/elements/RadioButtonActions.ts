import { BasePage } from '../../base/BasePage';
import { RadioButtonPage } from './RadioButtonPage';

export class RadioButtonActions extends BasePage {
  private radioButtonPage: RadioButtonPage;

  constructor(page, radioButtonPage: RadioButtonPage) {
    super(page);
    this.radioButtonPage = radioButtonPage;
  }

  async navigate() {
    await super.navigate('/radiobuttons.html');
  }

  async selectFirst() {
    await this.radioButtonPage.radioButton1.check();
  }

  async selectSecond() {
    await this.radioButtonPage.radioButton2.check();
  }

  async selectThird() {
    await this.radioButtonPage.radioButton3.check();
  }

  async trySelectDisabled() {
    await this.radioButtonPage.radioButtonDisabled.click({ force: true });
  }
}
