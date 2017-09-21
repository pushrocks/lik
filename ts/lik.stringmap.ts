import * as plugins from './lik.plugins'

/**
 * allows you to easily keep track of a bunch of strings
 */

export interface ITriggerFunction {
  (): boolean
}

export class Stringmap {
  private _stringArray: string[] = []
  private _triggerUntilTrueFunctionArray: ITriggerFunction[] = []
  constructor() { }
  /**
   * add a string to the Stringmap
   */
  addString (stringArg: string) {
    this._stringArray.push(stringArg)
    this.notifyTrigger()
  }

  /**
   * like addString, but accepts an array of strings
   */
  addStringArray (stringArrayArg: string[]) {
    for (let stringItem of stringArrayArg) {
      this.addString(stringItem)
    }
  }

  /**
   * removes a string from Stringmap
   */
  removeString (stringArg: string) {
    for (let keyArg in this._stringArray) {
      if (this._stringArray[ keyArg ] === stringArg) {
        this._stringArray.splice(parseInt(keyArg), 1)
      }
    }
    this.notifyTrigger()
  }

  /**
   * wipes the Stringmap
   */
  wipe () {
    this._stringArray = []
    this.notifyTrigger()
  }

  /**
   * check if string is in Stringmap
   */
  checkString (stringArg: string): boolean {
    return this._stringArray.indexOf(stringArg) !== -1
  }

  /**
   * checks stringPresence with minimatch
   */
  checkMinimatch (miniMatchStringArg: string): boolean {
    let foundMatch: boolean = false
    for (let stringItem of this._stringArray) {
      if (plugins.minimatch(stringItem, miniMatchStringArg)) {
        foundMatch = true
      }
    }
    return foundMatch
  }

  /**
   * checks if the Stringmap is empty
   */
  checkIsEmpty () {
    return (this._stringArray.length === 0)
  }

  /**
   * gets a cloned copy of the current string Array
   */
  getStringArray () {
    return plugins.lodash.cloneDeep(this._stringArray)
  }

  // trigger registering

  /**
   * register a new trigger
   */
  registerUntilTrue (functionArg: ITriggerFunction, doFunctionArg) {
    this._triggerUntilTrueFunctionArray.push(
      () => {
        let result = functionArg()
        if (result === true) {
          doFunctionArg()
        }
        return result
      }
    )
    this.notifyTrigger()
  }
  
  /**
   * notifies triggers
   */
  private notifyTrigger () {
    let filteredArray = this._triggerUntilTrueFunctionArray.filter((functionArg) => {
      return !functionArg()
    })
    this._triggerUntilTrueFunctionArray = filteredArray
  }

}
