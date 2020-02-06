import * as plugins from './lik.plugins';

export class FastMap<T> {
  private mapObject: { [key: string]: T } = {};

  public isUniqueKey() {}

  public addToMap(identifier: string, objectArg: T) {
    this.mapObject[identifier] = objectArg;
  }
}
