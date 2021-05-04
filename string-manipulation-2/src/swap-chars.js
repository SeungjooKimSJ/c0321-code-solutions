/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  const firstLetter = string[firstIndex];
  const secondLetter = string[secondIndex];
  const firstString = string.substring(0, firstIndex);
  const secondString = string.substring(firstIndex + 1, secondIndex);
  const thirdString = string.substring(secondIndex + 1);
  const swapResult = firstString + secondLetter + secondString + firstLetter + thirdString;

  return swapResult;
}
