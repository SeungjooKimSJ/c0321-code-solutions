import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

class RenderPokemon extends React.Component {
  render() {
    const pokemonList = this.props.pokedex;
    const liItems = pokemonList.map(pokemon =>
      <li key={pokemon.number}>
        {pokemon.name}
      </li>
    );

    return (
      <ul>
        {liItems}
      </ul>
    );
  }
}

ReactDOM.render(
  <RenderPokemon pokedex={pokedex} />,
  document.querySelector('#root')
);
