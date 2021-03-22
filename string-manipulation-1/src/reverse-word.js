/* exported reverseWord */
function reverseWord(word) {
  var string = '';
  var lastIndex = word.length - 1;

  for (var i = lastIndex; i >= 0; i--) {
    string += word[i];
  }
  return string;
}
