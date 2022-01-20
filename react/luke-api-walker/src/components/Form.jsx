
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router"
import { useHistory } from "react-router-dom";

export const Form = () => {
    const history = useHistory();

    const [formInfo, setFormInfo] = useState({
        id: 1,
        category: ''
    })

    const pushToComponent = (e) => {
        e.preventDefault();
        // console.log("Button Clickerrrrrrrr")
        //take them to the route that my form state says
        history.push(`/${formInfo.category}/${formInfo.id}`)
    }

    const handleSelect = (e) => {
        setFormInfo({
            ...formInfo,
            category: e.target.value
        })
    }
    return <div>

        <div className="container">
            <h1>Star Wars</h1>
            <form className="form-group" onSubmit={pushToComponent}>
                <label htmlFor="" className="form-label"></label>
                <div className="form-group form-select-lg">
                    <label htmlFor=""></label>
                    <select className="form-control" name="" id="" onChange={handleSelect}>
                        <option defaultValue="">Choose to search by Person or Planet</option>
                        <option value="planet" >Planet</option>
                        <option value="person" >Person</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="formControlInput" className="form-label"></label>
                    <input type="number" className="form-control" placeholder="Search by ID here" onChange={(e) => setFormInfo({ ...formInfo, id: e.target.value })}></input>
                </div>
                <br />
                <input type="submit" className="btn btn-dark" />
            </form>
        </div >
    </div>;
};


export default Form;