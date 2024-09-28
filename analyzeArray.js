// analyzeArray.js

// FIXME: DELETE ME
// object == {
//  average: 4,
//  min: 1,
//  max: 8,
//  length: 6
// };

export default function analyzeArray(arr) {
  if (arr === undefined || arr.length == 0)
    return { min: null, max: null, average: null, length: 0 };

  const min = Math.min(...arr);
  return { min };
}
