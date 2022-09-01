import {React, ReactDOM} from './dep.ts'
import Board from './frontend/components/Game.tsx'
import getPokemons from './pokeapi.ts'

const list_of_pokemons = await getPokemons(6)

ReactDOM.render(
  <Board listOfPokemons={ list_of_pokemons }/>,
  // @ts-ignore: Render
  document.getElementById("root"),
)
