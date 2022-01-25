import React, { useState } from "react";
import axios from "axios";


const ProductForm = () => {
    // const [message, setMessage] = useState('Loading....')
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');


    const submitHandler = (e) => {
        e.preventDefault();
        console.log(title, price, description)
        let formInputObj = { title, price, description }
        console.log(formInputObj)
        axios.post("http://localhost:8000/api/product/create", formInputObj)
            .then(res =>
                console.log("Response ------>>>>>>>>", res))
            .catch(err => console.log("error in submitting post request"))
    }





    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={submitHandler}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Title:</span>
                    <input type="text" className="form-control" placeholder="Add Title" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Price:</span>
                    <input type="number" className="form-control" placeholder="Add Price" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Description:</span>
                    <input type="text" className="form-control" placeholder="Add Description" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Create Product" />
                </div>
            </form>
        </div>
    )
};

export default ProductForm;