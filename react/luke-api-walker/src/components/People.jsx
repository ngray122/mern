import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router"


const People = () => {

    const { id } = useParams();

    const [listOfPeople, setPeopleList] = useState([])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/`)
            .then(response => {
                // console.log("response =>", response.data);
                setPeopleList(response.data.results)
                // console.log(response.data.results)
                console.log(listOfPeople)
            })
            .catch(err => {
                console.log("error!! ====> ", err);
            })
    }, [id])


    return (
        <div>
            {
                listOfPeople.filter((person, i) => {
                    return i == id
                }).map((person) => { 
                    return(
                    <>
                    <h1>Name : {person.name}</h1>
                    <h3>Height : {person.height}</h3>
                    <h3>Birth Year : {person.birth_year}</h3>
                    <h3>Eye Color : {person.eye_color}</h3>
                    </>
                    )
                })
            }
            {/* {
                listOfPeople.map((person) => {
                    return (
                        <>
                            <h1>Name : {person.name}</h1>
                            <h3>Height : {person.height}</h3>
                            <h3>Birth Year : {person.birth_year}</h3>
                            <h3>Eye Color : {person.eye_color}</h3>
                        </>
                    )


                })
            } */}
        </div>
    )
}

export default People
