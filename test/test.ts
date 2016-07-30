import "typings-test";
import lik = require("../dist/index");
import "should";

describe("lik",function(){
    describe("Stringmap",function(){
        let testStringmap:lik.Stringmap;
        let testString1 = "testString1";
        let testString2 = "testString2";
        let testString3 = "testString3";
        it("should create an instance of Stringmap",function(){
            testStringmap = new lik.Stringmap();
            testStringmap.should.be.instanceof(lik.Stringmap);
        });
        it("should return false for an string not in Stringmap",function(){
            testStringmap.checkString(testString1).should.be.false();
        });
        it("should add an string to Stringmap",function(){
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
        it("should remove a string from Stringmap",function(){
            testStringmap.removeString(testString2);
            testStringmap.checkString(testString2).should.be.false();
        });
        it("should register a function to trigger when empty",function(){
            testStringmap.registerUntilTrue(
                () => {return testStringmap.checkIsEmpty()},
                () => {console.log("Stringmap now is empty")}
            );
        });
        it("should remove wipe and then notify",function(){
            testStringmap.wipe();
        })
    });
    describe("Objectmap",function(){
        interface ITestObject {
            propOne:string;
            propTwo:string;
        }
        let testObjectmap:lik.Objectmap;
        let testObject1:ITestObject = {
            propOne: "hello",
            propTwo: "hello2"
        };
        let testObject2:ITestObject = {
            propOne: "hello",
            propTwo: "hello2"
        };
        it("should correctly instantiate an Objectmap",function(){
            testObjectmap = new lik.Objectmap();
            testObjectmap.should.be.instanceof(lik.Objectmap);
        });
        it("should correctly add an object to Objectmap",function(){
            testObjectmap.add(testObject1);
            testObjectmap.checkForObject(testObject1).should.be.true;
            testObjectmap.checkForObject(testObject2).should.be.false;
        });
        it("should correctly remove an object to Objectmap",function(){
            testObjectmap.add(testObject2);
            testObjectmap.remove(testObject1);
            testObjectmap.checkForObject(testObject1).should.be.false;
            testObjectmap.checkForObject(testObject2).should.be.true;
        });
    })
});