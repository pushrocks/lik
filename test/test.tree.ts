import { tap, expect } from 'tapbundle'
import * as lik from '../ts/index'

let testTree = new lik.Tree<TestClass>()

class TestClass {
  constructor (public hey: string) {
    // nothing here
  }
}
let testInstance = new TestClass('first')

tap.test('create a valid tree instance', async () => {
  testTree = new lik.Tree()
  expect(testTree).to.be.instanceOf(lik.Tree)
})

tap.test('should insert an object', async () => {
  testTree.initialize(testInstance)
  let resultArray = testTree.treeToArray(testInstance, {})
  expect(resultArray).to.contain(testInstance)
})

tap.start()
