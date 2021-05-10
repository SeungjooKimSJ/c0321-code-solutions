const takeAChance = require('./take-a-chance');

const promise = takeAChance('SJ');

promise.then(message => {
  console.log(message);
});

promise.catch(error => {
  console.log(error.message);
});
