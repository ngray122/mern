
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router"
import { useHistory } from "react-router-dom";
import axios from 'axios';
import styles from "./Form.module.css"



export const Form = () => {
    const history = useHistory();
    const { id } = useParams();

    const [formInfo, setFormInfo] = useState([])
    const [selectCategory, setSelectCategory] = useState("people")
    const [selectId, setSelectId] = useState(null)


    useEffect(() => {
        axios.get(`https://swapi.dev/api/`)
            .then(response => {
                // console.log("response =>", response.data);
                 // console.log(Object.keys(response.data))
                setFormInfo(Object.keys(response.data))
            })
            .catch(err => {
                console.log("error!! ====> ", err);
            })
    }, [id])


    const pushToComponent = (e) => {
        e.preventDefault();
        // console.log("Button Clickerrrrrrrr")
        //take them to the route that my form state says
        history.push(`/${selectCategory}/${selectId}`)
    }

    return <div>

        <div className="container card">
            <h1 className='card-header text-decoration-underline'>Star Wars API</h1>
            <form className="form-group" onSubmit={pushToComponent}>
                <div className="form-group form-select-lg">
                <label htmlFor="" className="form-label ">Choose a category from the drop down:</label>
                    <select className="form-select form-select-lg mb-3" name="" id="" onChange={(e)=>setSelectCategory(e.target.value)}>
                    {
                        formInfo.map((category, i)=>{
                            return (
                                <>
                                <option key={id} value={category}>{category}</option>
                                </>
                            )
                        })
                    }
                    </select>
                </div>
                <div className="input-group input-group-lg">
                    <label htmlFor="formControlInput" className="form-label"></label>
                    <input type="number" className="form-control" placeholder="Enter ID here" onChange={(e) => setSelectId(e.target.value)}></input>
                </div>
                <br />
                <input type="submit" className="btn btn-dark center"/>
            </form>
            <br />
            <br />
        </div >
    </div>;
};


export default Form;