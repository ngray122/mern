import logo from './logo.svg';
import './App.css';
import React from 'react';
import Main from './views/Main';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"

function App() {
  return (
    <BrowserRouter >
      <div className="App container">
    <Switch>

      <Route exact path = "/">
          <Main/>
      </Route>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
