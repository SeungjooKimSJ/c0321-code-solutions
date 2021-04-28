const addTwoNumbers = require('./add');
const subtractTwoNumbers = require('./subtract');
const multiplyTwoNumbers = require('./multiply');
const divideTwoNumbers = require('./divide');

const operation = process.argv[3];
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[4]);

if (operation === 'plus') {
  console.log('result:', addTwoNumbers(num1, num2));
} else if (operation === 'minus') {
  console.log('result:', subtractTwoNumbers(num1, num2));
} else if (operation === 'times') {
  console.log('result:', multiplyTwoNumbers(num1, num2));
} else if (operation === 'over') {
  console.log('result:', divideTwoNumbers(num1, num2));
}
