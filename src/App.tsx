import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonList from './components/PokemonList'

function App() {
  return (
    <div>
      <header className='App-header'>A Simple Pokédex</header>
      <PokemonList/>
    </div>
  );
}

export default App;
