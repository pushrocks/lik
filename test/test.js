"use strict";
require("typings-test");
const events = require("events");
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
        it('should create an instance of Stringmap', function () {
            testStringmap = new lik.Stringmap();
            should(testStringmap).be.instanceof(lik.Stringmap);
        });
        it('should return false for an string not in Stringmap', function () {
            should(testStringmap.checkString(testString1)).be.false();
        });
        it('should add an string to Stringmap', function () {
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
        it('should add an array of strings', function () {
            testStringmap.addStringArray([testString4, testString5, testString6]);
            should(testStringmap.checkMinimatch('*String4')).be.true();
        });
        it('should remove a string from Stringmap', function () {
            testStringmap.removeString(testString2);
            should(testStringmap.checkString(testString2)).be.false();
        });
        it('should return a copy of stringArray', function () {
            let clonedArray = testStringmap.getStringArray();
            should(clonedArray[0] === 'testString1').be.true();
            should(clonedArray[0] === testString1).be.true();
        });
        it('should register a function to trigger when empty', function () {
            testStringmap.registerUntilTrue(() => { return testStringmap.checkIsEmpty(); }, () => { console.log('Stringmap now is empty'); });
        });
        it('should remove wipe and then notify', function () {
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
        it('should correctly instantiate an Objectmap', function () {
            testObjectmap = new lik.Objectmap();
            should(testObjectmap).be.instanceof(lik.Objectmap);
        });
        it('should correctly add an object to Objectmap', function () {
            testObjectmap.add(testObject1);
            should(testObjectmap.checkForObject(testObject1)).be.true;
            should(testObjectmap.checkForObject(testObject2)).be.false;
        });
        it('should correctly remove an object to Objectmap', function () {
            testObjectmap.add(testObject2);
            testObjectmap.remove(testObject1);
            should(testObjectmap.checkForObject(testObject1)).be.false;
            should(testObjectmap.checkForObject(testObject2)).be.true;
        });
        it('should correctly run a function forEach map object', function () {
            testObjectmap.forEach(itemArg => {
                should(itemArg).have.ownProperty('propOne');
            });
        });
        it('should correctly find an object', function () {
            let myObject = { propOne: 'helloThere', propTwo: 'helloAnyway' };
            testObjectmap.add(myObject);
            let referenceObject = testObjectmap.find((itemArg) => { return (itemArg.propOne === 'helloThere'); });
            should(myObject === referenceObject).be.true();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUNyQixpQ0FBZ0M7QUFFaEMsaUNBQWdDO0FBRWhDLHFDQUFxQztBQUNyQyxRQUFRLENBQUMsS0FBSyxFQUFDO0lBQ1gsUUFBUSxDQUFDLFdBQVcsRUFBQztRQUNqQixJQUFJLGFBQTRCLENBQUE7UUFDaEMsSUFBSSxXQUFXLEdBQUcsYUFBYSxDQUFBO1FBQy9CLElBQUksV0FBVyxHQUFHLGFBQWEsQ0FBQTtRQUMvQixJQUFJLFdBQVcsR0FBRyxhQUFhLENBQUE7UUFDL0IsSUFBSSxXQUFXLEdBQUcsYUFBYSxDQUFBO1FBQy9CLElBQUksV0FBVyxHQUFHLGFBQWEsQ0FBQTtRQUMvQixJQUFJLFdBQVcsR0FBRyxhQUFhLENBQUE7UUFDL0IsRUFBRSxDQUFDLHdDQUF3QyxFQUFDO1lBQ3hDLGFBQWEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtZQUNuQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDdEQsQ0FBQyxDQUFDLENBQUE7UUFDRixFQUFFLENBQUMsb0RBQW9ELEVBQUM7WUFDcEQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDN0QsQ0FBQyxDQUFDLENBQUE7UUFDRixFQUFFLENBQUMsbUNBQW1DLEVBQUM7WUFDbkMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUNwQyxhQUFhLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQ3BDLGFBQWEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDcEMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENB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