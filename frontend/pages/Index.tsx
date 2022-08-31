import {React, ReactDOMServer} from '../../dep.ts'
import Board from '../components/Game.tsx'
import IPokemonCard from '../../models/pokemon_card.ts'

function Index () {

    return (
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script type="module" src="/static/bundle.js"></script>
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet" />
                <link href="/static/game.css" rel="stylesheet" />
            <title>Memory Game</title>
        </head>
        <body>
            <div id="root">
            </div>
        </body>
        </html>`
    )
}

export default Index