import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
// import Planet from './components/Planet';
import Form from './components/Form';
import People from './components/People';




function App() {

  return (

    <BrowserRouter className="container-fluid">
      {/* IS ALWAYS DISPLAYED */}
      <Form></Form>
      {/* PATHS IN ROUTE WILL ONLY BE DISPLAYED AT EXACT PATH*/}
      <Switch>
      <Route exact path="/:category/:id">
          <People></People>
      </Route>

        {/* <Route exact path="/:person/:id">
          <People></People>
        </Route>
        <Route exact path="/:planet/:id">
          <Planet></Planet>
        </Route> */}

      </Switch>
    </BrowserRouter>
  );
}

export default App;
