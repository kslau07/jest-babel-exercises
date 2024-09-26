// reverseString.test.js

import reverseString from './reverseString';

describe('reverseString', () => {
  test('if reverseString is defined', () => {
    expect(reverseString).toBeDefined();
  });

  it('should receive "hello" and return "olleh"', () => {
    const input = 'hello';
    const expected = 'olleh';
    expect(reverseString(input)).toBe(expected);
  });

  test('if it works when there is a space in string', () => {
    const input = 'I am a short sentence.';
    const expected = '.ecnetnes trohs a ma I';
    expect(reverseString(input)).toBe(expected);
  });
});
