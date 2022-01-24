import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Form from './components/Form';
import Result from './components/Result';

function App() {
  return (
      <BrowserRouter>
          <Form />
        
        <Switch>
          <Route exact path = "/api/:category/:id">
            <Result></Result>
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
