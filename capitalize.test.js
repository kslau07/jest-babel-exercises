// capitalize.test.js

import capitalize from './capitalize';

describe('capitalize method', () => {
  test('if capitalize module exists', () => {
    expect(capitalize).toBeDefined();
  });

  test('if it capitalizes the first character in a given string', () => {
    const testCases = [
      { string: 'hello', expected: 'Hello' },
      { string: 'howdy', expected: 'Howdy' },
    ];

    testCases.forEach((testCase) => {
      expect(capitalize(testCase.string)).toBe(testCase.expected);
    });
  });

  test('if it does not change a string that begins with a number', () => {
    const string = '25people';
    const expected = '25people';
    expect(capitalize(string)).toBe(expected);
  });
});
