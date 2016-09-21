"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrLnN0cmluZ21hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2xpay5zdHJpbmdtYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlDQUF3QztBQVV4QztJQUdJO1FBRlEsaUJBQVksR0FBYSxFQUFFLENBQUE7UUFDM0IsbUNBQThCLEdBQXVCLEVBQUUsQ0FBQTtJQUNoRCxDQUFDO0lBQ2hCOztPQUVHO0lBQ0gsU0FBUyxDQUFDLFNBQWlCO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxjQUFjLENBQUMsY0FBd0I7UUFDbkMsR0FBRyxDQUFDLENBQUMsSUFBSSxVQUFVLElBQUksY0FBYyxDQUFDLENBQUEsQ0FBQztZQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQzlCLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxZQUFZLENBQUMsU0FBaUI7UUFDMUIsR0FBRyxDQUFDLENBQUMsSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDbkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUE7WUFDaEQsQ0FBQztRQUNMLENBQUM7UUFDRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSTtRQUNBLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFBO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxXQUFXLENBQUMsU0FBaUI7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0lBQ3RELENBQUM7SUFFRDs7T0FFRztJQUNILGNBQWMsQ0FBQyxrQkFBMEI7UUFDckMsSUFBSSxVQUFVLEdBQVksS0FBSyxDQUFBO1FBQy9CLEdBQUcsQ0FBQyxDQUFDLElBQUksVUFBVSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQSxDQUFDO1lBQ3RDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuRCxVQUFVLEdBQUcsSUFBSSxDQUFBO1lBQ3JCLENBQUM7UUFDTCxDQUFDO1FBQ0QsTUFBTSxDQUFDLFVBQVUsQ0FBQTtJQUNyQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxZQUFZO1FBQ1IsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUE7SUFDM0MsQ0FBQztJQUVEOztPQUVHO0lBQ0gsY0FBYztRQUNWLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDdEQsQ0FBQztJQUVELHNCQUFzQjtJQUV0Qjs7T0FFRztJQUNILGlCQUFpQixDQUFDLFdBQTZCLEVBQUMsYUFBYTtRQUN6RCxJQUFJLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUNwQztZQUNJLElBQUksTUFBTSxHQUFHLFdBQVcsRUFBRSxDQUFBO1lBQzFCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixhQUFhLEVBQUUsQ0FBQTtZQUNuQixDQUFDO1lBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQTtRQUNqQixDQUFDLENBQ0osQ0FBQTtRQUNELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDO0lBRUQ7O09BRUc7SUFDSyxhQUFhO1FBQ2pCLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXO1lBQ3ZFLE1BQU0sQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ3pCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLDhCQUE4QixHQUFHLGFBQWEsQ0FBQTtJQUN2RCxDQUFDO0NBRUo7QUF2R0QsOEJBdUdDIn0=