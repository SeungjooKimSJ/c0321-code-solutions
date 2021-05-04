/* exported capitalizeWord */
function capitalizeWord(word) {
  const upperCase = word[0].toUpperCase();
  const lowerCase = word.slice(1).toLowerCase();
  const newWord = upperCase + lowerCase;

  if (newWord === 'Javascript') {
    return 'JavaScript';
  }
  return newWord;
}
