const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const toSum = (x, y) => {
  const add = x + y;

  return add;
};

const sum = numbers.reduce(toSum);
console.log('value of sum:', sum);

const toProduct = (x, y) => {
  const multiply = x * y;

  return multiply;
};

const product = numbers.reduce(toProduct);
console.log('value of product:', product);

const getBalance = (balance, transaction) => {
  if (transaction.type === 'deposit') {
    balance += transaction.amount;
  } else {
    balance -= transaction.amount;
  }
  return balance;
};

const balance = account.reduce(getBalance, 0);
console.log('value of balance:', balance);

const getComposite = (composite, traits) => {
  const copyValue = Object.assign(composite, traits);

  return copyValue;
};

const composite = traits.reduce(getComposite, {});
console.log('value of composite:', composite);
