import {  binding, given , then, when} from 'cucumber-tsflow';
import { page, testContext } from '../support/world';
import { HomePage } from '../pages/HomePage';
import { ITestContext } from '../support/ITextContext';

@binding()
 export class StepsClass {
  private homePage: HomePage;

  constructor() {
    this.homePage = new HomePage(page);
  }
  
  @given('user navigates')
  async userNavigatesTo(): Promise<void> {
    await this.homePage.navigateTo();
  }

  @then('user should see the text {string}')
  async userSeesTheText(expectedText: string): Promise<void> {
    await this.homePage.assertTextVisible(expectedText);
  }

  
}

