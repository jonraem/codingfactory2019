import { mirror } from './gateTwo';

describe('Gate Two', () => {

  // describe('nameLengths', () => {
  //   it('should return an array with the lengths of the names in a given array', () => {
  //     expect(nameLengths(['MAX', 'JOHN', 'SAMANTHA', 'ENRIQUE'])).toEqual([3,4,8,7]);
  //   });
  //   it('should ignore empty strings', () => {
  //     expect(nameLengths(['SEPPO', '', 'ROGER', 'PAUL'])).toEqual([5,5,4]);
  //   })
  // })
  
  describe('mirror', () => {
    it('should return a mirrorer string of a given string', () => {
      expect(mirror('Hello World!')).toEqual('!dlroW olleH');
    });
  })
});
