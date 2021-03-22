/* exported isUpperCased */
function isUpperCased(word) {
  var upperCased = word.toUpperCase();

  if (word === upperCased) {
    return true;
  } else {
    return false;
  }
}
