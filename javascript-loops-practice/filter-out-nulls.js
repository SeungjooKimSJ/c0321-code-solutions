/* exported filterOutNulls */
function filterOutNulls(values) {
  var newArr = [];

  for (var i = 0; i < values.length; i++) {
    var filter = values[i];

    if (filter !== null) {
      newArr.push(filter);
    }
  }
  return newArr;
}
