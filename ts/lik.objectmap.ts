import * as plugins from './lik.plugins';
import { FastMap } from './lik.fastmap';

export interface IObjectmapForEachFunction<T> {
  (itemArg: T): void;
}

export interface IObjectmapFindFunction<T> {
  (itemArg: T): boolean;
}

/**
 * allows keeping track of objects
 */
export class Objectmap<T> {
  private fastMap = new FastMap<T>();

  // events
  public eventSubject = new plugins.smartrx.rxjs.Subject<any>();

  /**
   * returns a new instance
   */
  constructor() {
    // nothing here
  }

  /**
   * adds an object mapped to a string
   * the string must be unique
   */
  addMappedUnique(uniqueKeyArg: string, objectArg: T) {
    this.fastMap.addToMap(uniqueKeyArg, objectArg);
  }

  /**
   * fastest way to get an object from the map
   * @param uniqueKey
   */
  public getMappedUnique(uniqueKeyArg: string) {
    return this.fastMap.getByKey(uniqueKeyArg);
  }

  /**
   * remove key
   * @param functionArg
   */
  public removeMappedUnique(uniqueKey: string) {
    const object = this.getMappedUnique(uniqueKey);
  }

  /**
   * add object to Objectmap
   * returns false if the object is already in the map
   * returns true if the object was added successfully
   */
  public add(objectArg: T): string {
    // lets search for an existing unique key
    for (const keyArg of this.fastMap.getKeys()) {
      const object = this.fastMap.getByKey(keyArg);
      if (object === objectArg) {
        return keyArg;
      }
    }

    // otherwise lets create it
    const uniqueKey = plugins.smartunique.shortId();
    this.addMappedUnique(uniqueKey, objectArg);
    return uniqueKey;
  }

  /**
   * like .add but adds an whole array of objects
   */
  public addArray(objectArrayArg: T[]) {
    for (const item of objectArrayArg) {
      this.add(item);
    }
  }

  /**
   * check if object is in Objectmap
   */
  public checkForObject(objectArg: T): boolean {
    return !!this.getKeyForObject(objectArg);
  }

  /**
   * get key for object
   * @param findFunction 
   */
  public getKeyForObject(objectArg: T) {
    let foundKey: string = null;
    for (const keyArg of this.fastMap.getKeys()) {
      if (!foundKey && this.fastMap.getByKey(keyArg) === objectArg) {
        foundKey = keyArg;
      } else {
        continue;
      }
    }
    return foundKey;
  }

  /**
   * find object
   */
  public find(findFunction: IObjectmapFindFunction<T>): T {
    for (const keyArg of this.fastMap.getKeys()) {
      if (findFunction(this.fastMap.getByKey(keyArg))) {
        return this.getMappedUnique(keyArg);
      }
    }
  }

  /**
   * finds a specific element and then removes it
   */
  public findOneAndRemove(findFunction: IObjectmapFindFunction<T>): T {
    const foundElement = this.find(findFunction);
    if (foundElement) {
      this.remove(foundElement);
    }
    return foundElement;
  }

  /**
   * run function for each item in Objectmap
   */
  public async forEach(functionArg: IObjectmapForEachFunction<T>) {
    for (const keyArg of this.fastMap.getKeys()) {
      await functionArg(this.fastMap.getByKey(keyArg));
    }
  }

  /**
   * gets an object in the Observablemap and removes it, so it can't be retrieved again
   */
  public getOneAndRemove(): T {
    const keys = this.fastMap.getKeys();
    const keyToUse = keys[keys.length - 1];
    const removedItem = this.fastMap.removeFromMap(keyToUse);
    this.eventSubject.next('remove');
    return removedItem;
  }

  /**
   * returns a cloned array of all the objects currently in the Objectmap
   */
  public getArray(): T[] {
    const returnArray: any[] = [];
    for (const keyArg of this.fastMap.getKeys()) {
      returnArray.push(this.fastMap.getByKey(keyArg));
    }
    return returnArray;
  }

  /**
   * check if Objectmap ist empty
   */
  public isEmpty(): boolean {
    return this.fastMap.getKeys().length === 0;
  }

  /**
   * remove object from Objectmap
   */
  public remove(objectArg: T): T {
    if (this.checkForObject(objectArg)) {
      const keyArg = this.getKeyForObject(objectArg);
      const removedObject = this.fastMap.removeFromMap(keyArg);
      this.eventSubject.next('remove');
      return removedObject;
    }
    return null;
  }

  /**
   * wipe Objectmap
   */
  public wipe() {
    for (const keyArg of this.fastMap.getKeys()) {
      this.fastMap.removeFromMap(keyArg);
    }

  }
}
