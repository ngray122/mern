import React, { useState } from 'react'
import axios from 'axios'


const PokeApiAxios = () => {

    let [pokeInfo, setPokeInfo] = useState([]);

    const getPokemonInfo = () => {
        console.log("clicked button")
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=10000")
        .then(response => {
            console.log("response =>", response);
            setPokeInfo(response.data.results)
        })
        .catch(err => {
            console.log("error!! ====> ", err);
        })

    }


    return (
        <div>
            <h1>Pokemon Information</h1>
            <button onClick = {getPokemonInfo}>Fetch Poke</button>
            {
                pokeInfo.map((poke, i) => {
                    return (

                    <h3>Pokemon Name:  {poke.name}</h3>

                    )
                    
                })
                
            }
            
        </div>
    )
}

export default PokeApiAxios
