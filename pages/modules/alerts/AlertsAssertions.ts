import { expect } from '@playwright/test';
import { BaseAssertions } from '../../base/BaseAssertions';
import { AlertsPage } from './AlertsPage';

export class AlertsAssertions extends BaseAssertions {
  private alertsPage: AlertsPage;

  constructor(page, alertsPage: AlertsPage) {
    super(page);
    this.alertsPage = alertsPage;
  }

  async shouldShowAlertButton() {
    await this.shouldBeVisible(this.alertsPage.alertBtn);
  }

  async shouldShowResultContaining(text: string) {
    await expect(this.alertsPage.resultMessage).toContainText(text);
  }

  async shouldShowResultVisible() {
    await this.shouldBeVisible(this.alertsPage.resultMessage);
  }
}
