import { Objectmap } from './lik.objectmap';
export declare class LoopTracker<T> {
    referenceObjectMap: Objectmap<any>;
    constructor();
    /**
     * checks and tracks an object
     * @param objectArg
     */
    checkAndTrack(objectArg: T): boolean;
}
