"use strict";
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
     * remove object from Objectmap
     */
    remove(objectArg) {
        let replacmentArray = [];
        for (let item of this.objectArray) {
            if (item !== objectArg) {
                replacmentArray.push(item);
            }
        }
        this.objectArray = replacmentArray;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrLm9iamVjdG1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2xpay5vYmplY3RtYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVVBOztHQUVHO0FBQ0g7SUFHSTs7T0FFRztJQUNIO1FBTFEsZ0JBQVcsR0FBUSxFQUFFLENBQUE7SUFPN0IsQ0FBQztJQUVEOztPQUVHO0lBQ0gsR0FBRyxDQUFDLFNBQVk7UUFDWixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUNwQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRLENBQUMsY0FBbUI7UUFDeEIsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2xCLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNLENBQUMsU0FBWTtRQUNmLElBQUksZUFBZSxHQUFHLEVBQUUsQ0FBQTtRQUN4QixHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNoQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDckIsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUM5QixDQUFDO1FBQ0wsQ0FBQztRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFBO0lBQ3RDLENBQUM7SUFFRDs7T0FFRztJQUNILGNBQWMsQ0FBQyxTQUFZO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUNyRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLENBQUMsWUFBdUM7UUFDeEMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDdkQsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDekIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLElBQUksQ0FBQTtRQUNmLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxPQUFPLENBQUMsV0FBeUM7UUFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFFRDs7T0FFRztJQUNILElBQUk7UUFDQSxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQTtJQUN6QixDQUFDO0NBQ0o7QUF2RUQsOEJBdUVDIn0=