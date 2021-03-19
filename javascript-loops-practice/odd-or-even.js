/* exported oddOrEven */
function oddOrEven(numbers) {
  var newArr = [];

  for (var i = 0; i < numbers.length; i++) {
    var currentNumber = numbers[i];

    if (currentNumber % 2 === 0) {
      newArr.push('even');
    } else {
      newArr.push('odd');
    }
  }
  return newArr;
}
