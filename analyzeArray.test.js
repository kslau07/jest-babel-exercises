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
      const returnedObj = analyzeArray(arr);
      expect(returnedObj).toHaveProperty('min');
    });

    test('if .min returns 1 if given [1, 3, 5]', () => {
      const arr = [1, 3, 5];
      const result = analyzeArray(arr).min;
      expect(result).toBe(1);
    });

    test('if .min DOES NOT return 2 if given [1, 2]', () => {
      const arr = [1, 2];
      const { min } = analyzeArray(arr);
      expect(min).not.toBe(2);
    });

    test('if .min returns -99 if given [0, -99, 10, 512]', () => {
      const arr = [0, -99, 10, 512];
      const { min } = analyzeArray(arr);
      expect(min).toBe(-99);
    });

    test('if .min returns "null" when given an empty array', () => {
      const arr = [];
      const { min } = analyzeArray(arr);
      expect(min).toBe(null);
    });
  });

  describe('.max property', () => {
    test('if object contains the property ".max"', () => {
      const arr = [1, 2, 3];
      const returnedObj = analyzeArray(arr);
      expect(returnedObj).toHaveProperty('max');
    });

    test('if .max returns 5 if given [1, 3, 5]', () => {
      const arr = [1, 3, 5];
      const { max } = analyzeArray(arr);
      expect(max).toBe(5);
    });

    test('if .max DOES NOT return 1 if given [1, 2]', () => {
      const arr = [1, 2];
      const { max } = analyzeArray(arr);
      expect(max).not.toBe(1);
    });

    test('if .max returns 100 when given [-5, 0, 100, 99.5]', () => {
      const arr = [-5, 0, 100, 99.5];
      const { max } = analyzeArray(arr);
      expect(max).toBe(100);
    });
  });

  describe('.length property', () => {
    test('if object contains the property ".length"', () => {
      const arr = [1, 2, 3];
      const returnedObj = analyzeArray(arr);
      expect(returnedObj).toHaveProperty('length');
    });

    it('should have .length of 0 when given an empty array', () => {
      const arr = [];
      const result = analyzeArray(arr).length;
      expect(result).toBe(0);
    });

    it('should have a .length of 1 when given [0]', () => {
      const arr = [0];
      const { length } = analyzeArray(arr);
      expect(length).toBe(1);
    });

    it('should have a .length of 5 when given [-84, 14.7, 0, 527, .64]', () => {
      const arr = [-84, 14.7, 0, 527, 0.64];
      const { length } = analyzeArray(arr);
      expect(length).toBe(5);
    });

    it('should NOT have a .length of 3 when given [0, 1]', () => {
      const arr = [0, 1];
      const { length } = analyzeArray(arr);
      expect(length).not.toBe(3);
    });
  });

  describe('.average property', () => {
    test('if object contains the property ".average"', () => {
      const arr = [1, 2, 3];
      const returnedObj = analyzeArray(arr);
      expect(returnedObj).toHaveProperty('average');
    });

    it('should return 3 if given [1, 2, 3]', () => {
      const arr = [1, 2, 3];
      const { average } = analyzeArray(arr);
      expect(average).toBe(2);
    });

    it('should return approx. 33.33 if given [33, 33, 34]', () => {
      const arr = [33, 33, 34];
      const { average } = analyzeArray(arr);
      expect(average).toBeCloseTo(33.33);
    });

    it('should return approx. 17.77 if given [51, -24.3, -7, 69, 0.15]', () => {
      const arr = [51, -24.3, -7, 69, 0.15];
      const { average } = analyzeArray(arr);
      expect(average).toBeCloseTo(17.77);
    });

    it('should NOT return 3 if given [2, 2, 2]', () => {
      const arr = [2, 2, 2];
      const { average } = analyzeArray(arr);
      expect(average).not.toBe(3);
    });

    it('should return null if given an empty array', () => {
      const arr = [];
      const { average } = analyzeArray(arr);
      expect(average).toBeNull;
    });
  });
});
