const fs = require('fs');

const getRandomNumber = Math.random();

fs.writeFile('random.txt', getRandomNumber.toString(), 'utf8', err => {
  if (err) throw err;
});
