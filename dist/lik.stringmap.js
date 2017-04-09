"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./lik.plugins");
class Stringmap {
    constructor() {
        this._stringArray = [];
        this._triggerUntilTrueFunctionArray = [];
    }
    /**
     * add a string to the Stringmap
     */
    addString(stringArg) {
        this._stringArray.push(stringArg);
        this.notifyTrigger();
    }
    /**
     * like addString, but accepts an array of strings
     */
    addStringArray(stringArrayArg) {
        for (let stringItem of stringArrayArg) {
            this.addString(stringItem);
        }
    }
    /**
     * removes a string from Stringmap
     */
    removeString(stringArg) {
        for (let keyArg in this._stringArray) {
            if (this._stringArray[keyArg] === stringArg) {
                this._stringArray.splice(parseInt(keyArg), 1);
            }
        }
        this.notifyTrigger();
    }
    /**
     * wipes the Stringmap
     */
    wipe() {
        this._stringArray = [];
        this.notifyTrigger();
    }
    /**
     * check if string is in Stringmap
     */
    checkString(stringArg) {
        return this._stringArray.indexOf(stringArg) !== -1;
    }
    /**
     * checks stringPresence with minimatch
     */
    checkMinimatch(miniMatchStringArg) {
        let foundMatch = false;
        for (let stringItem of this._stringArray) {
            if (plugins.minimatch(stringItem, miniMatchStringArg)) {
                foundMatch = true;
            }
        }
        return foundMatch;
    }
    /**
     * checks if the Stringmap is empty
     */
    checkIsEmpty() {
        return (this._stringArray.length === 0);
    }
    /**
     * gets a cloned copy of the current string Array
     */
    getStringArray() {
        return plugins.lodash.cloneDeep(this._stringArray);
    }
    // trigger registering
    /**
     * register a new trigger
     */
    registerUntilTrue(functionArg, doFunctionArg) {
        this._triggerUntilTrueFunctionArray.push(() => {
            let result = functionArg();
            if (result === true) {
                doFunctionArg();
            }
            return result;
        });
        this.notifyTrigger();
    }
    /**
     * notifies triggers
     */
    notifyTrigger() {
        let filteredArray = this._triggerUntilTrueFunctionArray.filter((functionArg) => {
            return !functionArg();
        });
        this._triggerUntilTrueFunctionArray = filteredArray;
    }
}
exports.Stringmap = Stringmap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrLnN0cmluZ21hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2xpay5zdHJpbmdtYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBd0M7QUFVeEM7SUFHSTtRQUZRLGlCQUFZLEdBQWEsRUFBRSxDQUFBO1FBQzNCLG1DQUE4QixHQUF1QixFQUFFLENBQUE7SUFDaEQsQ0FBQztJQUNoQjs7T0FFRztJQUNILFNBQVMsQ0FBQyxTQUFpQjtRQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUNqQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsY0FBYyxDQUFDLGNBQXdCO1FBQ25DLEdBQUcsQ0FBQyxDQUFDLElBQUksVUFBVSxJQUFJLGNBQWMsQ0FBQyxDQUFBLENBQUM7WUFDbkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUM5QixDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsWUFBWSxDQUFDLFNBQWlCO1FBQzFCLEdBQUcsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ25DLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ2hELENBQUM7UUFDTCxDQUFDO1FBQ0QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3hCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUk7UUFDQSxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQTtRQUN0QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVyxDQUFDLFNBQWlCO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUN0RCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxjQUFjLENBQUMsa0JBQTBCO1FBQ3JDLElBQUksVUFBVSxHQUFZLEtBQUssQ0FBQTtRQUMvQixHQUFHLENBQUMsQ0FBQyxJQUFJLFVBQVUsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUEsQ0FBQztZQUN0QyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkQsVUFBVSxHQUFHLElBQUksQ0FBQTtZQUNyQixDQUFDO1FBQ0wsQ0FBQztRQUNELE1BQU0sQ0FBQyxVQUFVLENBQUE7SUFDckIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsWUFBWTtRQUNSLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFBO0lBQzNDLENBQUM7SUFFRDs7T0FFRztJQUNILGNBQWM7UUFDVixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ3RELENBQUM7SUFFRCxzQkFBc0I7SUFFdEI7O09BRUc7SUFDSCxpQkFBaUIsQ0FBQyxXQUE2QixFQUFDLGFBQWE7UUFDekQsSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FDcEM7WUFDSSxJQUFJLE1BQU0sR0FBRyxXQUFXLEVBQUUsQ0FBQTtZQUMxQixFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDbEIsYUFBYSxFQUFFLENBQUE7WUFDbkIsQ0FBQztZQUNELE1BQU0sQ0FBQyxNQUFNLENBQUE7UUFDakIsQ0FBQyxDQUNKLENBQUE7UUFDRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQztJQUVEOztPQUVHO0lBQ0ssYUFBYTtRQUNqQixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsOEJBQThCLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVztZQUN2RSxNQUFNLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUN6QixDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyw4QkFBOEIsR0FBRyxhQUFhLENBQUE7SUFDdkQsQ0FBQztDQUVKO0FBdkdELDhCQXVHQyJ9