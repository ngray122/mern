import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Location from './components/Location';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>App Router</h1>
        <p>
          <Link to="/">Home</Link>
          <br />
          <Link to="/location">Location</Link>
        </p>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/location">
            <Location></Location>
          </Route>
        </Switch>


      </div>
    </BrowserRouter>
  );
}

export default App;
