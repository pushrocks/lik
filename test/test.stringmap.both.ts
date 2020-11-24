// import test framework
import { expect, tap } from '@pushrocks/tapbundle';
import * as events from 'events';
import * as smartpromise from '@pushrocks/smartpromise';

// import the module
import * as lik from '../ts/index';

// testData
let testStringmap: lik.Stringmap;
let testString1 = 'testString1';
let testString2 = 'testString2';
let testString3 = 'testString3';
let testString4 = 'testString4';
let testString5 = 'testString5';
let testString6 = 'testString6';

// tests
tap.test('new lik.Objectmap() -> should create an instance of Stringmap', async () => {
  testStringmap = new lik.Stringmap();
  expect(testStringmap).be.instanceof(lik.Stringmap);
});

tap.test(
  'lik.Stringmap.checkString -> should return false for an string not in Stringmap',
  async () => {
    // tslint:disable-next-line:no-unused-expression
    expect(testStringmap.checkString(testString1)).be.false;
  }
);

tap.test('lik.Stringmap.addString -> should add an string to Stringmap', async () => {
  testStringmap.addString(testString1);
  testStringmap.addString(testString2);
  testStringmap.addString(testString3);
  // tslint:disable-next-line:no-unused-expression
  expect(testStringmap.checkString(testString1)).be.true;
  // tslint:disable-next-line:no-unused-expression
  expect(testStringmap.checkString(testString2)).be.true;
  // tslint:disable-next-line:no-unused-expression
  expect(testStringmap.checkString(testString3)).be.true;
  // tslint:disable-next-line:no-unused-expression
  expect(testStringmap.checkMinimatch('*String1')).be.true;
  // tslint:disable-next-line:no-unused-expression
  expect(testStringmap.checkMinimatch('*String2')).be.true;
  // tslint:disable-next-line:no-unused-expression
  expect(testStringmap.checkMinimatch('*String4')).be.false;
});

tap.test('lik.Stringmap.addStringArray -> should add an array of strings', async () => {
  testStringmap.addStringArray([testString4, testString5, testString6]);
  // tslint:disable-next-line:no-unused-expression
  expect(testStringmap.checkMinimatch('*String4')).be.true;
});

tap.test('lik.Stringmap.removeString -> should remove a string from Stringmap', async () => {
  testStringmap.removeString(testString2);
  // tslint:disable-next-line:no-unused-expression
  expect(testStringmap.checkString(testString2)).be.false;
});

tap.test('lik.Stringmap.getStringArray() -> should return a copy of stringArray', async () => {
  let clonedArray = testStringmap.getStringArray();
  // tslint:disable-next-line:no-unused-expression
  expect(clonedArray[0] === 'testString1').be.true;
  // tslint:disable-next-line:no-unused-expression
  expect(clonedArray[0] === testString1).be.true;
});

tap.test(
  'lik.Stringmap.checkIsEmpty() -> should register a function to trigger when empty',
  async () => {
    testStringmap.registerUntilTrue(
      () => {
        return testStringmap.checkIsEmpty();
      },
      () => {
        console.log('Stringmap now is empty');
      }
    );
  }
);

tap.test('lik.Stringmap.empty() -> should remove wipe and then notify', async () => {
  testStringmap.wipe();
});

tap.start();
