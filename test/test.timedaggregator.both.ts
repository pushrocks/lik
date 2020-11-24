// import test framework
import { expect, tap } from '@pushrocks/tapbundle';
import * as events from 'events';
import * as smartpromise from '@pushrocks/smartpromise';

// import the module
import * as lik from '../ts/index';

let testTimedAggregator: lik.TimedAggregtor<string>;

tap.test('should create a timed aggregaotor', async (tools) => {
  testTimedAggregator = new lik.TimedAggregtor<string>({
    aggregationIntervalInMillis: 1000,
    functionForAggregation: (aggregation) => {
      console.log(aggregation);
    },
  });
  testTimedAggregator.add('This');
  testTimedAggregator.add('is a whole sentence.');
  await tools.delayFor(1001);
  testTimedAggregator.add('This one is another.');
  await tools.delayFor(2000);
});

tap.start();
