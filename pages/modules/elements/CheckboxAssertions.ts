import { expect } from '@playwright/test';
import { BaseAssertions } from '../../base/BaseAssertions';
import { CheckboxPage } from './CheckboxPage';

export class CheckboxAssertions extends BaseAssertions {
  private checkboxPage: CheckboxPage;

  constructor(page, checkboxPage: CheckboxPage) {
    super(page);
    this.checkboxPage = checkboxPage;
  }

  async shouldShowThreeCheckboxes() {
    await this.shouldHaveCount(this.checkboxPage.allCheckboxes, 3);
  }

  async shouldBeChecked(index: 1 | 2 | 3) {
    const map = {
      1: this.checkboxPage.checkbox1,
      2: this.checkboxPage.checkbox2,
      3: this.checkboxPage.checkbox3,
    };
    await expect(map[index]).toBeChecked();
  }

  async shouldBeUnchecked(index: 1 | 2 | 3) {
    const map = {
      1: this.checkboxPage.checkbox1,
      2: this.checkboxPage.checkbox2,
      3: this.checkboxPage.checkbox3,
    };
    await expect(map[index]).not.toBeChecked();
  }

  async shouldAllBeUnchecked() {
    const count = await this.checkboxPage.allCheckboxes.count();
    for (let i = 0; i < count; i++) {
      await expect(this.checkboxPage.allCheckboxes.nth(i)).not.toBeChecked();
    }
  }
}
