import * as plugins from "./lik.plugins";


export interface IObjectmapForEach {
    (itemArg):void
}

/**
 * allows keeping track of objects
 */
export class Objectmap {
    private objectArray = [];
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
     * run function for each item in Objectmap
     */
    forEach(functionArg:IObjectmapForEach){
        return this.objectArray.forEach(functionArg);
    }

    /**
     * wipe Objectmap
     */
    wipe(){
        this.objectArray = [];
    }
}