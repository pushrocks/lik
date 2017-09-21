import * as plugins from './lik.plugins'

export class LimitedArray<T> {
  array: T[] = []
  arrayLimit: number
  constructor(limitArg: number) {
    this.arrayLimit = limitArg
  }

  addOne (objectArg: T) {
    this.array.unshift(objectArg)
    if (this.array.length > this.arrayLimit) {
      this.array.length = this.arrayLimit
    }
  }

  addMany (objectArrayArg: T[]) {
    for (let objectArg of objectArrayArg) {
      this.addOne(objectArg)
    }
  }

  setLimit (limitArg: number) {
    this.arrayLimit = limitArg
    if (this.array.length > this.arrayLimit) {
      this.array.length = this.arrayLimit
    }
  }

  getAverage ():number {
    if (typeof this.array[0] === 'number') {
      let sum = 0
      for (let localNumber of this.array) {
        let localNumberAny: any = localNumber
        sum = sum + localNumberAny
      }
      return sum / this.array.length
    } else {
      return null
    }
  }

}
