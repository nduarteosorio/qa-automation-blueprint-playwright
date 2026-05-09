import { test } from '../../fixtures/test.fixture';

test.describe('Registration Form', () => {

  test.beforeEach(async ({ registerActions }) => {
    await registerActions.navigate();
  });

  test('@smoke Register form is visible', async ({ registerAssertions }) => {
    await registerAssertions.shouldShowRegisterForm();
  });

  test('@smoke User can register successfully with valid data', async ({
    registerActions,
    registerAssertions,
  }) => {
    await registerActions.register({
      firstName: 'Test',
      lastName: 'User',
      phone: '1234567890',
      country: 'Colombia',
      email: `test_${Date.now()}@example.com`,
      password: 'Test@12345',
      acceptTerms: true,
    });

    await registerAssertions.shouldRegisterSuccessfully();
  });

  test('@regression Registration fails without accepting terms', async ({
    registerActions,
    registerAssertions,
  }) => {
    await registerActions.register({
      email: 'noterms@example.com',
      password: 'Test@12345',
      acceptTerms: false,
    });

    // Form should not submit successfully without terms accepted
    await registerAssertions.shouldShowRegisterForm();
  });

  test('@regression Registration fails with missing required fields', async ({
    registerActions,
    registerAssertions,
  }) => {
    await registerActions.submit();

    await registerAssertions.shouldShowRegisterForm();
  });

});
