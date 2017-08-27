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
     * returns false if the object is already in the map
     * returns true if the object was added successfully
     */
    add(objectArg: T): boolean;
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
    findOneAndRemove(findFunction: IObjectmapFindFunction<T>): T;
    /**
     * run function for each item in Objectmap
     */
    forEach(functionArg: IObjectmapForEachFunction<T>): Promise<void>;
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
