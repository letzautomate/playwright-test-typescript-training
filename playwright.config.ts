import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  reporter: 'html',
  use: {
    actionTimeout: 0,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
    {
       name: 'Mobile Chrome',
       use: {
         ...devices['Pixel 5'],
       },
     },
     {
       name: 'Mobile Safari',
       use: {
         ...devices['iPhone 12'],
       },
     },
     {
       name: 'Microsoft Edge',
       use: {
         channel: 'msedge',
       },
     },
     {
       name: 'Google Chrome',
       use: {
         channel: 'chrome',
       },
     },
  ],
  outputDir: 'test-results/',
};

export default config;
