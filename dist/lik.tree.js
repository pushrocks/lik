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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlrLnRyZWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9saWsudHJlZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUF3QztBQUV4QztJQUVFO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUM1QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsVUFBVSxDQUFFLFNBQVk7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzlDLENBQUM7SUFFRCxXQUFXLENBQUUsU0FBWTtRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDL0MsQ0FBQztJQUVELFVBQVUsQ0FBRSxTQUFZO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUM5QyxDQUFDO0lBRUQsU0FBUyxDQUFFLFNBQVk7UUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFFRCxlQUFlLENBQUUsU0FBWTtRQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDbkQsQ0FBQztJQUVELFdBQVcsQ0FBRSxTQUFZO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUMvQyxDQUFDO0lBRUQsTUFBTSxDQUFFLFNBQVk7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzFDLENBQUM7SUFFRCx1QkFBdUIsQ0FBQyxTQUFZO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMs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