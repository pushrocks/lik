export interface IObjectmapForEachFunction<T> {
    (itemArg: T): void;
}
export interface IObjectmapFindFunction<T> {
    (itemArg: T): boolean;
}
/**
 * allows keeping track of objects
 */
export declare class Objectmap<T> {
    private objectArray;
    /**
     * returns a new instance
     */
    constructor();
    /**
     * add object to Objectmap
     */
    add(objectArg: T): void;
    /**
     * like .add but adds an whole array of objects
     */
    addArray(objectArrayArg: T[]): void;
    /**
     * check if object is in Objectmap
     */
    checkForObject(objectArg: T): boolean;
    /**
     * find object
     */
    find(findFunction: IObjectmapFindFunction<T>): T;
    /**
     * finds a specific element and then removes it
     */
    findOneAndRemove(findFunction: any): T;
    /**
     * run function for each item in Objectmap
     */
    forEach(functionArg: IObjectmapForEachFunction<T>): void;
    /**
     * gets an object in the Observablemap and removes it, so it can't be retrieved again
     */
    getOneAndRemove(): T;
    /**
     * returns a cloned array of all the objects currently in the Objectmap
     */
    getArray(): T[];
    /**
     * check if Objectmap ist empty
     */
    isEmpty(): boolean;
    /**
     * remove object from Objectmap
     */
    remove(objectArg: T): void;
    /**
     * wipe Objectmap
     */
    wipe(): void;
}
