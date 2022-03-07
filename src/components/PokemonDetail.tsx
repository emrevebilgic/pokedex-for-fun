import React from 'react';
import { useEffect, useState } from 'react';
import {PokemonDetailProps} from '../datatypes';


function PokemonDetail(props: PokemonDetailProps ) {

  const [pokeDetail, setPokeDetail] = useState<any>(null)

  useEffect(()=> {
    if(props.url) {
      fetch(props.url)
      .then(response => response.json())
      .then(data => {setPokeDetail(data); console.log(data)})
    }
  },[props.url])

  return (
    pokeDetail ? 
      <div className="poke-detail-container">
      <div className='poke-detail-header'>
        <div className="poke-img-lg">
          <img style={{height:"inherit"}} src={pokeDetail.sprites.front_default} />
        </div>
        <div className="poke-detail-header-text">
          <h4>{`#${pokeDetail.id}`}</h4>
          <h1>{pokeDetail.name}</h1>
          <p><span>Species: </span>
            {pokeDetail.species.name}
          </p>
          <p><span>Types: </span>
            {
              pokeDetail.types.map((elem:any) => {
                return `${elem.type.name}, `
              })
            }
          </p>
          <p><span>Weight: </span>
            {pokeDetail.weight}
          </p>
          <p><span>Stats: </span>
            {
              pokeDetail.stats.map((elem:any) => {
                return `${elem.stat.name}: ${elem.base_stat}, `
              })
            }
          </p>
          <p><span>Moves: </span>
            {
              pokeDetail.moves.map((elem:any) => {
                return `${elem.move.name}, `
              })
            }
          </p>
        </div>
      </div>
      </div>
      :
      <div className="poke-detail-container">
        <div className='loading-container'>Please select a pokémon...</div>
      </div>
  );
}

export default PokemonDetail;