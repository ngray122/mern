
import './App.css';
import PokeApi from './components/PokeApi';
import PokeApiAxios from './components/PokeApiAxios';

function App() {
  return (
    <div className="App">
      {/* <PokeApi></PokeApi> */}
      <PokeApiAxios></PokeApiAxios>
    </div>
  );
}

export default App;
