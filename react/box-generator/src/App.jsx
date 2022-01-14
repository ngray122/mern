
import './App.css';
import Boxes from './components/Boxes';
import { useState } from 'react';

function App() {

  const [boxes,SetBoxes] = useState("")

  return (
    <div className="App container">
          <h1>Pick a color and add a box!</h1>


      <Boxes></Boxes>

    </div>
  );
}

export default App;
