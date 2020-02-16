import * as plugins from './lik.plugins';

/**
 * fast map allows for very quick lookups of objects with a unique key
 */
export class FastMap<T> {
  private mapObject: { [key: string]: T } = {};

  public isUniqueKey(keyArg: string): boolean {
    return this.mapObject[keyArg] ? false : true;
  }

  public addToMap(keyArg: string, objectArg: T): boolean {
    if (this.isUniqueKey(keyArg)) {
      this.mapObject[keyArg] = objectArg;
      return true;
    } else {
      return false;
    }
  }

  public getByKey(keyArg: string) {
    return this.mapObject[keyArg];
  }

  public removeFromMap(keyArg): T {
    const removedItem = this.getByKey(keyArg);
    delete this.mapObject[keyArg];
    return removedItem;
  }

  public getKeys() {
    const keys: string[] = [];
    for (const keyArg in this.mapObject) {
       if (this.mapObject[keyArg]) {
         keys.push(keyArg);
       }
    }
    return keys;
  }

  public clean() {
    this.mapObject = {};
  }
}
