/* exported capitalizeWord */
function capitalizeWord(word) {
  var upperCase = word[0].toUpperCase();
  var lowerCase = word.slice(1).toLowerCase();

  return upperCase + lowerCase;
}
