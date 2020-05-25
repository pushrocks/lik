/**
 * fast map allows for very quick lookups of objects with a unique key
 */
export class FastMap<T> {
  private mapObject: { [key: string]: T } = {};

  public isUniqueKey(keyArg: string): boolean {
    return this.mapObject[keyArg] ? false : true;
  }

  public addToMap(
    keyArg: string,
    objectArg: T,
    optionsArg?: {
      force: boolean;
    }
  ): boolean {
    if (this.isUniqueKey(keyArg) || (optionsArg && optionsArg.force)) {
      this.mapObject[keyArg] = objectArg;
      return true;
    } else {
      return false;
    }
  }

  public getByKey(keyArg: string) {
    return this.mapObject[keyArg];
  }

  public removeFromMap(keyArg): T {
    const removedItem = this.getByKey(keyArg);
    delete this.mapObject[keyArg];
    return removedItem;
  }

  public getKeys() {
    const keys: string[] = [];
    for (const keyArg in this.mapObject) {
      if (this.mapObject[keyArg]) {
        keys.push(keyArg);
      }
    }
    return keys;
  }

  public clean() {
    this.mapObject = {};
  }

  /**
   * returns a new Objectmap that includes
   */
  public concat(fastMapArg: FastMap<T>) {
    const concatedFastmap = new FastMap<T>();
    for (const key of this.getKeys()) {
      concatedFastmap.addToMap(key, this.getByKey(key));
    }

    for (const key of fastMapArg.getKeys()) {
      concatedFastmap.addToMap(key, fastMapArg.getByKey(key), {
        force: true
      });
    }

    return concatedFastmap;
  }

  /**
   * tries to merge another Objectmap
   * Note: uniqueKeyCollisions will cause overwrite
   * @param objectMapArg
   */
  public addAllFromOther(fastMapArg: FastMap<T>) {
    for (const key of fastMapArg.getKeys()) {
      this.addToMap(key, fastMapArg.getByKey(key), {
        force: true
      });
    }
  }
}
