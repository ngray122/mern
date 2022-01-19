import React from "react"
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom"



const Number = () => {
  return (
    <div>
      <h1>from number componetn</h1>
    </div>
  )
}
const Word = () => {
  return (
    <div>
      <h1>The word is: heyyyyyyyyyy</h1>
    </div>
  )
}





function App() {

  return (
    <div className="container">
      <BrowserRouter>
      <ul>
        <li><Link to="/home">To route: localhost:3000/home</Link></li>
        <li> <Link to="/4">To route: localhost:3000/4</Link></li>
        <li> <Link to="/hello">To route:  localhost:3000/hello</Link></li>
        <li> <Link to="/hello/blue/red">To route: localhost:3000/hello/blue/red</Link></li>
      </ul>
        
        <Switch>
          <Route path="/home"><h1>Welcome</h1></Route>
          <Route path="/4">
            <Number>The Number is: {}</Number>
          </Route>
          <Route exact path="/hello">
            <Word><h1>The word is: {}</h1></Word>
          </Route>
          <Route path="/hello/blue/red">hellobluered</Route>
        </Switch>


      </BrowserRouter>
    </div>

  );
}

export default App;
