
import './App.css';
import UserForm from './components/UserForm';
import Boxes from './components/Boxes';
import { useState } from 'react';

function App() {

  const [boxes,SetBoxes] = useState("")

  return (
    <div className="App">
      <UserForm></UserForm>
      <Boxes></Boxes>

    </div>
  );
}

export default App;
