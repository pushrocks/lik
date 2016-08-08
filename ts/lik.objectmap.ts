import * as plugins from "./lik.plugins";


export interface IObjectmapForEachFunction {
    (itemArg:any):void
};

export interface IObjectmapFindFunction {
    (itemArg:any):boolean
};


/**
 * allows keeping track of objects
 */
export class Objectmap {
    private objectArray = [];

    /**
     * returns a new instance
     */
    constructor(){

    };


    /**
     * add object to Objectmap
     */
    add(objectArg){
        this.objectArray.push(objectArg);
    };

    /**
     * remove object from Objectmap
     */
    remove(objectArg){
        let replacmentArray = [];
        for(let item of this.objectArray){
            if(item !== objectArg){
                replacmentArray.push(item);
            }
        };
        this.objectArray = replacmentArray;
    };

    /**
     * check if object is in Objectmap
     */
    checkForObject(objectArg){
        return this.objectArray.indexOf(objectArg !== -1)
    };


    /**
     * find object
     */
    find(findFunction:IObjectmapFindFunction){
        let resultArray = this.objectArray.filter(findFunction);
        if (resultArray.length > 0){
            return resultArray[0];
        };
    }


    /**
     * run function for each item in Objectmap
     */
    forEach(functionArg:IObjectmapForEachFunction){
        return this.objectArray.forEach(functionArg);
    }

    /**
     * wipe Objectmap
     */
    wipe(){
        this.objectArray = [];
    }
}