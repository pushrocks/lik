import * as plugins from "./lik.plugins";

/**
 * allows keeping track of objects
 */
export class Objectmap {
    private objectArray = [];
    add(objectArg){
        this.objectArray.push(objectArg);
    };
    remove(objectArg){
        let replacmentArray = [];
        for(let item of this.objectArray){
            if(item !== objectArg){
                replacmentArray.push(item);
            }
        };
        this.objectArray = replacmentArray;
    };
    checkForObject(objectArg){
        return this.objectArray.indexOf(objectArg !== -1)
    };
    wipe(){
        this.objectArray = [];
    }
}