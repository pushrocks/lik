import * as plugins from './lik.plugins'
import { Objectmap } from './lik.objectmap'
import { Stringmap } from './lik.stringmap'
import { Observable } from 'rxjs/Rx'

/**
 * bundles an observable with an emitter
 */
export interface ObservableEmitterBundle {
  observable: plugins.rx.Observable<any>
  emitter: plugins.events.EventEmitter
  event: string
}

/**
 * manages observables by making sure that only one observable is regsitered per event
 */
export class Observablemap {
  ObservableEmitterBundleObjectmap = new Objectmap<ObservableEmitterBundle>()

  /**
   * creates a new observable if not yet registered for the same event.
   * In case event has been registered before the same observable is returned.
   */
  getObservableForEmitterEvent (emitterArg: plugins.events.EventEmitter, eventArg: string) {
    let existingBundle = this.ObservableEmitterBundleObjectmap.find((bundleArg) => {
      return (bundleArg.emitter === emitterArg && bundleArg.event === eventArg)
    })
    if (existingBundle) {
      return existingBundle.observable
    } else {
      let emitterObservable = plugins.rx.Observable.fromEvent(emitterArg, eventArg)
      this.ObservableEmitterBundleObjectmap.add({
        observable: emitterObservable,
        emitter: emitterArg,
        event: eventArg
      })
      return emitterObservable
    }
  }
}
