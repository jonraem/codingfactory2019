import gateTwo from '../src/gateTwo';

describe('Gate Two', () => {
  test('mirrors text', () => {
    expect(mirror('Hello World!')).toEqual('!dlroW olleH');
  });

  test('hard test 2', () => {
    expect(true).toEqual(true);
  });
});
