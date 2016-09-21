"use strict";
require("typings-test");
const lik = require("../dist/index");
const should = require("should");
describe('lik', function () {
    describe('Stringmap', function () {
        let testStringmap;
        let testString1 = 'testString1';
        let testString2 = 'testString2';
        let testString3 = 'testString3';
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUNyQixxQ0FBcUM7QUFDckMsaUNBQWdDO0FBRWhDLFFBQVEsQ0FBQyxLQUFLLEVBQUM7SUFDWCxRQUFRLENBQUMsV0FBVyxFQUFDO1FBQ2pCLElBQUksYUFBNEIsQ0FBQTtRQUNoQyxJQUFJLFdBQVcsR0FBRyxhQUFhLENBQUE7UUFDL0IsSUFBSSxXQUFXLEdBQUcsYUFBYSxDQUFBO1FBQy9CLElBQUksV0FBVyxHQUFHLGFBQWEsQ0FBQTtRQUMvQixFQUFFLENBQUMsd0NBQXdDLEVBQUM7WUFDeEMsYUFBYSxHQUFHLElBQUksR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFBO1lBQ25DLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUN0RCxDQUFDLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQyxvREFBb0QsRUFBQztZQUNwRCxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUM3RCxDQUFDLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQyxtQ0FBbUMsRUFBQztZQUNuQyxhQUFhLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQ3BDLGFBQWEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDcEMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUNwQyxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUN4RCxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVB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