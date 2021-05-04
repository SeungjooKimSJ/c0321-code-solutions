/* exported capitalizeWords */

function capitalizeWords(string) {
  const strUpperCase = string.toLowerCase().split(' ');

  for (let i = 0; i < strUpperCase.length; i++) {
    strUpperCase[i] = strUpperCase[i][0].toUpperCase() + strUpperCase[i].substring(1);
  }
  return strUpperCase.join(' ');
}
