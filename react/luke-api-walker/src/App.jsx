import './App.css';
import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Person from './components/People';
import Planet from './components/Planet';
import Form from './components/Form';
import People from './components/People';



function App() {

  return (

    <BrowserRouter>
      {/* IS ALWAYS DISPLAYED */}
      <Form></Form>
      {/* PATHS IN ROUTE WILL ONLY BE DISPLAYED AT EXACT PATH*/}
      <Switch>
        <Route exact path="/person/:id">
          <People></People>
        </Route>
        <Route exact path="/planet/:id">
          <Planet></Planet>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
