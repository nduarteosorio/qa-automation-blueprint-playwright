import { test, expect } from '../../fixtures/test.fixture';

test.describe('Alerts', () => {

  test.beforeEach(async ({ alertsActions }) => {
    await alertsActions.navigate();
  });

  test('@smoke Alert button is visible on the page', async ({ alertsAssertions }) => {
    await alertsAssertions.shouldShowAlertButton();
  });

  test('@smoke JS Alert can be triggered and accepted', async ({ alertsActions }) => {
    const message = await alertsActions.triggerAlertAndAccept();
    expect(message).toBeTruthy();
  });

  test('@regression Confirm dialog accepted shows positive result', async ({
    alertsActions,
    alertsAssertions,
  }) => {
    await alertsActions.triggerConfirmAndAccept();
    await alertsAssertions.shouldShowResultVisible();
  });

  test('@regression Confirm dialog dismissed shows negative result', async ({
    alertsActions,
    alertsAssertions,
  }) => {
    await alertsActions.triggerConfirmAndDismiss();
    await alertsAssertions.shouldShowResultVisible();
  });

  test('@regression Prompt dialog accepts user input', async ({
    alertsActions,
    alertsAssertions,
  }) => {
    await alertsActions.triggerPromptAndFill('Hello QA');
    await alertsAssertions.shouldShowResultVisible();
  });

  test('@regression Prompt dialog dismissal is handled gracefully', async ({
    alertsActions,
    alertsAssertions,
  }) => {
    await alertsActions.triggerPromptAndDismiss();
    await alertsAssertions.shouldShowResultVisible();
  });

});
