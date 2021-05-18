fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => console.log(users))
  .catch(err => console.eroe('Fetch failed!', err));

fetch('https://pokeapi.co/api/v2/pokemon/143')
  .then(res => res.json())
  .then(snorlax => console.log(snorlax))
  .catch(err => console.error('Fetch failed!', err));
