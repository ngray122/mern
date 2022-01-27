import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Link
} from "react-router-dom"



const View = (props) => {
  // when getting multiple objects, use an array
  let [arrOfObs, setArrOfObs] = useState([])
  let [deleted, setDeleted] = useState(false); 


  // useEffect NEEDS a CALLBACK function!!!!!
  useEffect(() =>
    axios.get("http://localhost:8000/api/product/all")
      .then(res => {
        // console.log("RESPONSE get all ====>>>> ", res.data.result)
        setArrOfObs(res.data.result)
        // Do not conosle log state var, log res!!!
        // console.log("arrOfObs log ==> ", arrOfObs)
      })
      .catch(err => console.log("error in submitting get all request"))
    , [deleted, props.refresh])


    const deleteOneProduct = (prodId)=>{
      console.log(prodId)
      axios.delete(`http://localhost:8000/api/product/delete/${prodId}`)
      .then(res =>
        setDeleted(!deleted)
      )
      .catch(err => console.log("error in submitting delete request"))
    }

  return (

    <div className="container">

      <h2>Click on product below to view</h2>
      {
        arrOfObs.map((productObj, i) => {
          return (
          <div key={i} style={{border: "1px solid black"}} className="w-25 m-4 p-2" >
            <Link  to={`/product/view/${productObj._id}`} style={{ textDecoration: "none" }}><h4 >{productObj.title}</h4></Link>

            <Link to={`/product/edit/${productObj._id}`} className="btn btn-primary m-3"><p >Edit Product</p></Link>

            <button onClick ={()=>deleteOneProduct(productObj._id)} className="btn btn-primary">Delete Product</button>
            </div>

          )
        }
        )
      }
    </div>

  )


};

export default View;

