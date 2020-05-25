import * as plugins from './lik.plugins';

/**
 * allows you to easily keep track of a bunch of strings
 */

export type TTriggerFunction =  (stringArray?: string[]) => boolean;

export class Stringmap {
  private _stringArray: string[] = [];
  private _triggerUntilTrueFunctionArray: TTriggerFunction[] = [];
  constructor() {}
  /**
   * add a string to the Stringmap
   */
  addString(stringArg: string) {
    this._stringArray.push(stringArg);
    this.notifyTrigger();
  }

  /**
   * like addString, but accepts an array of strings
   */
  addStringArray(stringArrayArg: string[]) {
    for (const stringItem of stringArrayArg) {
      this.addString(stringItem);
    }
  }

  /**
   * removes a string from Stringmap
   */
  removeString(stringArg: string) {
    for (const keyArg in this._stringArray) {
      if (this._stringArray[keyArg] === stringArg) {
        this._stringArray.splice(parseInt(keyArg), 1);
      }
    }
    this.notifyTrigger();
  }

  /**
   * wipes the Stringmap
   */
  wipe() {
    this._stringArray = [];
    this.notifyTrigger();
  }

  /**
   * check if string is in Stringmap
   */
  public checkString(stringArg: string): boolean {
    return this._stringArray.indexOf(stringArg) !== -1;
  }

  /**
   * checks stringPresence with minimatch
   */
  public checkMinimatch(miniMatchStringArg: string): boolean {
    let foundMatch: boolean = false;
    for (const stringItem of this._stringArray) {
      if (plugins.minimatch(stringItem, miniMatchStringArg)) {
        foundMatch = true;
      }
    }
    return foundMatch;
  }

  /**
   * checks if the Stringmap is empty
   */
  public checkIsEmpty() {
    return this._stringArray.length === 0;
  }

  /**
   * gets a cloned copy of the current string Array
   */
  public getStringArray() {
    const returnArray: string[] = [];
    for (const stringItem of this._stringArray) {
      returnArray.push(stringItem);
    }
    return returnArray;
  }

  // trigger registering

  /**
   * register a new trigger
   */
  public registerUntilTrue(functionArg: TTriggerFunction, callbackArg?: () => any) {
    const trueDeferred = plugins.smartpromise.defer();
    this._triggerUntilTrueFunctionArray.push(() => {
      const result = functionArg(this.getStringArray());
      if (result === true) {
        if (callbackArg) {
          callbackArg();
        }
        trueDeferred.resolve();
      }
      return result;
    });
    this.notifyTrigger();
    return trueDeferred.promise;
  }

  /**
   * notifies triggers
   */
  private notifyTrigger() {
    const filteredArray = this._triggerUntilTrueFunctionArray.filter(functionArg => {
      return !functionArg();
    });
    this._triggerUntilTrueFunctionArray = filteredArray;
  }
}
