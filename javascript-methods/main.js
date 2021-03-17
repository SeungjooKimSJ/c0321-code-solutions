var x = 2;
var y = 8;
var z = 24;
var maximumValue = Math.max(x, y, z);

console.log('value of maximumValue:', maximumValue);

var heroes = ['Thor', 'Doctor Strange', 'Deadpool', 'Wanda'];
var randomNumber = Math.random() * heroes.length;
var randomIndex = Math.floor(randomNumber);

console.log('value of randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('value of randomHero:', randomHero);

var library = [
  {
    title: 'One Piece',
    author: 'Eiichiro Oda'
  },
  {
    title: 'Dragon Ball',
    author: 'Akira Toriyama'
  },
  {
    title: 'Slam Dunk',
    author: 'Takehiko Inoue'
  }
];

var lastBook = library.pop();

console.log('value of lastBook:', lastBook);

var firstBook = library.shift();

console.log('value of firstBook:', firstBook);

var fairyTale = {
  title: 'Fairy Tail',
  author: 'Hiro Mashima'
};

var demonSlayer = {
  title: 'Demon Slayer: Kimetsu no Yaiba',
  author: 'Koyoharu Gotouge'
};

library.push(fairyTale);
library.unshift(demonSlayer);
library.splice(1, 1);

console.log('value of library:', library);

var fullName = 'SJ Kim';
var firstAndLastName = fullName.split(' ');

console.log('value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('value of sayMyName:', sayMyName);
