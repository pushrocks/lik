"use strict";
;
;
/**
 * allows keeping track of objects
 */
class Objectmap {
    /**
     * returns a new instance
     */
    constructor() {
        this.objectArray = [];
    }
    ;
    /**
     * add object to Objectmap
     */
    add(objectArg) {
        this.objectArray.push(objectArg);
    }
    ;
    /**
     * remove object from Objectmap
     */
    remove(objectArg) {
        let replacmentArray = [];
        for (let item of this.objectArray) {
            if (item !== objectArg) {
                replacmentArray.push(item);
            }
        }
        ;
        this.objectArray = replacmentArray;
    }
    ;
    /**
     * check if object is in Objectmap
     */
    checkForObject(objectArg) {
        return this.objectArray.indexOf(objectArg !== -1);
    }
    ;
    /**
     * find object
     */
    find(findFunction) {
        let resultArray = this.objectArray.filter(findFunction);
        if (resultArray.length > 0) {
            return resultArray[0];
        }
        ;
    }
    /**
     * run function for each item in Objectmap
     */
    forEach(functionArg) {
        return this.objectArray.forEach(functionArg);
    }
    /**
     * wipe Objectmap
     */
    wipe() {
        this.objectArray = [];
    }
}
exports.Objectmap = Objectmap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrLm9iamVjdG1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2xpay5vYmplY3RtYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUtDLENBQUM7QUFJRCxDQUFDO0FBR0Y7O0dBRUc7QUFDSDtJQUdJOztPQUVHO0lBQ0g7UUFMUSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztJQU96QixDQUFDOztJQUdEOztPQUVHO0lBQ0gsR0FBRyxDQUFDLFNBQVM7UUFDVCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDOztJQUVEOztPQUVHO0lBQ0gsTUFBTSxDQUFDLFNBQVM7UUFDWixJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDekIsR0FBRyxDQUFBLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBLENBQUM7WUFDOUIsRUFBRSxDQUFBLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFBLENBQUM7Z0JBQ25CLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsQ0FBQztRQUNMLENBQUM7UUFBQSxDQUFDO1FBQ0YsSUFBSSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUM7SUFDdkMsQ0FBQzs7SUFFRDs7T0FFRztJQUNILGNBQWMsQ0FBQyxTQUFTO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNyRCxDQUFDOztJQUdEOztPQUVHO0lBQ0gsSUFBSSxDQUFDLFlBQW1DO1FBQ3BDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hELEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUN4QixNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFCLENBQUM7UUFBQSxDQUFDO0lBQ04sQ0FBQztJQUdEOztPQUVHO0lBQ0gsT0FBTyxDQUFDLFdBQXFDO1FBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJO1FBQ0EsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztBQUNMLENBQUM7QUEvRFksaUJBQVMsWUErRHJCLENBQUEifQ==