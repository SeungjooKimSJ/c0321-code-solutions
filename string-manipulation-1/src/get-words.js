/* exported getWords */
function getWords(string) {
  var words = string.split(' ');

  if (words[0] === '') {
    var newArr = [];

    return newArr;
  } else {
    return words;
  }
}
