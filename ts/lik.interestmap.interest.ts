import * as plugins from './lik.plugins';

import { InterestMap, IInterestComparisonFunc } from './lik.interestmap';

export interface IInterestOptions {
  markLostAfterDefault: number;
}

export class Interest<DTInterestId, DTInterestFullfillment> {
  public options: IInterestOptions;

  private interestMapRef: InterestMap<DTInterestId, DTInterestFullfillment>;
  public originalInterest: DTInterestId;
  public comparisonFunc: IInterestComparisonFunc<DTInterestId>;
  public destructionTimer = new plugins.smarttime.Timer(10000);
  public isFullfilled = false;

  /**
   * a generic store to store objects in that are needed for fullfillment;
   */
  public fullfillmentStore: any[] = [];

  /**
   * quick access to a string that makes the interest comparable for checking for similar interests
   */
  public get comparisonString() {
    return this.comparisonFunc(this.originalInterest);
  }

  private interestDeferred: plugins.smartpromise.Deferred<
    DTInterestFullfillment
  > = new plugins.smartpromise.Deferred();
  public interestFullfilled = this.interestDeferred.promise;

  /**
   * fullfill the interest
   */
  public fullfillInterest(objectArg: DTInterestFullfillment) {
    this.isFullfilled = true;
    this.fullfillmentStore = [];
    this.interestDeferred.resolve(objectArg);
  }

  /**
   *
   */
  constructor(
    interestMapArg: InterestMap<DTInterestId, DTInterestFullfillment>,
    interestArg: DTInterestId,
    comparisonFuncArg: IInterestComparisonFunc<DTInterestId>,
    optionsArg?: IInterestOptions
  ) {
    this.interestMapRef = interestMapArg;
    this.originalInterest = interestArg;
    this.comparisonFunc = comparisonFuncArg;
    this.options = optionsArg;

    this.destructionTimer.completed.then(() => {
      this.destroy();
    });
    if (this.options?.markLostAfterDefault) {
      plugins.smartdelay.delayFor(this.options.markLostAfterDefault).then(this.markLost);
    }
  }

  // ===============================
  // LIFECYCLE MANAGEMENT
  // ===============================

  /**
   * self destructs the interest
   */
  public destroy() {
    this.interestMapRef.removeInterest(this);
  }

  /**
   * notifies the interest that the interest in it has been lost
   */
  public markLost() {
    this.destructionTimer.start();
  }

  /**
   * notifies the interest that the interest in it has been restored
   */
  public renew() {
    this.destructionTimer.reset();
  }
}
