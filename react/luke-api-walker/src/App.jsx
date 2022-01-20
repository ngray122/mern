import './App.css';
import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import axios from 'axios'
import Person from './components/People';
import Planet from './components/Planet';



function App() {

  
  const [idInfo, setIdInfo] = useState('')



  const getStarWarsInfo = (e) => {
    e.preventDefault();
      console.log("Button Clickerrrrrrrr")
  }

  

  const handleSelect=(e)=>{
    // console.log("working")
    // if (e.target.value === "planet") {
    //   setPlanet(e.target.value)

    // } else if (e.target.value === "people") {
    //   setId(e.target.value)
    // }
  }

  return (
    
    <BrowserRouter>
    <div className="App container">
      <h1>Star Wars</h1>
      <form className="form-group">
        <label htmlFor="" className="form-label"></label>
        <div className="form-group form-select-lg">
          <label htmlFor=""></label>
          <select className="form-control" name="" id="" onChange={handleSelect}>
          <option defaultValue="">Choose to search by Person or Planet</option>
            <option value="planet" >Planet</option>
            <option value="people" >People</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="formControlInput" className="form-label"></label>
          <input type="number" className="form-control"  placeholder="Search by ID here" onChange={(e)=>setIdInfo(e.target.value)}></input>
        </div>
        <br />
        <input type="submit" className="btn btn-dark" onClick={getStarWarsInfo}/>
      </form>
    </div >
    <Switch>
    <Route exact path ="/person/:id">
      <Person></Person>
    </Route>
    <Route exact path = "/planet:id">
      <Planet></Planet>
    </Route>
    </Switch>




    </BrowserRouter>


  );
}

export default App;
