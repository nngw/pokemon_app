import React from 'react'
import './style.css'

const PokemonCard = (pokemon) => {
  return (
    <>
      <div className='pokemon-card-container'>
        <div className='pokemon-card-border'>
          <div className='pokemon-name'>
          {pokemon.pokemon.name}
          </div>
          <div className='pokemon-image'>
            <img src={pokemon.pokemon.image} alt="" />
          </div>
          <div className='pokemon-type'>
            Type: {pokemon.pokemon.type}
        </div>
        </div>
      </div>
    </>
    
  )
}

export default PokemonCard
