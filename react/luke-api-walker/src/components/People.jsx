import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from "react-router"


const People = () => {

    const { id } = useParams();
    
    const [personInfo, setPersonInfo] = useState('')

    const [listOfPeople, setPeopleList] = useState([])

    useEffect(() => {
        axios.get("https://swapi.dev/api/people/")
            .then(response => {
                console.log("response =>", response.data);
                setPersonInfo(response.data.results)
            })
            .catch(err => {
                console.log("error!! ====> ", err);
            })
    }, [])







    return (
        <div>
            <h1>Hello From People</h1>
            {
                listOfPeople.map(() => {  })
            }
        </div>
    )
}

export default People
