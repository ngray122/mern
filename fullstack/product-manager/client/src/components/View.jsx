import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Link
} from "react-router-dom"



const View = () => {
  // when getting multiple objects, use an array
  let [arrOfObs, setArrOfObs] = useState([])


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
    , [])

  return (

    <div>

      <h2>Click on product below to view</h2>
      {
        arrOfObs.map((productObj, i) => {
          return (
          
            <Link key={i} to={`/product/view/${productObj._id}`} style={{ textDecoration: "none" }}><h4 >{productObj.title}</h4></Link>
          )
        }
        )
      }
    </div>

  )


};

export default View;

