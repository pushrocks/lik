"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lik_objectmap_1 = require("./lik.objectmap");
class LoopTracker {
    constructor() {
        this.referenceObjectMap = new lik_objectmap_1.Objectmap();
        // nothing here
    }
    /**
     * checks and tracks an object
     * @param objectArg
     */
    checkAndTrack(objectArg) {
        return this.referenceObjectMap.add(objectArg);
    }
}
exports.LoopTracker = LoopTracker;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrLmxvb3B0cmFja2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvbGlrLmxvb3B0cmFja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsbURBQTJDO0FBRTNDO0lBRUU7UUFEQSx1QkFBa0IsR0FBRyxJQUFJLHlCQUFTLEVBQU8sQ0FBQTtRQUV2QyxlQUFlO0lBQ2pCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxhQUFhLENBQUUsU0FBWTtRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUMvQyxDQUFDO0NBQ0Y7QUFiRCxrQ0FhQyJ9