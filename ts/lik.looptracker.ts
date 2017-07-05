import * as plugins from './lik.plugins'

import { Objectmap } from './lik.objectmap'

export class LoopTracker<T> {
  referenceObjectMap = new Objectmap<any>()
  constructor () {
    // nothing here
  }

  /**
   * checks and tracks an object
   * @param objectArg
   */
  checkAndTrack (objectArg: T) {
    return this.referenceObjectMap.add(objectArg)
  }
}
