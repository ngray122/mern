import React from "react"
import './App.css';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom"
import Word from "./components/Word";
import Number from "./components/Number";
import ColorWord from "./components/ColorWord";



function App() {

  return (
    <BrowserRouter>
    <div className="container">
      <h1>Routing Practice</h1>
      <ul>
        <li><Link to="/home">To route: home</Link></li>

        {/* Number Component */}
        <li> <Link to="/pick/4">To route: number</Link></li>

        {/* Word Component */}
        <li> <Link to="/hello">To route: word</Link></li>

        {/* ColorWord Component */}
        <li> <Link to="/hello/blue/red">To route: /hello/blue/red</Link></li>
      </ul>
        
        <Switch>
          <Route exact path="/home"><h1>Welcome</h1></Route>

          {/* Number Component */}
          <Route exact path="/pick/:num">
            <Number></Number>
          </Route>

          {/* Word Component */}
          <Route exact path="/:word">
            <Word></Word>
          </Route>

          {/* ColorWord Component */}
          <Route exact path="/:word/:backColor/:color">
          <Word></Word>
          </Route>
        </Switch>
    </div>
    </BrowserRouter>

  );
}

export default App;
