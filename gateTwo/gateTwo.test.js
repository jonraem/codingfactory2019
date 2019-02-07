import { mirror } from './gateTwo';
import gateHandler from './gateHandler';

describe('Gate Two', () => {

  describe('mirror', () => {
    it('should return a mirrored string of a given string (receives one argument)', () => {
      expect(mirror('Houston')).toEqual('notsuoH');
      expect(mirror('Woof')).toEqual('fooW');
    });
  });

  const mirrorPasses = mirror('ASDF') === 'FDSA';
  if (mirrorPasses) {
    console.log('GATE TWO IS OPEN! GOGOGO!');
    gateHandler();
  }
});
