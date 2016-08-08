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
     * remove object from Objectmap
     */
    remove(objectArg: T): void;
    /**
     * check if object is in Objectmap
     */
    checkForObject(objectArg: T): boolean;
    /**
     * find object
     */
    find(findFunction: IObjectmapFindFunction<T>): T;
    /**
     * run function for each item in Objectmap
     */
    forEach(functionArg: IObjectmapForEachFunction<T>): void;
    /**
     * wipe Objectmap
     */
    wipe(): void;
}
