import { expect } from '@playwright/test';
import { BaseAssertions } from '../../base/BaseAssertions';
import { RadioButtonPage } from './RadioButtonPage';

export class RadioButtonAssertions extends BaseAssertions {
  private radioButtonPage: RadioButtonPage;

  constructor(page, radioButtonPage: RadioButtonPage) {
    super(page);
    this.radioButtonPage = radioButtonPage;
  }

  async shouldShowRadioButtons() {
    await this.shouldBeVisible(this.radioButtonPage.radioButton1);
  }

  async shouldHaveDisabledOption() {
    await expect(this.radioButtonPage.radioButtonDisabled).toBeDisabled();
  }

  async shouldHaveSelected(index: 1 | 2 | 3) {
    const map = {
      1: this.radioButtonPage.radioButton1,
      2: this.radioButtonPage.radioButton2,
      3: this.radioButtonPage.radioButton3,
    };
    await expect(map[index]).toBeChecked();
  }

  async shouldNotHaveSelected(index: 1 | 2 | 3) {
    const map = {
      1: this.radioButtonPage.radioButton1,
      2: this.radioButtonPage.radioButton2,
      3: this.radioButtonPage.radioButton3,
    };
    await expect(map[index]).not.toBeChecked();
  }

  async shouldOnlyHaveOneSelected() {
    const checked = await this.radioButtonPage.allRadioButtons.filter({ has: this.page.locator(':checked') }).count();
    await expect(checked).toBeLessThanOrEqual(1);
  }
}
