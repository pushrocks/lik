import * as plugins from './lik.plugins';

import { InterestMap, IInterestComparisonFunc} from './lik.interestmap';

export class Interest<DTInterestId, DTInterestFullfillment> {
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

  private interestDeferred: plugins.smartpromise.Deferred<DTInterestFullfillment> = new plugins.smartpromise.Deferred();
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
    comparisonFuncArg: IInterestComparisonFunc<DTInterestId>
  ) {
    this.originalInterest = interestArg;
    this.comparisonFunc = comparisonFuncArg;
    this.interestMapRef = interestMapArg;
    this.destructionTimer.completed.then(() => {
      this.destroy();
    });
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