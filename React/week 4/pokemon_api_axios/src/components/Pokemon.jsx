import React, { useState } from 'react'
import axios from 'axios'

function Pokemon() {
    const [pokemons, setPokemons] = useState([])
    
    const handleClick = () => {
		axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
			.then((response) => setPokemons(response.data.results))
            .catch((error) => console.log(error));

	};

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
