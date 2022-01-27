import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";


const EditForm = () => {
    let { id } = useParams();
    let history = useHistory();
    let [editErr, setEditErr] = useState('')

    const [oneProduct, setOneProduct] = useState({});



    useEffect(() =>
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                console.log("RESPONSE get one ====>", res)
                setOneProduct(res.data.result)
            })
            .catch(err => console.log("error in submitting get one request"))
        , [])





    // Don't forget to add name="" for each property
    const onChangeHandler = (e) => {
        console.log("Chahe handle workking")
        setOneProduct({
            ...oneProduct,
            [e.target.name]: e.target.value
        })
    }





    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/update/${id}`, oneProduct)
            .then(res => {
                console.log("RESPONSE get updated====>", res)
                if (res.data.error) {
                    setEditErr(res.data.error.errors)
                }
                history.push('/')
            })
            .catch(err => console.log("error in submitting get one request"))

    }




    return (
        <div >
            <h1 className="mb-4">Edit Product</h1>
            <form onSubmit={onSubmitHandler} className="border border-dark p-md-5">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Title:</span>
                    <input type="text" name="title" value={oneProduct.title} className="form-control" placeholder="Add Title" aria-label="Username" aria-describedby="basic-addon1" onChange={onChangeHandler} />
                </div>
                <p>{editErr.title?.message}</p>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Price:</span>
                    <input name="price" value={oneProduct.price} type="text" className="form-control" placeholder="Add Price" aria-label="Username" aria-describedby="basic-addon1" onChange={onChangeHandler} />
                </div>
                <p>{editErr.price?.message}</p>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Description:</span>
                    <input value={oneProduct.description} name="description" type="text" className="form-control" placeholder="Add Description" aria-label="Username" aria-describedby="basic-addon1" onChange={onChangeHandler} />
                </div>
                <p>{editErr.description?.message}</p>
                <div>
                    <input className="btn btn-warning m-4" type="submit" value="Edit Product" />
                </div>
            </form>
        </div>
    )
};

export default EditForm;