fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => console.log(users));

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(res => res.json())
  .then(bulbasaur => console.log(bulbasaur));
