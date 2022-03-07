import React from 'react';
import { useEffect, useState } from 'react';
import {PokemonItemProps} from '../datatypes';

function PokemonItem(props: PokemonItemProps) {


    const [imageLink, setImageLink] = useState("");
    const [pokeId, setPokeId] = useState(0);

    useEffect(()=> {
        fetch(props.pokemon.url)
        .then(response => response.json())
        .then(data => {setImageLink(data.sprites.front_default); setPokeId(data.id)})
    },[props.pokemon])

  return (
    <div>
      <a href="#" style={{textDecoration:"none"}} onClick={()=>props.getPokeUrl(props.pokemon.url)}>
        <div  className='poke-item-container'>
        <img className='poke-img-sm' src={imageLink}/>
        <div>
          <span className='poke-number'>{`#${pokeId}`}</span>
          <h2 className='poke-name'>
            {props.pokemon.name}
          </h2>
        </div>
        </div>
      </a>
    </div>
  );
}

export default PokemonItem;