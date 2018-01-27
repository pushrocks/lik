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
        return this._stringArray.length === 0;
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
        let filteredArray = this._triggerUntilTrueFunctionArray.filter(functionArg => {
            return !functionArg();
        });
        this._triggerUntilTrueFunctionArray = filteredArray;
    }
}
exports.Stringmap = Stringmap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrLnN0cmluZ21hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2xpay5zdHJpbmdtYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBeUM7QUFVekM7SUFHRTtRQUZRLGlCQUFZLEdBQWEsRUFBRSxDQUFDO1FBQzVCLG1DQUE4QixHQUF1QixFQUFFLENBQUM7SUFDakQsQ0FBQztJQUNoQjs7T0FFRztJQUNILFNBQVMsQ0FBQyxTQUFpQjtRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsY0FBYyxDQUFDLGNBQXdCO1FBQ3JDLEdBQUcsQ0FBQyxDQUFDLElBQUksVUFBVSxJQUFJLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QixDQUFDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsWUFBWSxDQUFDLFNBQWlCO1FBQzVCLEdBQUcsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hELENBQUM7UUFDSCxDQUFDO1FBQ0QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUk7UUFDRixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVyxDQUFDLFNBQWlCO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxjQUFjLENBQUMsa0JBQTBCO1FBQ3ZDLElBQUksVUFBVSxHQUFZLEtBQUssQ0FBQztRQUNoQyxHQUFHLENBQUMsQ0FBQyxJQUFJLFVBQVUsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN6QyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEQsVUFBVSxHQUFHLElBQUksQ0FBQztZQUNwQixDQUFDO1FBQ0gsQ0FBQztRQUNELE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsWUFBWTtRQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsY0FBYztRQUNaLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELHNCQUFzQjtJQUV0Qjs7T0FFRztJQUNILGlCQUFpQixDQUFDLFdBQTZCLEVBQUUsYUFBYTtRQUM1RCxJQUFJLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUM1QyxJQUFJLE1BQU0sR0FBRyxXQUFXLEVBQUUsQ0FBQztZQUMzQixFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDcEIsYUFBYSxFQUFFLENBQUM7WUFDbEIsQ0FBQztZQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVEOztPQUVHO0lBQ0ssYUFBYTtRQUNuQixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsOEJBQThCLENBQUMsTUFBTSxDQUM1RCxXQUFXLENBQUMsRUFBRTtZQUNaLE1BQU0sQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FDRixDQUFDO1FBQ0YsSUFBSSxDQUFDLDhCQUE4QixHQUFHLGFBQWEsQ0FBQztJQUN0RCxDQUFDO0NBQ0Y7QUF0R0QsOEJBc0dDIn0=