import React, { useState } from 'react'

function Pokemon() {
    const [pokemons, setPokemons] = useState([])
    async function handleClick() {
        await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
            .then(res => res.json())
            .then(res => setPokemons(res.results))
            .catch(err => console.log(err))
    }
    return ( 
        <div>
        <button onClick = { handleClick } > Fetch Pokemon </button> 
        <ol > 
            {pokemons.map((pokemon, i) => ( 
                <li key = { i } > { pokemon.name } </li>
            ))
            } 
        </ol> 
        </div>
    )
}

export default Pokemon;
