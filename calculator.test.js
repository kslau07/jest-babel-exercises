// calculator.test.js

import calculator from './calculator';

describe('calculator', () => {
  it('should be defined', () => {
    expect(calculator).toBeDefined();
  });

  describe('add method', () => {
    it('should return 3 when adding 1 and 2', () => {
      // NOTE: .toBe tests strict equality, whereas .toEqual tests loose equality
      expect(calculator.add(1, 2)).toEqual(3);
    });

    it('should return 10 when adding 5 and 5', () => {
      expect(calculator.add(5, 5)).toEqual(10);
    });
  });

  describe('subtract method', () => {
    it('should return 99 when subtracting 1 from 100', () => {
      expect(calculator.subtract(100, 1)).toEqual(99);
    });

    it('should return 0 when subtracting 2 from 2', () => {
      expect(calculator.subtract(2, 2)).toEqual(0);
    });
  });

  describe('multiply method', () => {
    it('should return 12 when multiplying 3 and 4', () => {
      expect(calculator.multiply(3, 4)).toEqual(12);
    });

    it('should return 64 when multiplying 8 and 8', () => {
      expect(calculator.multiply(8, 8)).toEqual(64);
    });
  });

  describe('divide method', () => {
    it('should return 8 when dividing 56 by 7', () => {
      expect(calculator.divide(56, 7)).toEqual(8);
    });

    it('should return 12 when dividing 156 by 13', () => {
      expect(calculator.divide(156, 13)).toEqual(12);
    });
  });
});
