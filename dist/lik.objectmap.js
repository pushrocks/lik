"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./lik.plugins");
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
    /**
     * add object to Objectmap
     */
    add(objectArg) {
        this.objectArray.push(objectArg);
    }
    /**
     * like .add but adds an whole array of objects
     */
    addArray(objectArrayArg) {
        for (let item of objectArrayArg) {
            this.add(item);
        }
    }
    /**
     * check if object is in Objectmap
     */
    checkForObject(objectArg) {
        return this.objectArray.indexOf(objectArg) !== -1;
    }
    /**
     * find object
     */
    find(findFunction) {
        let resultArray = this.objectArray.filter(findFunction);
        if (resultArray.length > 0) {
            return resultArray[0];
        }
        else {
            return null;
        }
    }
    /**
     * finds a specific element and then removes it
     */
    findOneAndRemove(findFunction) {
        let foundElement = this.find(findFunction);
        if (foundElement) {
            this.remove(foundElement);
        }
        return foundElement;
    }
    /**
     * run function for each item in Objectmap
     */
    forEach(functionArg) {
        return this.objectArray.forEach(functionArg);
    }
    /**
     * gets an object in the Observablemap and removes it, so it can't be retrieved again
     */
    getOneAndRemove() {
        return this.objectArray.shift();
    }
    /**
     * returns a cloned array of all the objects currently in the Objectmap
     */
    getArray() {
        return plugins.lodash.cloneDeep(this.objectArray);
    }
    /**
     * check if Objectmap ist empty
     */
    isEmpty() {
        if (this.objectArray.length === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * remove object from Objectmap
     */
    remove(objectArg) {
        let replacementArray = [];
        for (let item of this.objectArray) {
            if (item !== objectArg) {
                replacementArray.push(item);
            }
        }
        this.objectArray = replacementArray;
    }
    /**
     * wipe Objectmap
     */
    wipe() {
        this.objectArray = [];
    }
}
exports.Objectmap = Objectmap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrLm9iamVjdG1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2xpay5vYmplY3RtYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBd0M7QUFVeEM7O0dBRUc7QUFDSDtJQUdJOztPQUVHO0lBQ0g7UUFMUSxnQkFBVyxHQUFRLEVBQUUsQ0FBQTtJQU83QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxHQUFHLENBQUMsU0FBWTtRQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVEsQ0FBQyxjQUFtQjtRQUN4QixHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbEIsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNILGNBQWMsQ0FBQyxTQUFZO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUNyRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLENBQUMsWUFBdUM7UUFDeEMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDdkQsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDekIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLElBQUksQ0FBQTtRQUNmLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxnQkFBZ0IsQ0FBQyxZQUFZO1FBQ3pCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDMUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDN0IsQ0FBQztRQUNELE1BQU0sQ0FBQyxZQUFZLENBQUE7SUFDdkIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsT0FBTyxDQUFDLFdBQXlDO1FBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxlQUFlO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDbkMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUTtRQUNKLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDckQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsT0FBTztRQUNILEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQTtRQUNmLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxLQUFLLENBQUE7UUFDaEIsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU0sQ0FBQyxTQUFZO1FBQ2YsSUFBSSxnQkFBZ0IsR0FBRyxFQUFFLENBQUE7UUFDekIsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDaEMsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUMvQixDQUFDO1FBQ0wsQ0FBQztRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUE7SUFDdkMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSTtRQUNBLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFBO0lBQ3pCLENBQUM7Q0FDSjtBQTNHRCw4QkEyR0MifQ==