// import test framework
import { expect, tap } from '@pushrocks/tapbundle';
import * as events from 'events';
import * as smartpromise from '@pushrocks/smartpromise';

// import the module
import * as lik from '../ts/index';

// Objectmap
interface ITestObject {
  propOne: string;
  propTwo: string;
}
let testObjectmap: lik.ObjectMap<ITestObject>;
let testObject1: ITestObject = {
  propOne: 'hello',
  propTwo: 'hello2',
};
let testObject2: ITestObject = {
  propOne: 'hello',
  propTwo: 'hello2',
};

tap.test('new lik.Objectmap() -> should correctly instantiate an Objectmap', async () => {
  testObjectmap = new lik.ObjectMap<ITestObject>();
  expect(testObjectmap).be.instanceof(lik.ObjectMap);
});

tap.test('lik.Objectmap.add() -> should correctly add an object to Objectmap', async () => {
  testObjectmap.add(testObject1);
  // tslint:disable-next-line:no-unused-expression
  expect(testObjectmap.checkForObject(testObject1)).be.true;
  // tslint:disable-next-line:no-unused-expression
  expect(testObjectmap.checkForObject(testObject2)).be.false;
});

tap.test('lik.Objectmap.remove() -> should correctly remove an object to Objectmap', async () => {
  testObjectmap.add(testObject2);
  testObjectmap.remove(testObject1);
  // tslint:disable-next-line:no-unused-expression
  expect(testObjectmap.checkForObject(testObject1)).be.false;
  // tslint:disable-next-line:no-unused-expression
  expect(testObjectmap.checkForObject(testObject2)).be.true;
});

tap.test('Objectmap.forEach -> should correctly run a function forEach map object', async () => {
  testObjectmap.forEach((itemArg) => {
    expect(itemArg).to.have.property('propOne');
  });
});

tap.test('lik.Objectmap.find() -> should correctly find an object', async () => {
  let myObject = { propOne: 'helloThere', propTwo: 'helloAnyway' };
  testObjectmap.add(myObject);
  let referenceObject = testObjectmap.find((itemArg) => {
    return itemArg.propOne === 'helloThere';
  });
  // tslint:disable-next-line:no-unused-expression
  expect(myObject === referenceObject).be.true;
});

tap.test('lik.Objectmap.getArray() -> should return a cloned array', async () => {
  let myObject = { propOne: 'test1', propTwo: 'wow, how awesome' };
  testObjectmap.add(myObject);
  let clonedArray = testObjectmap.getArray();
  expect(clonedArray[clonedArray.length - 1]).to.eql(myObject);
});

tap.test('should get one object and then remove it', async () => {
  let originalLength = testObjectmap.getArray().length;
  let oneObject = testObjectmap.getOneAndRemove();
  // tslint:disable-next-line:no-unused-expression
  expect(oneObject).not.be.null;
  expect(testObjectmap.getArray().length).equal(originalLength - 1);
  expect(testObjectmap.getArray()).to.not.contain(oneObject);
});

tap.start();
