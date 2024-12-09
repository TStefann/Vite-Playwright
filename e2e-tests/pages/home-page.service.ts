import { expect, Page } from "@playwright/test";
import { config } from "../support/config";

export class HomePageService {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickOnHints(): Promise<void> {
    await this.page.getByRole("button", { name: /show hints/i }).click();
  }

  async navigateTo(): Promise<void> {
    await this.page.goto(config.baseUrl);
  }

  async assertTextVisible(text: string): Promise<void> {
    await expect(this.page.getByText(text)).toBeVisible();
  }

  async isHintsVisible(text: string): Promise<void> {
    expect(this.page.getByRole("heading", { name: text, exact: true }));
  }
}
