// analyzeArray.js

export default function analyzeArray(arr) {
  if (arr === undefined || arr.length == 0)
    return { min: null, max: null, average: null, length: 0 };

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  const average = arr.reduce((acc, cur) => acc + cur, 0) / length;
  return { min, max, length, average };
}
