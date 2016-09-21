/**
 * allows you to easily keep track of a bunch of strings
 */
export interface ITriggerFunction {
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
     * like addString, but accepts an array of strings
     */
    addStringArray(stringArrayArg: string[]): void;
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
     * gets a cloned copy of the current string Array
     */
    getStringArray(): string[];
    /**
     * register a new trigger
     */
    registerUntilTrue(functionArg: ITriggerFunction, doFunctionArg: any): void;
    /**
     * notifies triggers
     */
    private notifyTrigger();
}
