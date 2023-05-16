import { useEffect, useState } from 'react'
import { TitleCard, Pokedex } from './componants'

function App() {
  // const [pokemon, setPokemon] = useState([
  //   {
  //     id: 1,
  //     name: "Charmander",
  //     type: "fire",
  //     image:
  //       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  //   },
  //   {
  //     id: 2,
  //     name: "Squirtle",
  //     type: "water",
  //     image:
  //       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  //   },
  //   {
  //     id: 3,
  //     name: "Butterfree",
  //     type: "flying",
  //     image:
  //       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
  //   },
  //   {
  //     id: 4,
  //     name: "Rattata",
  //     type: "normal",
  //     image:
  //       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
  //   },
  //   {
  //     id: 5,
  //     name: "Metapod",
  //     type: "bug",
  //     image:
  //       "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
  //   },
  // ])

  const [pokemon, setPokemon] = useState([])
  const [url, setUrl] = useState([])

  useEffect(() => {
    async function getPokemon() {
      try {
        const result = await fetch('https://pokeapi.co/api/v2/pokemon/1')
        const data = await result.json()
        // console.log(data.results)
        // setPokemon(data.results)
        // setUrl(data)
        // console.log(url.name)
        console.log(data.sprites.front_default)
      } catch (error) {
        console.log(error)
      }
    }

    getPokemon()
  },[])


  return (
    <>
      <TitleCard />
      <Pokedex pokemon={pokemon} setPokemon={setPokemon} />
    </>
  )
}

export default App
