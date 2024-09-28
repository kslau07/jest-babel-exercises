// analyzeArray.test.js

import analyzeArray from './analyzeArray';

describe('analyzeArray function', () => {
  it('should be defined', () => {
    expect(analyzeArray).toBeDefined();
  });

  it('should return an object', () => {
    const arr = [];
    const result = analyzeArray(arr);
    expect(result).toBeInstanceOf(Object);
  });

  describe('.min property', () => {
    test('if object contains the property ".min"', () => {
      const arr = [1, 2, 3];
      const obj = analyzeArray(arr);
      expect(obj).toHaveProperty('min');
    });

    test('if .min returns 1 if given [1, 3, 5]', () => {
      const arr = [1, 3, 5];
      const result = analyzeArray(arr).min;
      expect(result).toBe(1);
    });

    test('if .min returns -99 if given [0, -99, 10, 512]', () => {
      const arr = [0, -99, 10, 512];
      const result = analyzeArray(arr).min;
      expect(result).toBe(-99);
    });

    test('if .min returns "null" when given an empty array', () => {
      const arr = [];
      const result = analyzeArray(arr).min;
      expect(result).toBe(null);
    });
  });

  describe('.max property', () => {
    test('if object contains the property ".max"');
    const arr = [1, 2, 3];
    const obj = analyzeArray(arr);
    expect(obj).toHaveProperty('max');
  });

  describe('.length property', () => {
    it.skip('should have .length of 0 when given an empty array', () => {
      const arr = [];
      const result = analyzeArray(arr).length;
      expect(result).toBe(0);
    });
  });

  describe('.average property', () => {});
});
