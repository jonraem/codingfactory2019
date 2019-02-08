import { mirror, palindrome } from './gateTwo';
import gateHandler from './gateHandler';

describe('Gate Two', () => {

  describe('mirror', () => {
    it('should return a mirrored string of a given string (receives one argument)', () => {
      expect(mirror('Houston')).toEqual('notsuoH');
      expect(mirror('Woof')).toEqual('fooW');
    });
  });

  describe('palindrome', () => {
    it('should return true if string is a palindrome (receives one argument)', () => {
      expect(palindrome('Houston')).toEqual(false);
      expect(palindrome('madam')).toEqual(true);
    });
  });

  const mirrorPasses = mirror('ASDF') === 'FDSA';
  const palindromePasses = palindrome('saippuakauppias');
  if (mirrorPasses && palindromePasses) {
    console.log('Gate Two opening...');
    gateHandler();
  }
});
