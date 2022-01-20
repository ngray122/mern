
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from "react-router"

const Planet = () => {


    const [planetInfo, setPlanetInfo] = useState('')

    const [listOfPlanets, setPlanetList] = useState([]);

    const { id } = useParams();




    // useEffect(() => {
    //     axios.get("https://swapi.dev/api/planets/")
    //         .then(response => {
    //             console.log("response =>", response.data);
    //             setPlanetList(response.data.results)
    //         })
    //         .catch(err => {
    //             console.log("error!! ====> ", err);
    //         })
    // }, [])



    return (
        <div>
            <h1>Hello From Planet</h1>
        </div>
    )
}

export default Planet
