/* exported countdown */
function countdown(number) {
  var newArr = [];
  var currentNumber = 0;

  while (currentNumber <= number) {
    newArr.unshift(currentNumber);
    currentNumber++;
  }
  return newArr;
}
