export class MyWorld {
  private cache: { [key: string]: any } = {};

  setCache(key: string, value: any) {
    this.cache[key] = value;
  }

  getCache(key: string): any {
    return this.cache[key];
  }
}
