const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const getEvenNumbers = number => {
  const evens = number % 2 === 0;

  return evens;
};

const evenNumbers = numbers.filter(getEvenNumbers);
console.log('value of evenNumbers:', evenNumbers);

const getOverFive = number => {
  const greaterThanFive = number > 5;

  return greaterThanFive;
};

const overFive = numbers.filter(getOverFive);
console.log('value of overFive:', overFive);

const getStartWithE = name => {
  const nameStartE = name[0] === 'E';

  return nameStartE;
};

const startWithE = names.filter(getStartWithE);
console.log('value of startWithE:', startWithE);

const getHaveD = name => {
  const nameHaveD = [];

  if (name.includes('D') || name.includes('d')) {
    return nameHaveD;
  }
};

const haveD = names.filter(getHaveD);
console.log('value of haveD:', haveD);
