// caesarCipher.js

// Prefer .codePointAt over .charCodeAt
// SOURCE: https://stackoverflow.com/a/78892193

const wrapCodePoint = (codePoint, isCapital) => {
  const caseFactor = isCapital === true ? 65 : 97; // uppercase begins at 65, lowercase at 97
  const alphabetSize = 26;
  const offset = (codePoint - caseFactor) % alphabetSize;

  return offset < 0 ? caseFactor + offset + alphabetSize : caseFactor + offset;
};

const codePointsArrayToString = (codePoints) => {
  return codePoints.map((i) => String.fromCodePoint(i)).join('');
};

const shiftAlpha = (alpha, shift) => {
  console.log(`alpha is: ${alpha}`);
  const isCapital = alpha.codePointAt(0) <= 90 ? true : false;
  const codePointWithShift = alpha.codePointAt(0) + shift;
  const wrappedCodePoint = wrapCodePoint(codePointWithShift, isCapital);
};

export default function caesarCipher(str, shift) {
  const newCodePoints = [];
  for (const char of str) {
    const isAlpha = /[A-Za-z]/.test(char);
    const char2 = isAlpha ? shiftAlpha(char, shift) : char;
    newCodePoints.push(char2);
  }

  const finalString = codePointsArrayToString(newCodePoints);
  return finalString;
}
