import 'typings-test'
import lik = require('../dist/index')
import * as should from 'should'

describe('lik',function(){
    describe('Stringmap',function(){
        let testStringmap: lik.Stringmap
        let testString1 = 'testString1'
        let testString2 = 'testString2'
        let testString3 = 'testString3'
        it('should create an instance of Stringmap',function(){
            testStringmap = new lik.Stringmap()
            should(testStringmap).be.instanceof(lik.Stringmap)
        })
        it('should return false for an string not in Stringmap',function(){
            should(testStringmap.checkString(testString1)).be.false()
        })
        it('should add an string to Stringmap',function(){
            testStringmap.addString(testString1)
            testStringmap.addString(testString2)
            testStringmap.addString(testString3)
            should(testStringmap.checkString(testString1)).be.true()
            should(testStringmap.checkString(testString2)).be.true()
            should(testStringmap.checkString(testString3)).be.true()
            should(testStringmap.checkMinimatch('*String1')).be.true()
            should(testStringmap.checkMinimatch('*String2')).be.true()
            should(testStringmap.checkMinimatch('*String4')).be.false()
        })
        it('should remove a string from Stringmap',function(){
            testStringmap.removeString(testString2)
            should(testStringmap.checkString(testString2)).be.false()
        })
        it('should return a copy of stringArray',function(){
            let clonedArray = testStringmap.getStringArray()
            should(clonedArray[0] === 'testString1').be.true()
            should(clonedArray[0] === testString1).be.true()
        })
        it('should register a function to trigger when empty',function(){
            testStringmap.registerUntilTrue(
                () => { return testStringmap.checkIsEmpty() },
                () => { console.log('Stringmap now is empty') }
            )
        })
        it('should remove wipe and then notify',function(){
            testStringmap.wipe()
        })
    })
    describe('Objectmap',function(){
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
        it('should correctly instantiate an Objectmap',function(){
            testObjectmap = new lik.Objectmap<ITestObject>()
            should(testObjectmap).be.instanceof(lik.Objectmap)
        })
        it('should correctly add an object to Objectmap',function(){
            testObjectmap.add(testObject1)
            should(testObjectmap.checkForObject(testObject1)).be.true
            should(testObjectmap.checkForObject(testObject2)).be.false
        })
        it('should correctly remove an object to Objectmap',function(){
            testObjectmap.add(testObject2)
            testObjectmap.remove(testObject1)
            should(testObjectmap.checkForObject(testObject1)).be.false
            should(testObjectmap.checkForObject(testObject2)).be.true
        })
        it('should correctly run a function forEach map object',function(){
            testObjectmap.forEach(itemArg => {
                should(itemArg).have.ownProperty('propOne')
            })
        })
        it('should correctly find an object',function(){
            let myObject = {propOne: 'helloThere', propTwo: 'helloAnyway'}
            testObjectmap.add(myObject)
            let referenceObject = testObjectmap.find((itemArg) => { return (itemArg.propOne === 'helloThere') })
            should(myObject === referenceObject).be.true()
        })
    })
})
