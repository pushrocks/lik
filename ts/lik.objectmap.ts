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
  private objectArray: T[] = [];

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
  addMappedUnique(uniqueKey: string, objectArg: T) {
    this.add(objectArg);
    this.fastMap.addToMap(uniqueKey, objectArg);
  }

  /**
   * fastest way to get an object from the map
   * @param uniqueKey
   */
  public getMappedUnique(uniqueKey: string) {}

  /**
   * remove key
   * @param functionArg
   */
  public removeMappedUnique() {}

  /**
   * add object to Objectmap
   * returns false if the object is already in the map
   * returns true if the object was added successfully
   */
  public add(objectArg: T): boolean {
    if (this.checkForObject(objectArg)) {
      // the object is already in the objectmap
      return false;
    } else {
      // the object is not yet in the objectmap
      this.objectArray.push(objectArg);
      this.eventSubject.next('add');
      return true;
    }
  }

  /**
   * like .add but adds an whole array of objects
   */
  public addArray(objectArrayArg: T[]) {
    for (let item of objectArrayArg) {
      this.add(item);
    }
  }

  /**
   * check if object is in Objectmap
   */
  public checkForObject(objectArg: T) {
    return this.objectArray.indexOf(objectArg) !== -1;
  }

  /**
   * find object
   */
  public find(findFunction: IObjectmapFindFunction<T>) {
    const resultArray = this.objectArray.filter(findFunction);
    if (resultArray.length > 0) {
      return resultArray[0];
    } else {
      return null;
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
    for (let object of this.objectArray) {
      await functionArg(object);
    }
  }

  /**
   * gets an object in the Observablemap and removes it, so it can't be retrieved again
   */
  public getOneAndRemove(): T {
    const removedItem = this.objectArray.shift();
    this.eventSubject.next('remove');
    return removedItem;
  }

  /**
   * returns a cloned array of all the objects currently in the Objectmap
   */
  public getArray(): T[] {
    const returnArray: any[] = [];
    for (const objectItem of this.objectArray) {
      returnArray.push(objectItem);
    }
    return returnArray;
  }

  /**
   * check if Objectmap ist empty
   */
  public isEmpty(): boolean {
    if (this.objectArray.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * remove object from Objectmap
   */
  public remove(objectArg: T) {
    let replacementArray = [];
    for (let item of this.objectArray) {
      if (item !== objectArg) {
        replacementArray.push(item);
      }
    }
    this.objectArray = replacementArray;
    this.eventSubject.next('remove');
  }

  /**
   * wipe Objectmap
   */
  public wipe() {
    this.objectArray = [];
    this.eventSubject.next('wiped');
  }
}
