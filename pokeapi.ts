import { randomNumber } from 'https://deno.land/x/random_number@2.0.0/mod.ts'
import IPokemonCard from './models/pokemon_card.ts'

function getRandNumber(min: number, max: number): number {
    return randomNumber({ min, max })
}

async function getPokemon (): Promise<IPokemonCard> {
    const maxPokemonNum = 100
    const randPokemonURL = `https://pokeapi.co/api/v2/pokemon/${+getRandNumber(1, maxPokemonNum)}`

    const page = await fetch(randPokemonURL)
    const result = await page.json()
    
    return {
        name: result['name'],
        url_image: result.sprites.other['official-artwork'].front_default
    }
}

function pokemonIsInList(pokemon: IPokemonCard, pokemon_list:IPokemonCard[]): boolean {
    return pokemon_list.filter( (item) =>
        JSON.stringify(item) === JSON.stringify(pokemon)
    ).length != 0
}

async function genNoDuplicatePokemons(generated_pokemons: IPokemonCard[]): Promise<IPokemonCard> {
    let new_pokemon: IPokemonCard
    do {
        new_pokemon = await getPokemon()
    } while (pokemonIsInList(new_pokemon, generated_pokemons))
    return new_pokemon
}

async function getPokemons (number_of_pokemons: number): Promise<IPokemonCard[]> {
    const pokemon_list: IPokemonCard[] = []

    for (let index = 0; index < number_of_pokemons; index++) {
        pokemon_list.push(await genNoDuplicatePokemons(pokemon_list))
    }
    return Promise.all(pokemon_list)
}

export default getPokemons