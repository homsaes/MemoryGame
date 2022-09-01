import { React } from "../../dep.ts"
import IPokemonCard from '../../models/pokemon_card.ts'

function Card ( { name, url_image }: IPokemonCard ) {

    const [isSelected, setSelected] = React.useState(false)

    return (
        <div className={`card ${isSelected ? "selected": ""}`} onClick={ () => setSelected(current => !current)}>
            <img src={url_image} alt={name} />
        </div>
    )
}

function Board ( { listOfPokemons }: { listOfPokemons: IPokemonCard[] }) {

    const crypto = globalThis.crypto;
    const board_cards = listOfPokemons.concat(listOfPokemons)

    board_cards.sort(() => Math.random() - 0.5)

    return (
        <div className="board">
            { board_cards.map( ({name, url_image}) => <Card key={crypto.randomUUID()} name={name} url_image={url_image} />) }
        </div>
    )
}

export default Board