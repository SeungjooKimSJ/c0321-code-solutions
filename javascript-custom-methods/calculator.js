/* exported calculator */

var calculator = {
  add: function (x, y) {
    var sum = x + y;

    return sum;
  },

  subtract: function (x, y) {
    var difference = x - y;

    return difference;
  },

  multiply: function (x, y) {
    var product = x * y;

    return product;
  },

  divide: function (x, y) {
    var quotient = x / y;

    return quotient;
  },

  square: function (x) {
    var square = x * x;

    return square;
  },

  sumAll: function (numbers) {
    var sum = 0;

    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  },

  getAverage: function (numbers) {
    var sum = 0;

    for (var k = 0; k < numbers.length; k++) {
      sum += numbers[k];
    }
    var getAverage = sum / numbers.length;

    return getAverage;
  }
};
