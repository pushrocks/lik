import * as plugins from './lik.plugins'

export interface IObjectmapForEachFunction<T> {
  (itemArg: T): void
}

export interface IObjectmapFindFunction<T> {
  (itemArg: T): boolean
}

/**
 * allows keeping track of objects
 */
export class Objectmap<T> {
  private objectArray: T[] = []

  /**
   * returns a new instance
   */
  constructor () {
    // nothing here
  }

  /**
   * add object to Objectmap
   * returns false if the object is already in the map
   * returns true if the object was added successfully
   */
  add (objectArg: T): boolean {
    if (this.checkForObject(objectArg)) {
      // the object is already in the objectmap
      return false
    } else {
      // the object is not yet in the objectmap
      this.objectArray.push(objectArg)
      return true
    }
  }

  /**
   * like .add but adds an whole array of objects
   */
  addArray (objectArrayArg: T[]) {
    for (let item of objectArrayArg) {
      this.add(item)
    }
  }

  /**
   * check if object is in Objectmap
   */
  checkForObject (objectArg: T) {
    return this.objectArray.indexOf(objectArg) !== -1
  }

  /**
   * find object
   */
  find (findFunction: IObjectmapFindFunction<T>) {
    let resultArray = this.objectArray.filter(findFunction)
    if (resultArray.length > 0) {
      return resultArray[ 0 ]
    } else {
      return null
    }
  }

  /**
   * finds a specific element and then removes it
   */
  findOneAndRemove (findFunction: IObjectmapFindFunction<T>): T {
    let foundElement = this.find(findFunction)
    if (foundElement) {
      this.remove(foundElement)
    }
    return foundElement
  }

  /**
   * run function for each item in Objectmap
   */
  async forEach (functionArg: IObjectmapForEachFunction<T>) {
    for (let object of this.objectArray) {
      await functionArg(object)
    }
  }

  /**
   * gets an object in the Observablemap and removes it, so it can't be retrieved again
   */
  getOneAndRemove (): T {
    return this.objectArray.shift()
  }

  /**
   * returns a cloned array of all the objects currently in the Objectmap
   */
  getArray () {
    return plugins.lodash.cloneDeep(this.objectArray)
  }

  /**
   * check if Objectmap ist empty
   */
  isEmpty (): boolean {
    if (this.objectArray.length === 0) {
      return true
    } else {
      return false
    }
  }

  /**
   * remove object from Objectmap
   */
  remove (objectArg: T) {
    let replacementArray = []
    for (let item of this.objectArray) {
      if (item !== objectArg) {
        replacementArray.push(item)
      }
    }
    this.objectArray = replacementArray
  }

  /**
   * wipe Objectmap
   */
  wipe () {
    this.objectArray = []
  }
}
