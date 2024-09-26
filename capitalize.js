// capitalize.js

export default function capitalize(str) {
  const capitalizedString = [...str]
    .map((char, index) => {
      if (index === 0) return char.toUpperCase();
      return char;
    })
    .join('');

  return capitalizedString;
}
