"use strict";
require("typings-test");
const lik = require("../dist/index");
require("should");
describe("lik", function () {
    describe("Stringmap", function () {
        let testStringmap;
        let testString1 = "testString1";
        let testString2 = "testString2";
        let testString3 = "testString3";
        it("should create an instance of Stringmap", function () {
            testStringmap = new lik.Stringmap();
            testStringmap.should.be.instanceof(lik.Stringmap);
        });
        it("should return false for an string not in Stringmap", function () {
            testStringmap.checkString(testString1).should.be.false();
        });
        it("should add an string to Stringmap", function () {
            testStringmap.addString(testString1);
            testStringmap.addString(testString2);
            testStringmap.addString(testString3);
            testStringmap.checkString(testString1).should.be.true();
            testStringmap.checkString(testString2).should.be.true();
            testStringmap.checkString(testString3).should.be.true();
            testStringmap.checkMinimatch("*String1").should.be.true();
            testStringmap.checkMinimatch("*String2").should.be.true();
            testStringmap.checkMinimatch("*String4").should.be.false();
        });
        it("should remove a string from Stringmap", function () {
            testStringmap.removeString(testString2);
            testStringmap.checkString(testString2).should.be.false();
        });
        it("should register a function to trigger when empty", function () {
            testStringmap.registerUntilTrue(() => { return testStringmap.checkIsEmpty(); }, () => { console.log("Stringmap now is empty"); });
        });
        it("should remove wipe and then notify", function () {
            testStringmap.wipe();
        });
    });
    describe("Objectmap", function () {
        let testObjectmap;
        let testObject1 = {
            propOne: "hello",
            propTwo: "hello2"
        };
        let testObject2 = {
            propOne: "hello",
            propTwo: "hello2"
        };
        it("should correctly instantiate an Objectmap", function () {
            testObjectmap = new lik.Objectmap();
            testObjectmap.should.be.instanceof(lik.Objectmap);
        });
        it("should correctly add an object to Objectmap", function () {
            testObjectmap.add(testObject1);
            testObjectmap.checkForObject(testObject1).should.be.true;
            testObjectmap.checkForObject(testObject2).should.be.false;
        });
        it("should correctly remove an object to Objectmap", function () {
            testObjectmap.add(testObject2);
            testObjectmap.remove(testObject1);
            testObjectmap.checkForObject(testObject1).should.be.false;
            testObjectmap.checkForObject(testObject2).should.be.true;
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sY0FBYyxDQUFDLENBQUE7QUFDdEIsTUFBTyxHQUFHLFdBQVcsZUFBZSxDQUFDLENBQUM7QUFDdEMsUUFBTyxRQUFRLENBQUMsQ0FBQTtBQUVoQixRQUFRLENBQUMsS0FBSyxFQUFDO0lBQ1gsUUFBUSxDQUFDLFdBQVcsRUFBQztRQUNqQixJQUFJLGFBQTJCLENBQUM7UUFDaEMsSUFBSSxXQUFXLEdBQUcsYUFBYSxDQUFDO1FBQ2hDLElBQUksV0FBVyxHQUFHLGFBQWEsQ0FBQztRQUNoQyxJQUFJLFdBQVcsR0FBRyxhQUFhLENBQUM7UUFDaEMsRUFBRSxDQUFDLHdDQUF3QyxFQUFDO1lBQ3hDLGFBQWEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNwQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLG9EQUFvRCxFQUFDO1lBQ3BELGFBQWEsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3RCxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQyxtQ0FBbUMsRUFBQztZQUNuQyxhQUFhLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3JDLGFBQWEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNyQyxhQUFhLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDeEQsYUFBYSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FB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