import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
    BrowserRouter,
    Link
} from "react-router-dom";


const AddAuthorForm = (props) => {

    let [name, setName] = useState('');

    // validation errors
    let [formErr, setFormErr] = useState({});

    const history = useHistory();


    const submitHandler = (e) => {
        e.preventDefault();
        let formInputObj = { name }
        axios.post("http://localhost:8000/api/author/create", formInputObj)
            .then(res => {
                console.log("SUCCESSFULLY submitted post req ==>", res)
                // moved up from line 30, after .then Inputs are not being cleared after submit
                // setFormErr({})
                if (res.data.error) {
                    setFormErr(res.data.error.errors)
                } else {
                    history.push('/')
                }
            })
            .catch(err => console.log("error in submitting post request", err))

        // const numValidator = (e) => {
        //     // regex: /^[0-9\b]+$/; for form number input? Not able to inout floating point numbers
        // }

    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to= {'/'}>Home</Link>
            <h3>Add a new author:</h3>
            <form onSubmit={submitHandler}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Name:</span>
                    <input type="text" value={name} className="form-control" placeholder="Add Author" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => setName(e.target.value)} />

                </div>
                <p>{formErr.name?.message}</p>

                <div>
                    <input className="btn btn-primary m-4" type="submit" value="Create Author" />
                    <Link to={'/'} className="btn btn-primary mx-3">Cancel</Link>
                </div>
            </form>
        </div>
    )
};

export default AddAuthorForm;