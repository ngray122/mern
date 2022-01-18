import React, { useState } from 'react'

const PokeApi = () => {

    let [pokeInfo, setPokeInfo] = useState([]);

    const getPokemonInfo = () => {

        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response =>{
            return response.json();
        })
        .then(response => {
            console.log("response =>", response.results);
            setPokeInfo(response.results)
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

export default PokeApi
