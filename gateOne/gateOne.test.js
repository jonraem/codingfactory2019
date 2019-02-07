import { sum, sumTotal, isBiggerThan } from './gateOne';

describe('Gate One', () => {
  
  describe('sum', () => {
    it('should sum two values together', () => {
      expect(sum(4,3)).toEqual(7);
      expect(sum(-7,-3)).toEqual(-10);
    })
  });
  
  describe('sumTotal', () => {
    it('should calculate the total sum of all elements in a given array', () => {
      expect(sumTotal([1,5,2,0,8])).toEqual(16);
      expect(sumTotal([2,2,6])).toEqual(8);
    })
  })

  describe('isBiggerThan', () => {
    it('should return 1 if B is bigger than A', () => {
      expect(isBiggerThan(2,1)).toEqual(1);
    });
    it('should return 0 if A is bigger than B', () => {
      expect(isBiggerThan(1,2)).toEqual(0);
    });
    it('should return -1 if A and B are equal', () => {
      expect(isBiggerThan(1,1)).toEqual(-1);
    });
  });

  describe('all functions', () => {
    const sumPasses = sum(4,3) === 7;
    const sumTotalPasses = sumTotal([1,5,2,0,8]) === 16;
    const isBiggerThanPasses = isBiggerThan(4,2) === 1;

    const allFunctionsPass = sumPasses && sumTotalPasses && isBiggerThanPasses;

    it('should pass', () => {
      expect(allFunctionsPass).toBeTruthy();
    });

    if (allFunctionsPass) {
      // openGate();
    }
  })
});

