// caesarCipher.test.js

import caesarCipher from './caesarCipher';

describe('caesarCipher method', () => {
  it('should be defined', () => {
    expect(caesarCipher).toBeDefined();
  });

  test('if "HeLLo" returns "KhOOr"', () => {
    const input = 'HeLLo';
    const shift = 3;
    const expected = 'KhOOr';
    expect(caesarCipher(input, shift)).toBe(expected);
  });

  it('should wrap xyz to abc after shifting by 3', () => {
    const input = 'xyz';
    const shift = 3;
    const expected = 'abc';
    expect(caesarCipher(input, shift)).toBe(expected);
  });

  it('should preserve punctuation', () => {
    const input = 'Hello, World!';
    const shift = 3;
    const expected = 'Khoor, Zruog!';
    expect(caesarCipher(input, shift)).toBe(expected);
  });
});
