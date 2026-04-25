import { test } from '../../fixtures/test.fixture';

test.describe('Authentication - Ecommerce', () => {

  test('@smoke User can login successfully', async ({ loginActions, loginAssertions }) => {
    await loginActions.navigate();
    await loginActions.login('admin@admin.com', 'admin123');

    await loginAssertions.shouldLoginSuccessfully();
  });

  test('@regression Invalid login shows error message', async ({ loginActions, loginAssertions }) => {
    await loginActions.navigate();
    await loginActions.login('wrong@test.com', 'wrong_password');

    await loginAssertions.shouldShowLoginError();
  });

});