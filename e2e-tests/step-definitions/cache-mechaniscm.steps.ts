import { binding, given, then } from "cucumber-tsflow";
import { MyWorld } from "../support/world";

@binding()
export class CacheMechanismSteps {
  private world: MyWorld;

  constructor() {
    this.world = new MyWorld();
  }

  @given("I store a string value {string} in cache with key {string}")
  async storeStringInCache(value: string, key: string): Promise<void> {
    this.world.setCache(key, value);
  }

  @then(
    "I retrieve the string from cache with key {string} and it should be {string}"
  )
  retrieveStringFromCache(key: string, expectedValue: string) {
    const result = this.world.getCache(key);
    if (result !== expectedValue) {
      throw new Error(`Expected '${expectedValue}' but got '${result}'`);
    }
  }

  @given("I store an object in cache with key {string}")
  storeObjectInCache(key: string) {
    const obj = { name: "John", age: 30 };
    this.world.setCache(key, obj);
  }

  @then("I retrieve the object from cache with key {string}")
  retrieveObjectFromCache(key: string) {
    const result = this.world.getCache(key);
    const expectedObj = { name: "John", age: 30 };
    if (JSON.stringify(result) !== JSON.stringify(expectedObj)) {
      throw new Error(
        `Expected ${JSON.stringify(expectedObj)} but got ${JSON.stringify(
          result
        )}`
      );
    }
  }

  @given("I store a number value {int} in cache with key {string}")
  storeNumberInCache(value: number, key: string) {
    this.world.setCache(key, value);
  }

  @then(
    "I retrieve the number from cache with key {string} and it should be {int}"
  )
  retrieveNumberFromCache(key: string, expectedValue: number) {
    const result = this.world.getCache(key);
    if (result !== expectedValue) {
      throw new Error(`Expected ${expectedValue} but got ${result}`);
    }
  }

  @given("I try to retrieve data from cache with key {string}")
  retrieveFromCache(key: string) {
    this.world.setCache(key, undefined);
  }

  @then('I should get "undefined" as the value')
  verifyUndefinedValue() {
    const result = this.world.getCache("unknown");
    if (result !== undefined) {
      throw new Error(`Expected 'undefined' but got '${result}'`);
    }
  }
}
