import * as plugins from './lik.plugins';

export interface ITimedAggregatorOptions<T> {
  aggregationIntervalInMillis: number;
  functionForAggregation: (input: T[]) => void;
}

export class TimedAggregtor<T> {
  public options: ITimedAggregatorOptions<T>;
  private storageArray: T[] = [];

  constructor(optionsArg: ITimedAggregatorOptions<T>) {
    this.options = optionsArg;
  }

  private aggregationTimer: plugins.smarttime.Timer;
  private checkAggregationStatus() {
    const addAggregationTimer = () => {
      this.aggregationTimer = new plugins.smarttime.Timer(this.options.aggregationIntervalInMillis);
      this.aggregationTimer.completed.then(() => {
        const aggregateForProcessing = this.storageArray;
        if (aggregateForProcessing.length === 0) {
          this.aggregationTimer = null;
          return;
        }
        this.storageArray = [];
        addAggregationTimer();
        this.options.functionForAggregation(aggregateForProcessing);
      });
      this.aggregationTimer.start();
    };
    if (!this.aggregationTimer) {
      addAggregationTimer();
    }
  }

  public add(aggregationArg: T) {
    this.storageArray.push(aggregationArg);
    this.checkAggregationStatus();
  }
}
