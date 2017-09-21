"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LimitedArray {
    constructor(limitArg) {
        this.array = [];
        this.arrayLimit = limitArg;
    }
    addOne(objectArg) {
        this.array.unshift(objectArg);
        if (this.array.length > this.arrayLimit) {
            this.array.length = this.arrayLimit;
        }
    }
    addMany(objectArrayArg) {
        for (let objectArg of objectArrayArg) {
            this.addOne(objectArg);
        }
    }
    setLimit(limitArg) {
        this.arrayLimit = limitArg;
        if (this.array.length > this.arrayLimit) {
            this.array.length = this.arrayLimit;
        }
    }
    getAverage() {
        if (typeof this.array[0] === 'number') {
            let sum = 0;
            for (let localNumber of this.array) {
                let localNumberAny = localNumber;
                sum = sum + localNumberAny;
            }
            return sum / this.array.length;
        }
        else {
            return null;
        }
    }
}
exports.LimitedArray = LimitedArray;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrLmxpbWl0ZWRhcnJheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL2xpay5saW1pdGVkYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUdFLFlBQVksUUFBZ0I7UUFGNUIsVUFBSyxHQUFRLEVBQUUsQ0FBQTtRQUdiLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFBO0lBQzVCLENBQUM7SUFFRCxNQUFNLENBQUUsU0FBWTtRQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUM3QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFBO1FBQ3JDLENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBTyxDQUFFLGNBQW1CO1FBQzFCLEdBQUcsQ0FBQyxDQUFDLElBQUksU0FBUyxJQUFJLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUN4QixDQUFDO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBRSxRQUFnQjtRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQTtRQUMxQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFBO1FBQ3JDLENBQUM7SUFDSCxDQUFDO0lBRUQsVUFBVTtRQUNSLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQTtZQUNYLEdBQUcsQ0FBQyxDQUFDLElBQUksV0FBVyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLGNBQWMsR0FBUSxXQUFXLENBQUE7Z0JBQ3JDLEdBQUcsR0FBRyxHQUFHLEdBQUcsY0FBYyxDQUFBO1lBQzVCLENBQUM7WUFDRCxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFBO1FBQ2hDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUE7UUFDYixDQUFDO0lBQ0gsQ0FBQztDQUVGO0FBeENELG9DQXdDQyJ9