import { expect, Page } from '@playwright/test';
import { config } from '../support/config';

export class HomePage  {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }
   
   async navigateTo(): Promise<void> {
   
       await this.page.goto(config.baseUrl);
  }

   async assertTextVisible(text: string): Promise<void> {
       await expect(this.page.getByText(text)).toBeVisible();
  }
}