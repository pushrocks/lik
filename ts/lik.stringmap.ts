import * as plugins from "./lik.plugins";

/**
 * allows you to easily keep track of a bunch of strings;
 */
export class Stringmap {
    private _stringArray:string[] = [];
    constructor(){

    };
    /**
     * add a string to the Stringmap
     */
    addString(stringArg:string){
        this._stringArray.push(stringArg);
    };

    /**
     * removes a string from Stringmap
     */
    removeString(stringArg:string){
        for (let keyArg in this._stringArray){
            if(this._stringArray[keyArg] == stringArg){
                this._stringArray.splice(parseInt(keyArg),1);
            };
        }
    }

    /**
     * check if string is in Stringmap
     */
    checkString(stringArg:string):boolean{
        return this._stringArray.indexOf(stringArg) != -1;
    }

    /**
     * checks stringPresence with minimatch
     */
    checkMinimatch(stringArg:string){

    }
}