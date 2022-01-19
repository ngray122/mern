import React, {useState} from "react"
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom"
import { useParams } from "react-router-dom"
import Word from "./components/Word";
import Number from "./components/Number";







function App() {

  // let [number, setNumber] = useState()
  // let [word, setWord] = useState("")

  return (
    <div className="container">
      <h1>Routing Practice</h1>
      <BrowserRouter>
      <ul>
        <li><Link to="/home">To route: home</Link></li>

        {/* Number Component */}
        <li> <Link to="/num">To route: number</Link></li>

        {/* Word Component */}
        <li> <Link to="/words">To route: word</Link></li>

        <li> <Link to="/hello/blue/red">To route: /hello/blue/red</Link></li>
      </ul>
        
        <Switch>
          <Route exact path="/home"><h1>Welcome</h1></Route>

          {/* Number Component */}
          <Route exact path="/:num">
            <Number></Number>
          </Route>

          <Route exact path="/:words">
            <Word></Word>
          </Route>

          <Route exact path="/hello/blue/red"><h1>Hello blue</h1></Route>
        </Switch>


      </BrowserRouter>
    </div>

  );
}

export default App;
