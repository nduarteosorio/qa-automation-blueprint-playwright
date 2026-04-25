import { BasePage } from '../../base/BasePage';
import { LoginPage } from './LoginPage';

export class LoginActions extends BasePage {
  private loginPage: LoginPage;

  constructor(page) {
    super(page);
    this.loginPage = new LoginPage(page);
  }

  async navigate() {
    await super.navigate('/auth_ecommerce.html');
  }

  async login(email: string, password: string) {
    await this.fill(this.loginPage.email, email);
    await this.fill(this.loginPage.password, password);
    await this.click(this.loginPage.submitBtn);
  }
}