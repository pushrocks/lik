"use strict";
require("typings-test");
const events = require("events");
const lodash = require("lodash");
const should = require("should");
const lik = require("../dist/index");
describe('lik', function () {
    describe('Stringmap', function () {
        let testStringmap;
        let testString1 = 'testString1';
        let testString2 = 'testString2';
        let testString3 = 'testString3';
        let testString4 = 'testString4';
        let testString5 = 'testString5';
        let testString6 = 'testString6';
        it('new lik.Objectmap() -> should create an instance of Stringmap', function () {
            testStringmap = new lik.Stringmap();
            should(testStringmap).be.instanceof(lik.Stringmap);
        });
        it('lik.Stringmap.checkString -> should return false for an string not in Stringmap', function () {
            should(testStringmap.checkString(testString1)).be.false();
        });
        it('lik.Stringmap.addString -> should add an string to Stringmap', function () {
            testStringmap.addString(testString1);
            testStringmap.addString(testString2);
            testStringmap.addString(testString3);
            should(testStringmap.checkString(testString1)).be.true();
            should(testStringmap.checkString(testString2)).be.true();
            should(testStringmap.checkString(testString3)).be.true();
            should(testStringmap.checkMinimatch('*String1')).be.true();
            should(testStringmap.checkMinimatch('*String2')).be.true();
            should(testStringmap.checkMinimatch('*String4')).be.false();
        });
        it('lik.Stringmap.addStringArray -> should add an array of strings', function () {
            testStringmap.addStringArray([testString4, testString5, testString6]);
            should(testStringmap.checkMinimatch('*String4')).be.true();
        });
        it('lik.Stringmap.removeString -> should remove a string from Stringmap', function () {
            testStringmap.removeString(testString2);
            should(testStringmap.checkString(testString2)).be.false();
        });
        it('lik.Stringmap.getStringArray() -> should return a copy of stringArray', function () {
            let clonedArray = testStringmap.getStringArray();
            should(clonedArray[0] === 'testString1').be.true();
            should(clonedArray[0] === testString1).be.true();
        });
        it('lik.Stringmap.checkIsEmpty() -> should register a function to trigger when empty', function () {
            testStringmap.registerUntilTrue(() => { return testStringmap.checkIsEmpty(); }, () => { console.log('Stringmap now is empty'); });
        });
        it('lik.Stringmap.empty() -> should remove wipe and then notify', function () {
            testStringmap.wipe();
        });
    });
    describe('Objectmap', function () {
        let testObjectmap;
        let testObject1 = {
            propOne: 'hello',
            propTwo: 'hello2'
        };
        let testObject2 = {
            propOne: 'hello',
            propTwo: 'hello2'
        };
        it('new lik.Objectmap() -> should correctly instantiate an Objectmap', function () {
            testObjectmap = new lik.Objectmap();
            should(testObjectmap).be.instanceof(lik.Objectmap);
        });
        it('lik.Objectmap.add() -> should correctly add an object to Objectmap', function () {
            testObjectmap.add(testObject1);
            should(testObjectmap.checkForObject(testObject1)).be.true;
            should(testObjectmap.checkForObject(testObject2)).be.false;
        });
        it('lik.Objectmap.remove() -> should correctly remove an object to Objectmap', function () {
            testObjectmap.add(testObject2);
            testObjectmap.remove(testObject1);
            should(testObjectmap.checkForObject(testObject1)).be.false;
            should(testObjectmap.checkForObject(testObject2)).be.true;
        });
        it('Objectmap.forEach -> should correctly run a function forEach map object', function () {
            testObjectmap.forEach(itemArg => {
                should(itemArg).have.ownProperty('propOne');
            });
        });
        it('lik.Objectmap.find() -> should correctly find an object', function () {
            let myObject = { propOne: 'helloThere', propTwo: 'helloAnyway' };
            testObjectmap.add(myObject);
            let referenceObject = testObjectmap.find((itemArg) => { return (itemArg.propOne === 'helloThere'); });
            should(myObject === referenceObject).be.true();
        });
        it('lik.Objectmap.getArray() -> should return a cloned array', function () {
            let myObject = { propOne: 'test1', propTwo: 'wow, how awesome' };
            testObjectmap.add(myObject);
            let clonedArray = testObjectmap.getArray();
            should(lodash.isEqual(clonedArray[clonedArray.length - 1], myObject)).be.true();
        });
    });
    describe('Observablemap', function () {
        let testObservablemap;
        let testObservable1;
        let testObservable2;
        let testObservable3;
        let testEmitter;
        it('should create an instance', function () {
            testObservablemap = new lik.Observablemap();
            should(testObservablemap).be.instanceof(lik.Observablemap);
        });
        it('should accept a new emitter', function (done) {
            testEmitter = new events.EventEmitter();
            testObservable1 = testObservablemap.getObservableForEmitterEvent(testEmitter, 'event1');
            testObservable1.subscribe(x => {
                done();
            });
            testObservable2 = testObservablemap.getObservableForEmitterEvent(testEmitter, 'event1');
            testObservable3 = testObservablemap.getObservableForEmitterEvent(testEmitter, 'event2');
            should(testObservable1 === testObservable2).be.true();
            should(testObservable1 === testObservable3).be.false();
            testEmitter.emit('event1');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUNyQixpQ0FBZ0M7QUFFaEMsaUNBQWdDO0FBQ2hDLGlDQUFnQztBQUVoQyxxQ0FBcUM7QUFDckMsUUFBUSxDQUFDLEtBQUssRUFBQztJQUNYLFFBQVEsQ0FBQyxXQUFXLEVBQUM7UUFDakIsSUFBSSxhQUE0QixDQUFBO1FBQ2hDLElBQUksV0FBVyxHQUFHLGFBQWEsQ0FBQTtRQUMvQixJQUFJLFdBQVcsR0FBRyxhQUFhLENBQUE7UUFDL0IsSUFBSSxXQUFXLEdBQUcsYUFBYSxDQUFBO1FBQy9CLElBQUksV0FBVyxHQUFHLGFBQWEsQ0FBQTtRQUMvQixJQUFJLFdBQVcsR0FBRyxhQUFhLENBQUE7UUFDL0IsSUFBSSxXQUFXLEdBQUcsYUFBYSxDQUFBO1FBQy9CLEVBQUUsQ0FBQywrREFBK0QsRUFBQztZQUMvRCxhQUFhLEdBQUcsSUFBSSxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUE7WUFDbkMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3RELENBQUMsQ0FBQyxDQUFBO1FBQ0YsRUFBRSxDQUFDLGlGQUFpRixFQUFDO1lBQ2pGLE1BQU0sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQzdELENBQUMsQ0FBQyxDQUFBO1FBQ0YsRUFBRSxDQUFDLDhEQUE4RCxFQUFDO1lBQzlELGFBQWEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDcEMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUNwQyxhQUFhLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQ3BDLE1BQU0sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFD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