import React, { useState, useEffect } from 'react'
import axios from 'axios'


const PokeApiAxios = () => {

    let [pokeInfo, setPokeInfo] = useState([]);

    let [search, setSearch] = useState('')



    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100")
            .then(response => {
                console.log("response =>", response.data);
                setPokeInfo(response.data.results)
            })
            .catch(err => {
                console.log("error!! ====> ", err);
            })
    }, [])


    return (
        <div>
            <h1>Pokemon Information</h1>

            <p>Search by name:<input type="text" placeholder="search" onChange={(e)=> setSearch(e.target.value)}/></p>

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
