import { binding, given, then, when } from "cucumber-tsflow";
import { HomePageService } from "../pages/home-page.service";
import { page } from "../support/hooks";

@binding()
export class StepsClass {
  private homePageService: HomePageService;

  constructor() {
    this.homePageService = new HomePageService(page);
  }

  @given("user navigates to home page")
  async userNavigatesTo(): Promise<void> {
    await this.homePageService.navigateTo();
  }

  @when("user clicks on show hints")
  async clickOnHints(): Promise<void> {
    await this.homePageService.clickOnHints();
  }

  @then("user should see the text {string}")
  async userSeesTheText(expectedText: string): Promise<void> {
    await this.homePageService.assertTextVisible(expectedText);
  }

  @then("user should see hint {string}")
  async isHintsVisible(expectedText: string): Promise<void> {
    await this.homePageService.isHintsVisible(expectedText);
  }
}
