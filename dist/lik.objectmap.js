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
        return this.objectArray.indexOf(objectArg !== -1);
    }
    ;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrLm9iamVjdG1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2xpay5vYmplY3RtYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQU9BOztHQUVHO0FBQ0g7SUFHSTs7T0FFRztJQUNIO1FBTFEsZ0JBQVcsR0FBRyxFQUFFLENBQUM7SUFPekIsQ0FBQzs7SUFHRDs7T0FFRztJQUNILEdBQUcsQ0FBQyxTQUFTO1FBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7SUFFRDs7T0FFRztJQUNILE1BQU0sQ0FBQyxTQUFTO1FBQ1osSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLEdBQUcsQ0FBQSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQSxDQUFDO1lBQzlCLEVBQUUsQ0FBQSxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQSxDQUFDO2dCQUNuQixlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9CLENBQUM7UUFDTCxDQUFDO1FBQUEsQ0FBQztRQUNGLElBQUksQ0FBQyxXQUFXLEdBQUcsZUFBZSxDQUFDO0lBQ3ZDLENBQUM7O0lBRUQ7O09BRUc7SUFDSCxjQUFjLENBQUMsU0FBUztRQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDckQsQ0FBQzs7SUFFRDs7T0FFRztJQUNILE9BQU8sQ0FBQyxXQUE2QjtRQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSTtRQUNBLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7QUFDTCxDQUFDO0FBbkRZLGlCQUFTLFlBbURyQixDQUFBIn0=