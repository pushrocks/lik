/**
 * allows you to easily keep track of a bunch of strings;
 */
export declare class Stringmap {
    private _stringArray;
    constructor();
    /**
     * add a string to the Stringmap
     */
    addString(stringArg: string): void;
    /**
     * removes a string from Stringmap
     */
    removeString(stringArg: string): void;
    /**
     * check if string is in Stringmap
     */
    checkString(stringArg: string): boolean;
}
