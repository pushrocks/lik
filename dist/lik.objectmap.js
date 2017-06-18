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
        // nothing here
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrLm9iamVjdG1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2xpay5vYmplY3RtYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBd0M7QUFVeEM7O0dBRUc7QUFDSDtJQUdFOztPQUVHO0lBQ0g7UUFMUSxnQkFBVyxHQUFRLEVBQUUsQ0FBQTtRQU0zQixlQUFlO0lBQ2pCLENBQUM7SUFFRDs7T0FFRztJQUNILEdBQUcsQ0FBRSxTQUFZO1FBQ2YsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUSxDQUFFLGNBQW1CO1FBQzNCLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNoQixDQUFDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsY0FBYyxDQUFFLFNBQVk7UUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0lBQ25ELENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksQ0FBRSxZQUF1QztRQUMzQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUN2RCxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsTUFBTSxDQUFDLFdBQVcsQ0FBRSxDQUFDLENBQUUsQ0FBQTtRQUN6QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFBO1FBQ2IsQ0FBQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILGdCQUFnQixDQUFFLFlBQXVDO1FBQ3ZELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDMUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQzNCLENBQUM7UUFDRCxNQUFNLENBQUMsWUFBWSxDQUFBO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNILE9BQU8sQ0FBRSxXQUF5QztRQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDOUMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZUFBZTtRQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2pDLENBQUM7SUFFRDs7T0FFRztJQUNILFFBQVE7UUFDTixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ25ELENBQUM7SUFFRDs7T0FFRztJQUNILE9BQU87UUFDTCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUE7UUFDYixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsS0FBSyxDQUFBO1FBQ2QsQ0FBQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILE1BQU0sQ0FBRSxTQUFZO1FBQ2xCLElBQUksZ0JBQWdCLEdBQUcsRUFBRSxDQUFBO1FBQ3pCLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDN0IsQ0FBQztRQUNILENBQUM7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLGdCQUFnQixDQUFBO0lBQ3JDLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUk7UUFDRixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0NBQ0Y7QUEzR0QsOEJBMkdDIn0=