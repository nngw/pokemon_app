import React from 'react'
import './style.css'
import { PokemonCard } from '..'

const Pokedex = (props) => {
  return (
    <div >
      <div className='card-container'>
        {props.pokemon.map((p, idx) => {
          return (
            <PokemonCard key={idx} pokemon={p} />
          )
        })}
      </div>
    </div>
  )
}

export default Pokedex
