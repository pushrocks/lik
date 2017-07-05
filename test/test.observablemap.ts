// import test framework
import { expect, tap } from 'tapbundle'
import * as events from 'events'
import * as rx from 'rxjs/Rx'
import * as smartq from 'smartq'

// import the module
import lik = require('../dist/index')

let testObservablemap: lik.Observablemap
let testObservable1: rx.Observable<any>
let testObservable2: rx.Observable<any>
let testObservable3: rx.Observable<any>
let testEmitter: events.EventEmitter

tap.test('should create an instance', async () => {
  testObservablemap = new lik.Observablemap()
  expect(testObservablemap).be.instanceof(lik.Observablemap)
})

tap.test('should accept a new emitter', async () => {
  let done = smartq.defer()
  testEmitter = new events.EventEmitter()
  testObservable1 = testObservablemap.getObservableForEmitterEvent(testEmitter, 'event1')
  testObservable1.subscribe(x => {
    done.resolve()
  })
  testObservable2 = testObservablemap.getObservableForEmitterEvent(testEmitter, 'event1')
  testObservable3 = testObservablemap.getObservableForEmitterEvent(testEmitter, 'event2')
  // tslint:disable-next-line:no-unused-expression
  expect(testObservable1 === testObservable2).be.true
  // tslint:disable-next-line:no-unused-expression
  expect(testObservable1 === testObservable3).be.false
  testEmitter.emit('event1')
  await done.promise
})

tap.start()
