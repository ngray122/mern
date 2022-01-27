import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import {
    Link
} from "react-router-dom"



const Detail = () => {

    const { id } = useParams();
    const history = useHistory();

    let [productDetail, setProductDetail] = useState({});

    useEffect(() =>
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                console.log("RESPONSE get one ====>", res)
                setProductDetail(res.data.result)
                // console.log("PROD DETAIL ==>", productDetail)
            })
            .catch(err => console.log("error in submitting get one request"))
        , [])

    const deleteOneProduct = () => {
        axios.delete(`http://localhost:8000/api/product/delete/${id}`)
            .then(res =>
                // with console log not commented out, '/' does not refresh with delted item.  Hard refresh removes item.  Is it not hitting the .push because of the console.log
                // console.log("SUCCESS Delete response ==> ", res),
                history.push('/')
            )
            .catch(err => console.log("error in submitting delete request"))
    }


    return (
        <div>
            <h1>Product information</h1>
            <br />
            <h3>{productDetail.title}</h3>
            <p>Price: {productDetail.price}</p>
            <p>Description: {productDetail.description}</p>
            <p>Product Id: {productDetail._id}</p>
            <button onClick={deleteOneProduct} className="btn btn-info">Delete Product</button>
            <Link to={'/'} className="btn btn-info mx-3"><p >Home</p></Link>
        </div>


    )
};

export default Detail;
