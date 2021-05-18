fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => console.log(users));

fetch('https://pokeapi.co/api/v2/pokemon/143')
  .then(res => res.json())
  .then(snorlax => console.log(snorlax));
