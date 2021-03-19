/* exported findIndex */
function findIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    var arrIndex = array[i];

    if (value === arrIndex) {
      return i;
    }
  }
  return -1;
}
