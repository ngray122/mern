import './App.css';
import React, {useState} from 'react';
// import Main from './views/Main';
import ProductForm from "./components/ProductForm"
import View from './components/View';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"
import Detail from './components/Detail';
import EditForm from './components/EditForm';


function App() {

  let [refresh, setRefresh] = useState(false)

  return (
    // Front End routes just tell me what component to show

    <BrowserRouter >
      <div className="App container">
        <Switch>

          <Route exact path="/">
            <ProductForm refresh={refresh} setRefresh={setRefresh}></ProductForm>
            <View refresh={refresh}></View>
          </Route>

          <Route exact path='/product/view/:id'>
            <Detail></Detail>
          </Route>

          <Route exact path='/product/edit/:id'>
          <EditForm></EditForm>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
