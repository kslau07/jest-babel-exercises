// reverseString.js

export default function reverseString(str) {
  const strArr = [...str];
  const indexLast = strArr.length - 1;
  const reversed = strArr.map((char, index) => {
    return strArr[indexLast - index];
  });
  return reversed.join('');
}
