import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



const Detail = () => {

    const { id }= useParams();

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


    return (
        <div>
            <h1>Product information</h1>
            <br />
            <h3>{productDetail.title}</h3>
            <p>Price: {productDetail.price}</p>
            <p>Description: {productDetail.description}</p>
            <p>Product Id: {productDetail._id}</p>
        </div>

    )
};

export default Detail;
