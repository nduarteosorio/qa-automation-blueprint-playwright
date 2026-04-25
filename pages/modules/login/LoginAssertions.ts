import { LoginPage } from './LoginPage';
import { BaseAssertions } from '../../base/BaseAssertions';

export class LoginAssertions extends BaseAssertions {
  private loginPage: LoginPage;

  constructor(page, loginPage: LoginPage) {
    super(page);
    this.loginPage = loginPage;
  }

  async shouldLoginSuccessfully() {
    await this.shouldBeVisible(this.loginPage.productsSection);
  }

  async shouldShowLoginError() {
    await this.shouldBeVisible(this.loginPage.errorMessage);
    await this.shouldHaveText(this.loginPage.errorMessage, /bad credentials/i);
  }

  async shouldStayOnLoginPage() {
    await this.shouldBeVisible(this.loginPage.email);
    await this.shouldBeVisible(this.loginPage.password);
    await this.shouldBeVisible(this.loginPage.submitBtn);
  }
}