import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch

} from 'react-router-dom';
import ViewAllAuthors from './components/ViewAllAuthors';
import AddAuthorForm from './components/AddAuthorForm';
import EditAuthor from './components/EditAuthor';
import Grid from './components/Grid';
import IdError from './components/IdError';

function App() {



  return (

    <BrowserRouter >
      <div className="App container">
        <Route exact path="/">
          {/* <ViewAllAuthors></ViewAllAuthors> */}
          <Grid />
        </Route>
        <Switch>
          <Route exact path="/author/update/:id">
            <EditAuthor></EditAuthor>
          </Route>
          <Route exact path="/author/addnew">
            <AddAuthorForm></AddAuthorForm>
          </Route>
          <Route exact path='/author/unknownId'>
            <IdError></IdError>
          </Route>
        </Switch>
      </div>

    </BrowserRouter>


  );
}

export default App;
