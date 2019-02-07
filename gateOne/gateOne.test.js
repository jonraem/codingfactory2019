import { sum, sumTotal, isBiggerThan } from './gateOne';
import gateHandler from './gateHandler';

describe('Gate One', () => {
  
  describe('sum', () => {
    it('should return the sum of two values', () => {
      expect(sum(4,3)).toEqual(7);
    });
  });
  
  describe('sumTotal', () => {
    it('should return the sum of all elements in an array', () => {
      expect(sumTotal([1,5,2,0,8])).toEqual(16);
    });
  });

  describe('isBiggerThan', () => {
    it('should return 1 if x is bigger than y', () => {
      expect(isBiggerThan(2,1)).toEqual(1);
    });
    it('should return 0 if y is bigger than x', () => {
      expect(isBiggerThan(1,2)).toEqual(0);
    });
    it('should return -1 if x and y are equal', () => {
      expect(isBiggerThan(1,1)).toEqual(-1);
    });
  });

  const sumPasses = sum(4,3) === 7;
  const sumTotalPasses = sumTotal([3,5,2,10]) === 20;
  const isBiggerThanPasses = isBiggerThan(5,5) === -1;
  if (sumPasses && sumTotalPasses && isBiggerThanPasses) {
    console.log('GATE ONE IS OPEN! GOGOGO!');
    gateHandler();
  }
});

