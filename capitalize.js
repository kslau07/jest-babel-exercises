// capitalize.js

export default function capitalize(string) {
  const capitalizedString = [...string]
    .map((char, index) => {
      if (index === 0) return char.toUpperCase();
      return char;
    })
    .join("");

  return capitalizedString;
}
