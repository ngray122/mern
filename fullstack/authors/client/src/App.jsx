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

function App() {



  return (

    <BrowserRouter >
      <div className="App container">
        <Route exact path="/">
          <ViewAllAuthors></ViewAllAuthors>
        </Route>
        <Switch>
          <Route exact path="/author/update/:id">
          <EditAuthor></EditAuthor>
          </Route>
          <Route exact path="/author/addnew">
            <AddAuthorForm></AddAuthorForm>
          </Route>
        </Switch>
      </div>

    </BrowserRouter>


  );
}

export default App;
