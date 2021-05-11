const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const getDoubled = number => {
  const doubledNumber = number * 2;

  return doubledNumber;
};

const doubled = numbers.map(getDoubled);
console.log('value of doubled:', doubled);

const numsToPrices = number => {
  const toDollarPrices = `$${number.toFixed(2)}`;

  return toDollarPrices;
};

const prices = numbers.map(numsToPrices);
console.log('value of prices:', prices);

const getUpperCased = language => {
  const toUpperCase = language.toUpperCase();

  return toUpperCase;
};

const upperCased = languages.map(getUpperCased);
console.log('value of upperCased:', upperCased);

const getFirstLetters = language => {
  const firstLetterOnly = language[0];

  return firstLetterOnly;
};

const firstLetters = languages.map(getFirstLetters);
console.log('value of firstLetters:', firstLetters);
