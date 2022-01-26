import './App.css';
import React from 'react';
// import Main from './views/Main';
import ProductForm from "./components/ProductForm"
import View from './components/View';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"

function App() {
  return (
    // Front End routes just tell me what component to show
    <BrowserRouter >
      <div className="App container">
        <Switch>
          <Route exact path="/">
            <ProductForm></ProductForm>
            <View></View>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
