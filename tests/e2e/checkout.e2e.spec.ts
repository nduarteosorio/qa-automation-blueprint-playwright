import { test } from '../../fixtures/test.fixture';

test.describe('E2E - Ecommerce Flow', () => {

  test('User can complete purchase flow', async ({
    loginActions,
    loginAssertions,
    shopActions,
    shopAssertions
  }) => {

    // Login
    await loginActions.navigate();
    await loginActions.login('admin@admin.com', 'admin123');
    await loginAssertions.shouldLoginSuccessfully();

    // Add product
    await shopAssertions.shouldShowProducts();
    await shopActions.addFirstProductToCart();

    // Checkout
    await shopActions.proceedToCheckout();
    await shopAssertions.shouldShowShippingForm();

    // Fill shipping
    await shopActions.fillShippingDetails();

    // Submit order
    await shopActions.submitOrder();
  });

});