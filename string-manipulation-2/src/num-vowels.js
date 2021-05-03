/* exported numVowels */

function numVowels(string) {
  let vowelCount = 0;

  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === 'a' || string.charAt(i) === 'e' || string.charAt(i) === 'i' || string.charAt(i) === 'o' || string.charAt(i) === 'u') {
      vowelCount++;
    } else if (string.charAt(i) === 'A' || string.charAt(i) === 'E' || string.charAt(i) === 'I' || string.charAt(i) === 'O' || string.charAt(i) === 'U') {
      vowelCount++;
    }
  }
  return vowelCount;
}
