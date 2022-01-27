
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import {
    BrowserRouter,
    Link
} from "react-router-dom";



const EditAuthor = () => {

    let [name, setName] = useState('');
    let [oneAuthor, setOneAuthor] = useState({})

    // validation errors
    let [formErr, setFormErr] = useState({});

    const history = useHistory();

    let { id } = useParams();


    useEffect(() =>
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                console.log("RESPONSE get one ====>", res)
                setOneAuthor(res.data.result)
            })
            .catch(err => console.log("error in submitting get one request"))
        , [])


    // Don't forget to add name="" for each property
    const onChangeHandler = (e) => {
        console.log("Change handler working")
        setOneAuthor({
            ...oneAuthor,
            [e.target.name]: e.target.value
        })
    }





    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/author/update/${id}`, oneAuthor)
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
            .catch(err => console.log("error in submitting put request", err))
    }



    return (
        <div>
            <h1 className="m-4">Favorite Authors</h1>
            <Link to= {'/'}>Home</Link>
            <p className="m-4">Edit this author:</p>
            <form onSubmit={submitHandler} className="border border-dark p-md-5">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Name:</span>
                    <input type="text" name="name" value={oneAuthor.name} className="form-control" placeholder="Add Title" aria-label="Username" aria-describedby="basic-addon1" onChange={onChangeHandler} />
                </div>
                <p>{formErr.name?.message}</p>

                <div>
                    <input className="btn btn-primary m-4" type="submit" value="Submit" />
                    <Link to={'/'} className="btn btn-primary mx-3">Cancel</Link>
                </div>
            </form>

        </div>

    )
};

export default EditAuthor;
