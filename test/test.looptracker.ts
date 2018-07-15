// import test framework
import { expect, tap } from '@pushrocks/tapbundle';
import * as events from 'events';
import * as smartq from 'smartq';

// import the module
import * as lik from '../ts/index';

let object1 = {};
let object2 = {};
let myLoopTracker: lik.LoopTracker<any>;

// tests
tap.test('should create a valid looptracker instance', async () => {
  myLoopTracker = new lik.LoopTracker();
  expect(myLoopTracker).to.be.instanceof(lik.LoopTracker);
});

tap.test('should add objects once and return true', async () => {
  expect(myLoopTracker.checkAndTrack(object1)).to.be.true;
  expect(myLoopTracker.checkAndTrack(object1)).to.be.false;
  expect(myLoopTracker.checkAndTrack(object2)).to.be.true;
  expect(myLoopTracker.checkAndTrack(object2)).to.be.false;
});

tap.start();
