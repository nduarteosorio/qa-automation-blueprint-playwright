import { Dialog } from '@playwright/test';
import { BasePage } from '../../base/BasePage';
import { AlertsPage } from './AlertsPage';

export class AlertsActions extends BasePage {
  private alertsPage: AlertsPage;

  constructor(page, alertsPage: AlertsPage) {
    super(page);
    this.alertsPage = alertsPage;
  }

  async navigate() {
    await super.navigate('/alerts.html');
  }

  async triggerAlertAndAccept(): Promise<string> {
    let dialogMessage = '';
    this.page.once('dialog', async (dialog: Dialog) => {
      dialogMessage = dialog.message();
      await dialog.accept();
    });
    await this.click(this.alertsPage.alertBtn);
    return dialogMessage;
  }

  async triggerConfirmAndAccept(): Promise<string> {
    let dialogMessage = '';
    this.page.once('dialog', async (dialog: Dialog) => {
      dialogMessage = dialog.message();
      await dialog.accept();
    });
    await this.click(this.alertsPage.confirmBtn);
    return dialogMessage;
  }

  async triggerConfirmAndDismiss(): Promise<string> {
    let dialogMessage = '';
    this.page.once('dialog', async (dialog: Dialog) => {
      dialogMessage = dialog.message();
      await dialog.dismiss();
    });
    await this.click(this.alertsPage.confirmBtn);
    return dialogMessage;
  }

  async triggerPromptAndFill(value: string): Promise<string> {
    let dialogMessage = '';
    this.page.once('dialog', async (dialog: Dialog) => {
      dialogMessage = dialog.message();
      await dialog.accept(value);
    });
    await this.click(this.alertsPage.promptBtn);
    return dialogMessage;
  }

  async triggerPromptAndDismiss(): Promise<string> {
    let dialogMessage = '';
    this.page.once('dialog', async (dialog: Dialog) => {
      dialogMessage = dialog.message();
      await dialog.dismiss();
    });
    await this.click(this.alertsPage.promptBtn);
    return dialogMessage;
  }
}
