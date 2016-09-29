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
    constructor() {

    }

    /**
     * add object to Objectmap
     */
    add(objectArg: T) {
        this.objectArray.push(objectArg)
    }

    /**
     * like .add but adds an whole array of objects
     */
    addArray(objectArrayArg: T[]) {
        for (let item of objectArrayArg) {
            this.add(item)
        }
    }

    /**
     * remove object from Objectmap
     */
    remove(objectArg: T) {
        let replacmentArray = []
        for (let item of this.objectArray) {
            if (item !== objectArg) {
                replacmentArray.push(item)
            }
        }
        this.objectArray = replacmentArray
    }

    /**
     * check if object is in Objectmap
     */
    checkForObject(objectArg: T) {
        return this.objectArray.indexOf(objectArg) !== -1
    }

    /**
     * find object
     */
    find(findFunction: IObjectmapFindFunction<T>) {
        let resultArray = this.objectArray.filter(findFunction)
        if (resultArray.length > 0) {
            return resultArray[0]
        } else {
            return null
        }
    }

    /**
     * run function for each item in Objectmap
     */
    forEach(functionArg: IObjectmapForEachFunction<T>) {
        return this.objectArray.forEach(functionArg)
    }

    /**
     * wipe Objectmap
     */
    wipe() {
        this.objectArray = []
    }

    /**
     * returns a cloned array of all the objects currently in the Objectmap
     */
    getArray() {
        return plugins.lodash.cloneDeep(this.objectArray)
    }
}
