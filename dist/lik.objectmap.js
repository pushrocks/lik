"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
     * returns false if the object is already in the map
     * returns true if the object was added successfully
     */
    add(objectArg) {
        if (this.checkForObject(objectArg)) {
            // the object is already in the objectmap
            return false;
        }
        else {
            // the object is not yet in the objectmap
            this.objectArray.push(objectArg);
            return true;
        }
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
        return __awaiter(this, void 0, void 0, function* () {
            for (let object of this.objectArray) {
                yield functionArg(object);
            }
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrLm9iamVjdG1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2xpay5vYmplY3RtYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHlDQUF3QztBQVV4Qzs7R0FFRztBQUNIO0lBR0U7O09BRUc7SUFDSDtRQUxRLGdCQUFXLEdBQVEsRUFBRSxDQUFBO1FBTTNCLGVBQWU7SUFDakIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxHQUFHLENBQUUsU0FBWTtRQUNmLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25DLHlDQUF5QztZQUN6QyxNQUFNLENBQUMsS0FBSyxDQUFBO1FBQ2QsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04seUNBQXlDO1lBQ3pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUE7UUFDYixDQUFDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUSxDQUFFLGNBQW1CO1FBQzNCLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNoQixDQUFDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsY0FBYyxDQUFFLFNBQVk7UUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0lBQ25ELENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksQ0FBRSxZQUF1QztRQUMzQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUN2RCxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsTUFBTSxDQUFDLFdBQVcsQ0FBRSxDQUFDLENBQUUsQ0FBQTtRQUN6QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsSUFBSSxDQUFBO1FBQ2IsQ0FBQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILGdCQUFnQixDQUFFLFlBQXVDO1FBQ3ZELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDMUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQzNCLENBQUM7UUFDRCxNQUFNLENBQUMsWUFBWSxDQUFBO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNHLE9BQU8sQ0FBRSxXQUF5Qzs7WUFDdEQsR0FBRyxDQUFDLENBQUMsSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLE1BQU0sV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQzNCLENBQUM7UUFDSCxDQUFDO0tBQUE7SUFFRDs7T0FFRztJQUNILGVBQWU7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNqQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ04sTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUNuRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxPQUFPO1FBQ0wsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFBO1FBQ2IsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sTUFBTSxDQUFDLEtBQUssQ0FBQTtRQUNkLENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNLENBQUUsU0FBWTtRQUNsQixJQUFJLGdCQUFnQixHQUFHLEVBQUUsQ0FBQTtRQUN6QixHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNsQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQzdCLENBQUM7UUFDSCxDQUFDO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQTtJQUNyQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUE7SUFDdkIsQ0FBQztDQUNGO0FBdEhELDhCQXNIQyJ9