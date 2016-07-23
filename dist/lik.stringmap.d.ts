/**
 * allows you to easily keep track of a bunch of strings;
 */
export interface triggerFunction {
    (): boolean;
}
export declare class Stringmap {
    private _stringArray;
    private _triggerUntilTrueFunctionArray;
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
     * wipes the Stringmap
     */
    wipe(): void;
    /**
     * check if string is in Stringmap
     */
    checkString(stringArg: string): boolean;
    /**
     * checks stringPresence with minimatch
     */
    checkMinimatch(miniMatchStringArg: string): boolean;
    /**
     * checks if the Stringmap is empty
     */
    checkIsEmpty(): boolean;
    /**
     * notifies triggers
     */
    private notifyTrigger();
    /**
     * register a new trigger
     */
    registerUntilTrue(functionArg: triggerFunction, doFunctionArg: any): void;
}
