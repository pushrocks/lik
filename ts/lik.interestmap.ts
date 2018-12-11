import * as plugins from './lik.plugins';
import { Objectmap } from './lik.objectmap';

import { Observable } from 'rxjs';

import { Interest } from './lik.interestmap.interest';

export type IInterestComparisonFunc<T> = (objectArg: T) => string;

export class InterestMap<DTInterestId, DTInterestFullfillment> {
  /**
   * stores interests that are currently fullfilled by the cache
   */
  private interestObjectMap = new Objectmap<Interest<DTInterestId, DTInterestFullfillment>>();

  /**
   * a function to compare interests
   */
  private comparisonFunc: IInterestComparisonFunc<DTInterestId>;

  constructor(comparisonFuncArg: IInterestComparisonFunc<DTInterestId>) {
    this.comparisonFunc = comparisonFuncArg;
  }

  /**
   * adds an interest to the InterestMap
   * @param objectArg
   */
  public async addInterest(
    objectArg: DTInterestId
  ): Promise<Interest<DTInterestId, DTInterestFullfillment>> {
    const comparisonString = this.comparisonFunc(objectArg);
    let returnInterest: Interest<DTInterestId, DTInterestFullfillment>;
    const newInterest = new Interest<DTInterestId, DTInterestFullfillment>(
      this,
      objectArg,
      this.comparisonFunc
    );
    let interestExists = false;
    await this.interestObjectMap.forEach(interestArg => {
      if (!interestExists && interestArg.comparisonString === newInterest.comparisonString) {
        console.log('info', `interest already exists for ${newInterest.comparisonString}`);
        interestExists = true;
        returnInterest = interestArg;
        returnInterest.renew();
      }
    });
    if (!returnInterest) {
      returnInterest = newInterest;
      this.interestObjectMap.add(returnInterest);
    }
    this.interestObservable.push(returnInterest);
    return returnInterest;
  }

  // tslint:disable-next-line:member-ordering
  public interestObservable = new plugins.smartrx.ObservableIntake<Interest<DTInterestId, any>>();

  /**
   * removes an interest from the interest map
   * @param objectArg removes an interest from the InterestMap
   */
  public removeInterest(interestArg: Interest<DTInterestId, DTInterestFullfillment>) {
    const interestToRemove = this.interestObjectMap.findOneAndRemove(interestArg2 => {
      return interestArg.comparisonString === interestArg2.comparisonString;
    });
  }

  /**
   * check interest
   */
  public checkInterest(objectArg: DTInterestId): boolean {
    const comparisonString = this.comparisonFunc(objectArg);
    return this.checkInterestByString(comparisonString);
  }

  /**
   * checks an interest
   * @param comparisonStringArg
   */
  public checkInterestByString(comparisonStringArg: string): boolean {
    const foundInterest = this.interestObjectMap.find(interest => {
      return interest.comparisonString === comparisonStringArg;
    });
    if (foundInterest) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * inform lost interest
   * @param interestId
   */
  public informLostInterest(interestId: DTInterestId) {
    const wantedInterest = this.findInterest(interestId);
    if (wantedInterest) {
      wantedInterest.markLost();
    }
  }

  /**
   * finds an interest
   * @param objectArg
   */
  public findInterest(objectArg: DTInterestId): Interest<DTInterestId, DTInterestFullfillment> {
    const comparableString = this.comparisonFunc(objectArg);
    const interest = this.interestObjectMap.find(interest => {
      return interest.comparisonString === comparableString;
    });
    return interest; // if an interest is found, the interest is returned, otherwise interest is null
  }
}
