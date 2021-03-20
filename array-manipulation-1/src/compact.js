/* exported compact */
function compact(array) {
  var newArr = [];
  // var falseValues = [false, null, undefined, 0, -0, NaN, ""];
  // var isNaN = function (value) {
  //   var num = Number(value);

  //   return n !== n;
  // };
  // function typeOfNaN(x) {
  //   if (isNaN(x)) {
  //     return 'NaN'
  //   }
  // }
  var notANumber = Number.isNaN();

  for (var i = 0; i < array.length; i++) {
    if (array[i] !== false && array[i] !== null && array[i] !== undefined && array[i] !== 0 && array[i] !== -0 && array[i] !== notANumber && array[i] !== '') {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
