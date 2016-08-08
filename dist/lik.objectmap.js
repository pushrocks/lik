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
        return this.objectArray.indexOf(objectArg) !== -1;
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
        else {
            return undefined;
        }
        ;
    }
    /**
     * run function for each item in Objectmap
     */
    forEach(functionArg) {
        return this.objectArray.forEach(functionArg);
    }
    ;
    /**
     * wipe Objectmap
     */
    wipe() {
        this.objectArray = [];
    }
}
exports.Objectmap = Objectmap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrLm9iamVjdG1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2xpay5vYmplY3RtYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUtDLENBQUM7QUFJRCxDQUFDO0FBR0Y7O0dBRUc7QUFDSDtJQUdJOztPQUVHO0lBQ0g7UUFMUSxnQkFBVyxHQUFPLEVBQUUsQ0FBQztJQU83QixDQUFDOztJQUdEOztPQUVHO0lBQ0gsR0FBRyxDQUFDLFNBQVc7UUFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDOztJQUVEOztPQUVHO0lBQ0gsTUFBTSxDQUFDLFNBQVc7UUFDZCxJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDekIsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDaEMsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsQ0FBQztRQUNMLENBQUM7UUFBQSxDQUFDO1FBQ0YsSUFBSSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUM7SUFDdkMsQ0FBQzs7SUFFRDs7T0FFRztJQUNILGNBQWMsQ0FBQyxTQUFXO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUNyRCxDQUFDOztJQUdEOztPQUVHO0lBQ0gsSUFBSSxDQUFDLFlBQXVDO1FBQ3hDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hELEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDckIsQ0FBQztRQUFBLENBQUM7SUFDTixDQUFDO0lBR0Q7O09BRUc7SUFDSCxPQUFPLENBQUMsV0FBeUM7UUFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pELENBQUM7O0lBRUQ7O09BRUc7SUFDSCxJQUFJO1FBQ0EsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztBQUNMLENBQUM7QUFqRVksaUJBQVMsWUFpRXJCLENBQUEifQ==