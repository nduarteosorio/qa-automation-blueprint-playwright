import { test } from '../../fixtures/test.fixture';

test.describe('Radio Buttons', () => {

  test.beforeEach(async ({ radioButtonActions }) => {
    await radioButtonActions.navigate();
  });

  test('@smoke Page shows radio buttons', async ({ radioButtonAssertions }) => {
    await radioButtonAssertions.shouldShowRadioButtons();
  });

  test('@smoke Page has a disabled radio button', async ({ radioButtonAssertions }) => {
    await radioButtonAssertions.shouldHaveDisabledOption();
  });

  test('@smoke User can select the first radio button', async ({
    radioButtonActions,
    radioButtonAssertions,
  }) => {
    await radioButtonActions.selectFirst();
    await radioButtonAssertions.shouldHaveSelected(1);
  });

  test('@regression Selecting a different radio deselects the previous one', async ({
    radioButtonActions,
    radioButtonAssertions,
  }) => {
    await radioButtonActions.selectFirst();
    await radioButtonAssertions.shouldHaveSelected(1);

    await radioButtonActions.selectSecond();
    await radioButtonAssertions.shouldHaveSelected(2);
    await radioButtonAssertions.shouldNotHaveSelected(1);
  });

  test('@regression Only one radio button can be selected at a time', async ({
    radioButtonActions,
    radioButtonAssertions,
  }) => {
    await radioButtonActions.selectThird();
    await radioButtonAssertions.shouldOnlyHaveOneSelected();
  });

});
