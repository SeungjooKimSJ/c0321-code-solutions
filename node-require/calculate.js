const addTwoNumbers = require('./add');
const subtractTwoNumbers = require('./subtract');
const multiplyTwoNumbers = require('./multiply');
const divideTwoNumbers = require('./divide');

const num1 = parseFloat(process.argv[2]);
const operation = process.argv[3];
const num2 = parseFloat(process.argv[4]);

if (operation === 'plus') {
  console.log('result:', addTwoNumbers(num1, num2));
} else if (operation === 'minus') {
  console.log('result:', subtractTwoNumbers(num1, num2));
} else if (operation === 'times') {
  console.log('result:', multiplyTwoNumbers(num1, num2));
} else if (operation === 'over') {
  console.log('result:', divideTwoNumbers(num1, num2));
} else {
  console.log('It is invalid operation!');
}
