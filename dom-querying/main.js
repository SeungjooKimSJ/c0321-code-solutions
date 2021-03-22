console.log('hello, world');

var $h1 = document.querySelector('h1');

console.log('value of $h1:', $h1);
console.dir($h1);

var $explanation = document.querySelector('#explanation');

console.log('value of $explanation:', $explanation);
console.dir($explanation);

var $hint = document.querySelector('.hint');

console.log('value of $hint:', $hint);
console.dir($hint);

var $allParagraphs = document.querySelectorAll('p');

console.log('value of $allParagraphs:', $allParagraphs);
console.dir($allParagraphs);

var $exampleLinks = document.querySelectorAll('.example-link');

console.log('value of $exampleLinks:', $exampleLinks);
console.dir($exampleLinks);
