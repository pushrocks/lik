import { tap, expect } from 'tapbundle'

import { LimitedArray } from '../ts/index'

let testLimitedArray: LimitedArray<string>

tap.test('should create a LimitedArray', async () => {
  testLimitedArray = new LimitedArray(6)
  expect(testLimitedArray).to.be.instanceof(LimitedArray)
})

tap.test('should never be longer than the set length', async () => {
  testLimitedArray.addMany(['hi','this','is','quite','a','long','string',':)'])
  expect(testLimitedArray.array.length).to.be.lessThan(7)
})

tap.start()
