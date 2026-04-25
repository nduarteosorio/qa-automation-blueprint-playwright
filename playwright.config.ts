import { defineConfig } from '@playwright/test';
import { ENV } from './utils/env';

export default defineConfig({
  testDir: './tests',

  retries: 2,
  workers: 4,

  use: {
    baseURL: ENV.baseURL,
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },

  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],
});