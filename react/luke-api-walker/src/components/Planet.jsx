
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router"

const Planet = () => {

    const [listOfPlanets, setPlanetList] = useState([]);
    const { id } = useParams();

    //you need to call the api for the data
    //get the id from the param to make call
    //

    // useEffect(() => {
    //     axios.get("https://swapi.dev/api/planets/")
    //         .then(response => {
    //             // console.log("response =>", response.data);
    //             setPlanetList(response.data.results)
    //             console.log(listOfPlanets)
    //         })
    //         .catch(err => {
    //             console.log("error!! ====> ", err);
    //         })
    // }, [id])




    return (
        <div>
        {
            listOfPlanets.filter((planet, i) => {
                return i == id
            }).map((planet) => { 
                return(
                <>
                <h1>Name : {planet.name}</h1>
                <h3>Climate : {planet.climate}</h3>
                <h3>Population : {planet.population}</h3>
                <h3>Terrain: {planet.terrain}</h3>
                </>
                )
            })
        }
        {/* {
            listOfPeople.map((planet) => {
                return (
                    <>
                        <h1>Name : {planet.name}</h1>
                        <h3>Height : {planet.height}</h3>
                        <h3>Birth Year : {planet.birth_year}</h3>
                        <h3>Eye Color : {planet.eye_color}</h3>
                    </>
                )


            })
        } */}
    </div>
    )
}

export default Planet;
