/* exported filterOutStrings */
function filterOutStrings(values) {
  var newArr = [];

  for (var i = 0; i < values.length; i++) {
    var filter = values[i];

    if (typeof filter !== 'string') {
      newArr.push(filter);
    }
  }
  return newArr;
}
