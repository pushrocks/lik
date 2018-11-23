import { tap, expect } from '@pushrocks/tapbundle';
import * as lik from '../ts/index';

class TestClass {
  constructor(public hey: string) {
    // nothing here
  }
}

let testTree = new lik.Tree<TestClass>();

let testInstance = new TestClass('first');
let testInstance2 = new TestClass('second');
let testInstance3 = new TestClass('third');
let testInstance4 = new TestClass('fourth');
let testInstance5 = new TestClass('fifth');
let testInstance6 = new TestClass('sixth');

tap.test('create a valid tree instance', async () => {
  testTree = new lik.Tree();
  expect(testTree).to.be.instanceOf(lik.Tree);
});

tap.test('should insert an object', async () => {
  testTree.initialize(testInstance);
  let resultArray = testTree.treeToArray(testInstance, {});
  expect(resultArray).to.contain(testInstance);
});

tap.test('should add other objects in a hierachy', async () => {
  testTree.appendChild(testInstance, testInstance2);
  testTree.appendChild(testInstance, testInstance3);
  testTree.appendChild(testInstance, testInstance4);
});

tap.test("should create a JSON object that reflects a tree's hierachy", async () => {
  const jsonTreet = testTree.toJsonWithHierachy(testInstance);
});

tap.start();
