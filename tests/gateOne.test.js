import { sum, reverseArray, findBiggest, checkNumbers, nameLengths, totalSum } from '../src/gateOne';

describe('Gate One', () => {
  
  describe('sum', () => {
    it('should sum two values together', () => {
      expect(sum(4,3)).toEqual(7);
      expect(sum(-7,-3)).toEqual(-10);
    })
  });
  
  describe('totalSum', () => {
    it('should calculate the total sum of all elements in a given array', () => {
      expect(totalSum([1,5,2,0,8])).toEqual(16);
      expect(totalSum([2,2,6])).toEqual(8);
    })
  })

  describe('findBiggest', () => {
    it('should return the biggest value in given array', () => {
      expect(findBiggest([1,2,3,4,5])).toEqual(5);
      expect(findBiggest([8,8,8,8,8])).toEqual(8);
    })
  });
  
  describe('checkNumbers', () => {
    it('should return true if B is bigger than A', () => {
      expect(checkNumbers(1,2)).toEqual(true);
    });
    it('should return false if A is bigger than B', () => {
      expect(checkNumbers(2,1)).toEqual(false);
    });
    it('should return -1 if A and B are equal', () => {
      expect(checkNumbers(1,1)).toEqual(-1);
    });
  });

  describe('nameLengths', () => {
    it('should return an array with the lengths of the names in a given array', () => {
      expect(nameLengths(['MAX', 'JOHN', 'SAMANTHA', 'ENRIQUE'])).toEqual([3,4,8,7]);
    });
    it('should ignore empty strings', () => {
      expect(nameLengths(['SEPPO', '', 'ROGER', 'PAUL'])).toEqual([5,5,4]);
    })
  })
});

