import React from 'react';
import { useEffect, useState } from 'react';
import PokemonItem from './PokemonItem';
import PokemonDetail from './PokemonDetail';
import {Pokemon} from '../datatypes';
import { getNodeText } from '@testing-library/react';


function PokemonList() {
  
  const [pageNo, setPageNo] = useState(0);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [selectedPokeUrl, setSelectedPokeUrl] = useState("");

  useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${pageNo*50}`)
    .then(response => response.json())
    .then(data => {
      setPokemons(data.results)
    });
  },[pageNo])

  return (
    <div className='App'>
      <div className='poke-list-container'>
      <div className="poke-list-paginator">
        <a href='#' className={pageNo===0 ? "disabled" : ""} onClick={() => setPageNo(pageNo-1) }>previous</a>
        <span>{` ${pageNo + 1}/23 `}</span>
        <a href='#' className={pageNo===22 ? "disabled" : ""} onClick={() => setPageNo(pageNo+1)}>next</a>
      </div>
        {pokemons.length > 0 ?
        pokemons.map((poke,i)=> {
          return (
            <PokemonItem key={`pokeItem_${i}`} pokemon={poke} getPokeUrl={setSelectedPokeUrl}/>
          )
        })
        :
        <div className="loading-container">Loading Pokémons...</div>
        }
      </div>
      <PokemonDetail url={selectedPokeUrl} />
    </div>
  );
}

export default PokemonList;