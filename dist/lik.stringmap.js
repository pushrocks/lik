"use strict";
/**
 * allows you to easily keep track of a bunch of strings;
 */
class Stringmap {
    constructor() {
        this._stringArray = [];
    }
    ;
    /**
     * add a string to the Stringmap
     */
    addString(stringArg) {
        this._stringArray.push(stringArg);
    }
    ;
    /**
     * removes a string from Stringmap
     */
    removeString(stringArg) {
        for (let keyArg in this._stringArray) {
            if (this._stringArray[keyArg] == stringArg) {
                this._stringArray.splice(parseInt(keyArg), 1);
            }
            ;
        }
    }
    /**
     * check if string is in Stringmap
     */
    checkString(stringArg) {
        return this._stringArray.indexOf(stringArg) != -1;
    }
}
exports.Stringmap = Stringmap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrLnN0cmluZ21hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2xpay5zdHJpbmdtYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBOztHQUVHO0FBQ0g7SUFFSTtRQURRLGlCQUFZLEdBQVksRUFBRSxDQUFDO0lBR25DLENBQUM7O0lBQ0Q7O09BRUc7SUFDSCxTQUFTLENBQUMsU0FBZ0I7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7SUFFRDs7T0FFRztJQUNILFlBQVksQ0FBQyxTQUFnQjtRQUN6QixHQUFHLENBQUMsQ0FBQyxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUEsQ0FBQztZQUNsQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFBLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztZQUNqRCxDQUFDO1lBQUEsQ0FBQztRQUNOLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxXQUFXLENBQUMsU0FBZ0I7UUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7QUFDTCxDQUFDO0FBN0JZLGlCQUFTLFlBNkJyQixDQUFBIn0=