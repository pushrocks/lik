/// <reference types="node" />
import * as plugins from './lik.plugins';
import { Objectmap } from './lik.objectmap';
import { Observable } from 'rxjs/Rx';
/**
 * bundles an observable with an emitter
 */
export interface ObservableEmitterBundle {
    observable: plugins.rx.Observable<any>;
    emitter: plugins.events.EventEmitter;
    event: string;
}
export declare class Observablemap {
    ObservableEmitterBundleObjectmap: Objectmap<ObservableEmitterBundle>;
    getObservableForEmitterEvent(emitterArg: plugins.events.EventEmitter, eventArg: string): Observable<any>;
}
