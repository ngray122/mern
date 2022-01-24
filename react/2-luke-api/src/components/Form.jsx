import React from 'react';
import styles from './Form.module.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router"

const Form = () => {

    const { id } = useParams();

    let [category, setCategory] = useState('');
    let [formId, setFormId] = useState(null);
    let [result, setResult] = useState({
        // setCategory() for key?
        // key: value,
    });


    //useEffect must have callback function 
    useEffect(() => {
        axios.get('https://swapi.dev/api/')
            .then(response => {
                // console.log(response.data);
                setResult(response.data)

            })
            .catch(err => {
                console.log("error!! ========> ", err)
            })
        // the call will only be made again when the [id] changes
    }, [id])

    console.log(result)





    return (
        <div className='container'>
            <form className='formInput'>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2 text-white">Category:</label>
                    <select className="custom-select form-control" onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Open this select menu</option>

                    {/*  */}
                        {
                            Object.keys(result).map((key, i) => {
                                return (
                                    <option value="1">{result[key]}</option>

                                )
                            })

                        }

                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">ID:</label>
                    <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="Another input" onChange={(e) => setFormId(e.target.value)} />
                </div>
                {/* <div>
                    <input type="submit" className="btn btn-dark center" />
                    </div> */}
            </form>

        </div>
    );
};

export default Form;
