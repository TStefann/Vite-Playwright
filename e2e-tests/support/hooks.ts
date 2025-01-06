import {
  After,
  Before,
  BeforeAll,
  AfterAll,
  Status,
  setDefaultTimeout,
} from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "playwright";

let page: Page;
let browser: Browser;
let context: BrowserContext;

setDefaultTimeout(5000);

BeforeAll(async () => {
  console.log("Launching browser...");
  browser = await chromium.launch({
    headless: true,
  });
});

Before(async () => {
  console.log("Creating new instance of context and page...");
  context = await browser.newContext();
  page = await context.newPage();
});

After(async function (Scenario) {
  if (Scenario.result!.status != Status.PASSED)
    await this.attach(
      await page.screenshot({
        path: `e2e-tests/Screenshots/${Scenario.pickle.name}_${Date.now()}.png`,
        fullPage: true,
      }),
      "image/png"
    );

  console.log("Closing context and page...");
  await page.close();
  await context.close();
});

AfterAll(async () => {
  console.log("Closing browser...");
  browser?.close();
});

export { page, browser };
