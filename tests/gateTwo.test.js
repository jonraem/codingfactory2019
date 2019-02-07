import { mirror } from '../src/gateTwo';
import gateTwo from '../src/gateTwo';

describe('Gate Two', () => {
  
  describe('mirror', () => {
    it('should return a mirrorer string of a given string', () => {
      expect(mirror('Hello World!')).toEqual('!dlroW olleH');
    });
  })

  test('hard test 2', () => {
    expect(true).toEqual(true);
  });
});
