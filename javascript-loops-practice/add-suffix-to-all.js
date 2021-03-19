/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var newArr = [];

  for (var i = 0; i < words.length; i++) {
    var addSuffix = words[i] + suffix;

    newArr.push(addSuffix);
  }
  return newArr;
}
