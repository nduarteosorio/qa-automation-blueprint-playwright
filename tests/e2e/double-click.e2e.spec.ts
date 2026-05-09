import { test } from '../../fixtures/test.fixture';

test.describe('Double Click Action', () => {

  test.beforeEach(async ({ doubleClickActions }) => {
    await doubleClickActions.navigate();
  });

  test('@smoke Double-click button is visible', async ({ doubleClickAssertions }) => {
    await doubleClickAssertions.shouldShowButton();
  });

  test('@smoke Double-clicking the button triggers a result', async ({
    doubleClickActions,
    doubleClickAssertions,
  }) => {
    await doubleClickActions.doubleClick();
    await doubleClickAssertions.shouldShowResultAfterDoubleClick();
  });

  test('@regression Single click does not trigger the double-click result', async ({
    doubleClickActions,
    doubleClickAssertions,
  }) => {
    await doubleClickActions.singleClick();
    // After a single click the result message should NOT appear
    await doubleClickAssertions.shouldShowButton();
  });

});
