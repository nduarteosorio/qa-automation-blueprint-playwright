import { test } from '../../fixtures/test.fixture';

test.describe('Checkboxes', () => {

  test.beforeEach(async ({ checkboxActions }) => {
    await checkboxActions.navigate();
  });

  test('@smoke Page shows three checkboxes', async ({ checkboxAssertions }) => {
    await checkboxAssertions.shouldShowThreeCheckboxes();
  });

  test('@smoke User can check individual checkboxes', async ({
    checkboxActions,
    checkboxAssertions,
  }) => {
    await checkboxActions.checkFirst();
    await checkboxAssertions.shouldBeChecked(1);
    await checkboxAssertions.shouldBeUnchecked(2);
    await checkboxAssertions.shouldBeUnchecked(3);
  });

  test('@regression User can check all checkboxes', async ({
    checkboxActions,
    checkboxAssertions,
  }) => {
    await checkboxActions.checkAll();

    await checkboxAssertions.shouldBeChecked(1);
    await checkboxAssertions.shouldBeChecked(2);
    await checkboxAssertions.shouldBeChecked(3);
  });

  test('@regression Reset button unchecks all checkboxes', async ({
    checkboxActions,
    checkboxAssertions,
  }) => {
    await checkboxActions.checkAll();
    await checkboxActions.reset();

    await checkboxAssertions.shouldAllBeUnchecked();
  });

  test('@regression User can uncheck individual checkboxes', async ({
    checkboxActions,
    checkboxAssertions,
  }) => {
    await checkboxActions.checkAll();
    await checkboxActions.uncheckAll();

    await checkboxAssertions.shouldAllBeUnchecked();
  });

});
