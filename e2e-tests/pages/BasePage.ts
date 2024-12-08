

import { Page } from '@playwright/test';

export class BasePage {
  private page: Page | null = null;

  /**
   * Gets the Playwright Page instance
   * @returns The Playwright Page instance
   */
  getPage(): Page {
    if (!this.page) {
      throw new Error('Page instance is not initialized.');
    }
    return this.page;
  }
}


