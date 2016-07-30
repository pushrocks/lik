/**
 * allows keeping track of objects
 */
export declare class Objectmap {
    private objectArray;
    add(objectArg: any): void;
    remove(objectArg: any): void;
    checkForObject(objectArg: any): number;
    wipe(): void;
}
