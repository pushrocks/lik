"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./lik.plugins");
class Tree {
    constructor() {
        this.symbolTree = new plugins.symbolTree();
    }
    /**
     *
     * @param objectArg
     */
    initialize(objectArg) {
        return this.symbolTree.initialize(objectArg);
    }
    hasChildren(objectArg) {
        return this.symbolTree.hasChildren(objectArg);
    }
    firstChild(objectArg) {
        return this.symbolTree.firstChild(objectArg);
    }
    lastChild(objectArg) {
        return this.symbolTree.lastChild(objectArg);
    }
    previousSibling(objectArg) {
        return this.symbolTree.previousSibling(objectArg);
    }
    nextSibling(objectArg) {
        return this.symbolTree.nextSibling(objectArg);
    }
    parent(objectArg) {
        return this.symbolTree.parent(objectArg);
    }
    lastInclusiveDescendant(objectArg) {
        return this.symbolTree.lastInclusiveDescendant(objectArg);
    }
    preceding(objectArg, optionsArg) {
        return this.symbolTree.preceding(objectArg, optionsArg);
    }
    following(object, optionsArg) {
        return this.symbolTree.following(object, optionsArg);
    }
    childrenToArray(parentArg, optionsArg) {
        return this.symbolTree.childrenToArray(parent, optionsArg);
    }
    ancestorsToArray(objectArg, optionsArg) {
        return this.symbolTree.ancestorsToArray(objectArg, optionsArg);
    }
    treeToArray(rootArg, optionsArg) {
        return this.symbolTree.treeToArray(rootArg, optionsArg);
    }
    childrenIterator(parentArg, optionsArg) {
        return this.symbolTree.childrenIterator(parentArg, optionsArg);
    }
    previousSiblingsIterator(objectArg) {
        return this.symbolTree.previousSiblingsIterator(objectArg);
    }
    nextSiblingsIterator(objectArg) {
        return this.symbolTree.nextSiblingsIterator();
    }
    ancestorsIterator(objectArg) {
        this.symbolTree.ancestorsIterator();
    }
    treeIterator(rootArg, optionsArg) {
        return this.symbolTree.treeIterator(rootArg);
    }
    index(childArg) {
        return this.symbolTree.index(childArg);
    }
    childrenCount(parentArg) {
        return this.symbolTree.childrenCount(parentArg);
    }
    compareTreePosition(leftArg, rightArg) {
        return this.compareTreePosition(leftArg, rightArg);
    }
    remove(removeObjectArg) {
        return this.symbolTree.remove(removeObjectArg);
    }
    insertBefore(referenceObjectArg, newObjectArg) {
        return this.symbolTree.insertBefore(referenceObjectArg, newObjectArg);
    }
    insertAfter(referenceObject, newObjectArg) {
        return this.symbolTree.insertAfter(referenceObject, newObjectArg);
    }
    prependChild(referenceObjectArg, newObjectArg) {
        return this.symbolTree.prependChild(referenceObjectArg, newObjectArg);
    }
    appendChild(referenceObjectArg, newObjectArg) {
        return this.symbolTree.appendChild(referenceObjectArg, newObjectArg);
    }
}
exports.Tree = Tree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrLnRyZWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9saWsudHJlZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUF5QztBQUV6QztJQUVFO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsVUFBVSxDQUFDLFNBQVk7UUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxXQUFXLENBQUMsU0FBWTtRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELFVBQVUsQ0FBQyxTQUFZO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsU0FBUyxDQUFDLFNBQVk7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxlQUFlLENBQUMsU0FBWTtRQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELFdBQVcsQ0FBQyxTQUFZO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsTUFBTSxDQUFDLFNBQVk7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCx1QkFBdUIsQ0FBQyxTQUFZO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMs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