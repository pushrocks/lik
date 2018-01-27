import * as plugins from "./lik.plugins";

export class Tree<T> {
  symbolTree: any;
  constructor() {
    this.symbolTree = new plugins.symbolTree();
  }

  /**
   *
   * @param objectArg
   */
  initialize(objectArg: T): T {
    return this.symbolTree.initialize(objectArg);
  }

  hasChildren(objectArg: T): boolean {
    return this.symbolTree.hasChildren(objectArg);
  }

  firstChild(objectArg: T): T {
    return this.symbolTree.firstChild(objectArg);
  }

  lastChild(objectArg: T): T {
    return this.symbolTree.lastChild(objectArg);
  }

  previousSibling(objectArg: T): T {
    return this.symbolTree.previousSibling(objectArg);
  }

  nextSibling(objectArg: T): T {
    return this.symbolTree.nextSibling(objectArg);
  }

  parent(objectArg: T): T {
    return this.symbolTree.parent(objectArg);
  }

  lastInclusiveDescendant(objectArg: T): T {
    return this.symbolTree.lastInclusiveDescendant(objectArg);
  }

  preceding(objectArg: T, optionsArg?: any): T {
    return this.symbolTree.preceding(objectArg, optionsArg);
  }

  following(object: T, optionsArg: any) {
    return this.symbolTree.following(object, optionsArg);
  }

  childrenToArray(parentArg: T, optionsArg: any): T[] {
    return this.symbolTree.childrenToArray(parent, optionsArg);
  }

  ancestorsToArray(objectArg: T, optionsArg: any): T[] {
    return this.symbolTree.ancestorsToArray(objectArg, optionsArg);
  }

  treeToArray(rootArg, optionsArg: any): T[] {
    return this.symbolTree.treeToArray(rootArg, optionsArg);
  }

  childrenIterator(parentArg: T, optionsArg): T {
    return this.symbolTree.childrenIterator(parentArg, optionsArg);
  }

  previousSiblingsIterator(objectArg): T {
    return this.symbolTree.previousSiblingsIterator(objectArg);
  }

  nextSiblingsIterator(objectArg: T) {
    return this.symbolTree.nextSiblingsIterator();
  }

  ancestorsIterator(objectArg) {
    this.symbolTree.ancestorsIterator();
  }

  treeIterator(rootArg: T, optionsArg): T {
    return this.symbolTree.treeIterator(rootArg);
  }

  index(childArg: T): number {
    return this.symbolTree.index(childArg);
  }

  childrenCount(parentArg: T): number {
    return this.symbolTree.childrenCount(parentArg);
  }

  compareTreePosition(leftArg: T, rightArg: T): number {
    return this.compareTreePosition(leftArg, rightArg);
  }

  remove(removeObjectArg: T): T {
    return this.symbolTree.remove(removeObjectArg);
  }

  insertBefore(referenceObjectArg: T, newObjectArg: T): T {
    return this.symbolTree.insertBefore(referenceObjectArg, newObjectArg);
  }

  insertAfter(referenceObject: T, newObjectArg: T) {
    return this.symbolTree.insertAfter(referenceObject, newObjectArg);
  }

  prependChild(referenceObjectArg: T, newObjectArg: T): T {
    return this.symbolTree.prependChild(referenceObjectArg, newObjectArg);
  }

  appendChild(referenceObjectArg, newObjectArg) {
    return this.symbolTree.appendChild(referenceObjectArg, newObjectArg);
  }
}
