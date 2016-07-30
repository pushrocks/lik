"use strict";
const plugins = require("./lik.plugins");
class Stringmap {
    constructor() {
        this._stringArray = [];
        this._triggerUntilTrueFunctionArray = [];
    }
    ;
    /**
     * add a string to the Stringmap
     */
    addString(stringArg) {
        this._stringArray.push(stringArg);
        this.notifyTrigger();
    }
    ;
    /**
     * removes a string from Stringmap
     */
    removeString(stringArg) {
        for (let keyArg in this._stringArray) {
            if (this._stringArray[keyArg] === stringArg) {
                this._stringArray.splice(parseInt(keyArg), 1);
            }
            ;
        }
        ;
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
        return this._stringArray.indexOf(stringArg) != -1;
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
            ;
        }
        ;
        return foundMatch;
    }
    ;
    /**
     * checks if the Stringmap is empty
     */
    checkIsEmpty() {
        return (this._stringArray.length === 0);
    }
    // trigger registering
    /**
     * notifies triggers
     */
    notifyTrigger() {
        let filteredArray = this._triggerUntilTrueFunctionArray.filter((functionArg) => {
            return !functionArg();
        });
        this._triggerUntilTrueFunctionArray = filteredArray;
    }
    ;
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
}
exports.Stringmap = Stringmap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrLnN0cmluZ21hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2xpay5zdHJpbmdtYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQVksT0FBTyxXQUFNLGVBQWUsQ0FBQyxDQUFBO0FBVXpDO0lBR0k7UUFGUSxpQkFBWSxHQUFZLEVBQUUsQ0FBQztRQUMzQixtQ0FBOEIsR0FBcUIsRUFBRSxDQUFDO0lBRzlELENBQUM7O0lBQ0Q7O09BRUc7SUFDSCxTQUFTLENBQUMsU0FBZ0I7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7O0lBRUQ7O09BRUc7SUFDSCxZQUFZLENBQUMsU0FBZ0I7UUFDekIsR0FBRyxDQUFDLENBQUMsSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBLENBQUM7WUFDbEMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQSxDQUFDO2dCQUN4QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakQsQ0FBQztZQUFBLENBQUM7UUFDTixDQUFDO1FBQUEsQ0FBQztRQUNGLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJO1FBQ0EsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7T0FFRztJQUNILFdBQVcsQ0FBQyxTQUFnQjtRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsY0FBYyxDQUFDLGtCQUF5QjtRQUNwQyxJQUFJLFVBQVUsR0FBVyxLQUFLLENBQUM7UUFDL0IsR0FBRyxDQUFBLENBQUMsSUFBSSxVQUFVLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBLENBQUM7WUFDckMsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQ2pELFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdEIsQ0FBQztZQUFBLENBQUM7UUFDTixDQUFDO1FBQUEsQ0FBQztRQUNGLE1BQU0sQ0FBQyxVQUFVLENBQUM7SUFDdEIsQ0FBQzs7SUFFRDs7T0FFRztJQUNILFlBQVk7UUFDUixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsc0JBQXNCO0lBRXRCOztPQUVHO0lBQ0ssYUFBYTtRQUNqQixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsOEJBQThCLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVztZQUN2RSxNQUFNLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyw4QkFBOEIsR0FBRyxhQUFhLENBQUM7SUFDeEQsQ0FBQzs7SUFFRDs7T0FFRztJQUNILGlCQUFpQixDQUFDLFdBQTJCLEVBQUMsYUFBYTtRQUN2RCxJQUFJLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUNwQztZQUNJLElBQUksTUFBTSxHQUFHLFdBQVcsRUFBRSxDQUFDO1lBQzNCLEVBQUUsQ0FBQSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUNoQixhQUFhLEVBQUUsQ0FBQztZQUNwQixDQUFDO1lBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNsQixDQUFDLENBQ0osQ0FBQztRQUNGLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0FBQ0wsQ0FBQztBQXhGWSxpQkFBUyxZQXdGckIsQ0FBQSJ9