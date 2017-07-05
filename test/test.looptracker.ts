// import test framework
import { expect, tap } from 'tapbundle'
import * as events from 'events'
import * as rx from 'rxjs/Rx'
import * as smartq from 'smartq'

// import the module
import lik = require('../dist/index')

let object1 = {}
let object2 = {}
let myLoopTracker: lik.LoopTracker<any>

// tests
tap.test('should create a valid looptracker instance', async () => {
  myLoopTracker = new lik.LoopTracker()
  expect(myLoopTracker).to.be.instanceof(lik.LoopTracker)
})
