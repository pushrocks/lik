export declare class Tree<T> {
    symbolTree: any;
    constructor();
    /**
     *
     * @param objectArg
     */
    initialize(objectArg: T): T;
    hasChildren(objectArg: T): boolean;
    firstChild(objectArg: T): T;
    lastChild(objectArg: T): T;
    previousSibling(objectArg: T): T;
    nextSibling(objectArg: T): T;
    parent(objectArg: T): T;
    lastInclusiveDescendant(objectArg: T): T;
    preceding(objectArg: T, optionsArg?: any): T;
    following(object: T, optionsArg: any): any;
    childrenToArray(parentArg: T, optionsArg: any): T[];
    ancestorsToArray(objectArg: T, optionsArg: any): T[];
    treeToArray(rootArg: any, optionsArg: any): T[];
    childrenIterator(parentArg: T, optionsArg: any): T;
    previousSiblingsIterator(objectArg: any): T;
    nextSiblingsIterator(objectArg: T): any;
    ancestorsIterator(objectArg: any): void;
    treeIterator(rootArg: T, optionsArg: any): T;
    index(childArg: T): number;
    childrenCount(parentArg: T): number;
    compareTreePosition(leftArg: T, rightArg: T): number;
    remove(removeObjectArg: T): T;
    insertBefore(referenceObjectArg: T, newObjectArg: T): T;
    insertAfter(referenceObject: T, newObjectArg: T): any;
    prependChild(referenceObjectArg: T, newObjectArg: T): T;
    appendChild(referenceObjectArg: any, newObjectArg: any): any;
}
