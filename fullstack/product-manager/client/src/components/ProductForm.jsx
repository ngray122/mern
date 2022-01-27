import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


const ProductForm = (props) => {

    let [title, setTitle] = useState('');
    let [price, setPrice] = useState('');
    let [description, setDescription] = useState('');
    let [formErr, setFormErr] = useState('');
    const history = useHistory();


    const submitHandler = (e) => {
        e.preventDefault();
        let formInputObj = { title, price, description }
        axios.post("http://localhost:8000/api/product/create", formInputObj)
            .then(res => {
                console.log("SUCCESSFULLY submitted post req ==>", res)
                if (res.data.error) {
                    setFormErr(res.data.error.errors)
                }
            })
            .catch(err => console.log("error in submitting post request", err))
        props.setRefresh(!props.refresh)
        e.target.reset() //clears inputs

        

        // const numValidator = (e) => {
        //     // regex: /^[0-9\b]+$/; for form number input? Not able to inout floating point numbers
        // }

    }


    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={submitHandler}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Title:</span>
                    <input type="text" value={title} className="form-control" placeholder="Add Title" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => setTitle(e.target.value)} />

                </div>
                <p>{formErr.title?.message}</p>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Price:</span>
                    <input value={price} type="number" className="form-control" placeholder="Add Price" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => setPrice(e.target.value)} />

                </div>
                <p>{formErr.price?.message}</p>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Description:</span>
                    <input value={description} type="text" className="form-control" placeholder="Add Description" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => setDescription(e.target.value)} />
                </div>
                <p>{formErr.description?.message}</p>
                <div>
                    <input className="btn btn-primary m-4" type="submit" value="Create Product" />
                </div>
            </form>
        </div>
    )
};

export default ProductForm;