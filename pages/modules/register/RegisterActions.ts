import { BasePage } from '../../base/BasePage';
import { RegisterPage } from './RegisterPage';

export interface RegisterData {
  firstName?: string;
  lastName?: string;
  phone?: string;
  country?: string;
  email: string;
  password: string;
  acceptTerms?: boolean;
}

export class RegisterActions extends BasePage {
  private registerPage: RegisterPage;

  constructor(page, registerPage: RegisterPage) {
    super(page);
    this.registerPage = registerPage;
  }

  async navigate() {
    await super.navigate('/register.html');
  }

  async fillForm(data: RegisterData) {
    const {
      firstName = 'Test',
      lastName = 'User',
      phone = '1234567890',
      country = 'Colombia',
      email,
      password,
      acceptTerms = true,
    } = data;

    if (firstName) await this.fill(this.registerPage.firstNameInput, firstName);
    if (lastName) await this.fill(this.registerPage.lastNameInput, lastName);
    if (phone) await this.fill(this.registerPage.phoneInput, phone);
    if (country) await this.registerPage.countrySelect.selectOption({ label: country });
    await this.fill(this.registerPage.emailInput, email);
    await this.fill(this.registerPage.passwordInput, password);
    if (acceptTerms) await this.registerPage.termsCheckbox.check();
  }

  async submit() {
    await this.click(this.registerPage.submitBtn);
  }

  async register(data: RegisterData) {
    await this.fillForm(data);
    await this.submit();
  }
}
