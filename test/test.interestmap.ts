import { tap, expect } from '@pushrocks/tapbundle';
import * as lik from '../ts/index';

let testInterestmap: lik.InterestMap<number, number>;

tap.test('should create an interestmap', async () => {
  testInterestmap = new lik.InterestMap(numberArg => {
    return numberArg.toString();
  });
});

tap.test('should create an interest', async () => {
  testInterestmap.addInterest(3);
  testInterestmap.addInterest(4);
});

tap.test('should return an already existing interest', async () => {
  await testInterestmap.addInterest(3);
});

tap.test('should be able to inform about a lost interest', async () => {
  testInterestmap.informLostInterest(3);
});

tap.start();
