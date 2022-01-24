import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router"


const People = () => {

    const { category, id } = useParams();

    const [info, setInfoList] = useState([])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then(response => {
                // console.log("response =>", response);
                setInfoList(response.data)
                // console.log(response.data)

            })
            .catch(err => {
                console.log("error!! ====> ", err);
            })
    }, [id, category])

    // When re-visiting, refactor reponse state [], to {} and use key:value pairs to render data*****************
    // Tearney is easier to read than .map/.filter
    // ternay not working on id === null

    return (
        <div className="container card">
            {
                category === "people" ?
                    <>
                        <h1>Name: {info.name}</h1>
                        <p>Height: {info.height}</p>
                        <p>Mass: {info.mass}</p>
                        <p>Eye Color: {info.eye_color}</p>
                        <p>Birth Year: {info.birth_year}</p>``
                    </>
                    : category === "planets" ?
                        <>
                            <h1>Name: {info.name}</h1>
                            <p>Climate: {info.climate}</p>
                            <p>Terrain: {info.terrain}</p>
                            <p>Population: {info.population}</p>
                            <p>Gravity: {info.gravity}</p>
                        </>
                        : category === "species" ?
                            <>
                                <h1>Name: {info.name}</h1>
                                <p>Language: {info.language}</p>
                                <p>Lifespan: {info.average_lifespan}</p>
                                <p>Classification: {info.classification}</p>
                                <p>Language: {info.language}</p>
                            </>
                            : category === "starships" ?
                                <>
                                    <h1>Name: {info.name}</h1>
                                    <p>Model: {info.model}</p>
                                    <p>Crew: {info.crew}</p>
                                    <p>Passangers: {info.passangers}</p>
                                    <p>Hyperdrive Rating: {info.Hyperdrive_rating}</p>
                                </>
                                : category === "films" ?
                                    <>
                                        <h1>Title: {info.title}</h1>
                                        <p>Director: {info.director}</p>
                                        <p>Release Date: {info.release_date}</p>
                                    </>

                                    :
                                    <>
                                        <h1>These aren't the droids you were looking for</h1>
                                        <img src='https://1.bp.blogspot.com/-fuh8RlMgXFA/VqleF80ulvI/AAAAAAAAkYs/TTAM0y9pyog/s1600/Ewan-mcgregor-attack-clones.jpg' alt='star wars obi won kenobi' />
                                    </>
            }
            {
                id < 0 || id === undefined?

                    <>
                        <h1>These aren't the droids you were looking for</h1>
                        <img src='https://1.bp.blogspot.com/-fuh8RlMgXFA/VqleF80ulvI/AAAAAAAAkYs/TTAM0y9pyog/s1600/Ewan-mcgregor-attack-clones.jpg' alt='star wars obi won kenobi' />
                    </>
                :
                    <>

                    </>
            }


        </div>
    )
}

export default People

// {
//     listOfPeople.map((person) => {
//         return (
//             <>
//                 <h1>Name : {person.name}</h1>
//                 <h3>Height : {person.height}</h3>
//                 <h3>Birth Year : {person.birth_year}</h3>
//                 <h3>Eye Color : {person.eye_color}</h3>
//             </>
//         )
//     })
// }



            // {/* {
            //     listOfPeople.filter((person, i) => {
            //         return i == id
            //     }).map((person) => {
            //         return (
            //             <>
            //                 <h1>Name : {person.name}</h1>
            //                 <h3>Height : {person.height}</h3>
            //                 <h3>Birth Year : {person.birth_year}</h3>
            //                 <h3>Eye Color : {person.eye_color}</h3>
            //             </>
            //         )
            //     })
            // } */}