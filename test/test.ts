import { expect, tap } from 'tapbundle'
import * as events from 'events'
import * as rx from 'rxjs/Rx'
import * as smartq from 'smartq'

import lik = require('../dist/index')
let testStringmap: lik.Stringmap
let testString1 = 'testString1'
let testString2 = 'testString2'
let testString3 = 'testString3'
let testString4 = 'testString4'
let testString5 = 'testString5'
let testString6 = 'testString6'
tap.test('new lik.Objectmap() -> should create an instance of Stringmap', async () => {
  testStringmap = new lik.Stringmap()
  expect(testStringmap).be.instanceof(lik.Stringmap)
})
tap.test('lik.Stringmap.checkString -> should return false for an string not in Stringmap', async () => {
  // tslint:disable-next-line:no-unused-expression
  expect(testStringmap.checkString(testString1)).be.false
})
tap.test('lik.Stringmap.addString -> should add an string to Stringmap', async () => {
  testStringmap.addString(testString1)
  testStringmap.addString(testString2)
  testStringmap.addString(testString3)
  // tslint:disable-next-line:no-unused-expression
  expect(testStringmap.checkString(testString1)).be.true
  // tslint:disable-next-line:no-unused-expression
  expect(testStringmap.checkString(testString2)).be.true
  // tslint:disable-next-line:no-unused-expression
  expect(testStringmap.checkString(testString3)).be.true
  // tslint:disable-next-line:no-unused-expression
  expect(testStringmap.checkMinimatch('*String1')).be.true
  // tslint:disable-next-line:no-unused-expression
  expect(testStringmap.checkMinimatch('*String2')).be.true
  // tslint:disable-next-line:no-unused-expression
  expect(testStringmap.checkMinimatch('*String4')).be.false
})
tap.test('lik.Stringmap.addStringArray -> should add an array of strings', async () => {
  testStringmap.addStringArray([ testString4, testString5, testString6 ])
  // tslint:disable-next-line:no-unused-expression
  expect(testStringmap.checkMinimatch('*String4')).be.true
})
tap.test('lik.Stringmap.removeString -> should remove a string from Stringmap', async () => {
  testStringmap.removeString(testString2)
  // tslint:disable-next-line:no-unused-expression
  expect(testStringmap.checkString(testString2)).be.false
})
tap.test('lik.Stringmap.getStringArray() -> should return a copy of stringArray', async () => {
  let clonedArray = testStringmap.getStringArray()
  // tslint:disable-next-line:no-unused-expression
  expect(clonedArray[ 0 ] === 'testString1').be.true
  // tslint:disable-next-line:no-unused-expression
  expect(clonedArray[ 0 ] === testString1).be.true
})
tap.test('lik.Stringmap.checkIsEmpty() -> should register a function to trigger when empty', async () => {
  testStringmap.registerUntilTrue(
    () => { return testStringmap.checkIsEmpty() },
    () => { console.log('Stringmap now is empty') }
  )
})
tap.test('lik.Stringmap.empty() -> should remove wipe and then notify', async () => {
  testStringmap.wipe()
})

// Objectmap
interface ITestObject {
  propOne: string
  propTwo: string
}
let testObjectmap: lik.Objectmap<ITestObject>
let testObject1: ITestObject = {
  propOne: 'hello',
  propTwo: 'hello2'
}
let testObject2: ITestObject = {
  propOne: 'hello',
  propTwo: 'hello2'
}
tap.test('new lik.Objectmap() -> should correctly instantiate an Objectmap', async () => {
  testObjectmap = new lik.Objectmap<ITestObject>()
  expect(testObjectmap).be.instanceof(lik.Objectmap)
})
tap.test('lik.Objectmap.add() -> should correctly add an object to Objectmap', async () => {
  testObjectmap.add(testObject1)
  // tslint:disable-next-line:no-unused-expression
  expect(testObjectmap.checkForObject(testObject1)).be.true
  // tslint:disable-next-line:no-unused-expression
  expect(testObjectmap.checkForObject(testObject2)).be.false
})
tap.test('lik.Objectmap.remove() -> should correctly remove an object to Objectmap', async () => {
  testObjectmap.add(testObject2)
  testObjectmap.remove(testObject1)
  // tslint:disable-next-line:no-unused-expression
  expect(testObjectmap.checkForObject(testObject1)).be.false
  // tslint:disable-next-line:no-unused-expression
  expect(testObjectmap.checkForObject(testObject2)).be.true
})
tap.test('Objectmap.forEach -> should correctly run a function forEach map object', async () => {
  testObjectmap.forEach(itemArg => {
    expect(itemArg).have.ownProperty('propOne')
  })
})
tap.test('lik.Objectmap.find() -> should correctly find an object', async () => {
  let myObject = { propOne: 'helloThere', propTwo: 'helloAnyway' }
  testObjectmap.add(myObject)
  let referenceObject = testObjectmap.find((itemArg) => { return (itemArg.propOne === 'helloThere') })
  // tslint:disable-next-line:no-unused-expression
  expect(myObject === referenceObject).be.true
})
tap.test('lik.Objectmap.getArray() -> should return a cloned array', async () => {
  let myObject = { propOne: 'test1', propTwo: 'wow, how awesome' }
  testObjectmap.add(myObject)
  let clonedArray = testObjectmap.getArray()
  expect(clonedArray[ clonedArray.length - 1 ]).eql(myObject)
})
tap.test('should get one object and then remove it', async () => {
  let originalLength = testObjectmap.getArray().length
  let oneObject = testObjectmap.getOneAndRemove()
  // tslint:disable-next-line:no-unused-expression
  expect(oneObject).not.be.null
  expect(testObjectmap.getArray().length).equal(originalLength - 1)
  expect(testObjectmap.getArray()).to.not.contain(oneObject)
})
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
