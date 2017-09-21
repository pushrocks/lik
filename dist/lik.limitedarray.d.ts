export declare class LimitedArray<T> {
    array: T[];
    arrayLimit: number;
    constructor(limitArg: number);
    addOne(objectArg: T): void;
    addMany(objectArrayArg: T[]): void;
    setLimit(limitArg: number): void;
    getAverage(): number;
}
