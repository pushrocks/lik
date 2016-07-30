"use strict";
/**
 * allows keeping track of objects
 */
class Objectmap {
    constructor() {
        this.objectArray = [];
    }
    add(objectArg) {
        this.objectArray.push(objectArg);
    }
    ;
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
    checkForObject(objectArg) {
        return this.objectArray.indexOf(objectArg !== -1);
    }
    ;
    wipe() {
        this.objectArray = [];
    }
}
exports.Objectmap = Objectmap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrLm9iamVjdG1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2xpay5vYmplY3RtYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBOztHQUVHO0FBQ0g7SUFBQTtRQUNZLGdCQUFXLEdBQUcsRUFBRSxDQUFDO0lBbUI3QixDQUFDO0lBbEJHLEdBQUcsQ0FBQyxTQUFTO1FBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7SUFDRCxNQUFNLENBQUMsU0FBUztRQUNaLElBQUksZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUN6QixHQUFHLENBQUEsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUEsQ0FBQztZQUM5QixFQUFFLENBQUEsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUEsQ0FBQztnQkFDbkIsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixDQUFDO1FBQ0wsQ0FBQztRQUFBLENBQUM7UUFDRixJQUFJLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQztJQUN2QyxDQUFDOztJQUNELGNBQWMsQ0FBQyxTQUFTO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNyRCxDQUFDOztJQUNELElBQUk7UUFDQSxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0FBQ0wsQ0FBQztBQXBCWSxpQkFBUyxZQW9CckIsQ0FBQSJ9