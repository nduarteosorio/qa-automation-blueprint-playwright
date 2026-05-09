import { BaseAssertions } from '../../base/BaseAssertions';
import { RegisterPage } from './RegisterPage';

export class RegisterAssertions extends BaseAssertions {
  private registerPage: RegisterPage;

  constructor(page, registerPage: RegisterPage) {
    super(page);
    this.registerPage = registerPage;
  }

  async shouldShowRegisterForm() {
    await this.shouldBeVisible(this.registerPage.emailInput);
    await this.shouldBeVisible(this.registerPage.passwordInput);
    await this.shouldBeVisible(this.registerPage.submitBtn);
  }

  async shouldRegisterSuccessfully() {
    await this.shouldBeVisible(this.registerPage.successMessage);
  }

  async shouldShowError() {
    await this.shouldBeVisible(this.registerPage.errorMessage);
  }

  async shouldHaveTermsChecked() {
    await this.shouldHaveAttribute(this.registerPage.termsCheckbox, 'checked', '');
  }
}
