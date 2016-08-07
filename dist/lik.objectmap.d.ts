export interface IObjectmapForEach {
    (itemArg: any): void;
}
/**
 * allows keeping track of objects
 */
export declare class Objectmap {
    private objectArray;
    /**
     * returns a new instance
     */
    constructor();
    /**
     * add object to Objectmap
     */
    add(objectArg: any): void;
    /**
     * remove object from Objectmap
     */
    remove(objectArg: any): void;
    /**
     * check if object is in Objectmap
     */
    checkForObject(objectArg: any): number;
    /**
     * run function for each item in Objectmap
     */
    forEach(functionArg: IObjectmapForEach): void;
    /**
     * wipe Objectmap
     */
    wipe(): void;
}
