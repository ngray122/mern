
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
          <PersonCard firstName={"Nicole "} lastName={"Gray"} age={35} hairColor={'Light Brown'}>
          </PersonCard>       
        </div>
        <div>
          <PersonCard firstName={"Bob"} lastName={"Belcher"} age={48} hairColor={'Black'}>
          </PersonCard>
        </div>
        <div>
          <PersonCard firstName={"Homer"} lastName={"Simpson"} age={57} hairColor={'Bald'}>
          </PersonCard>
        </div>
        <div>
          <PersonCard firstName={"Tj"} lastName={"Osborne"} age={25} hairColor={'Brown'}>
          </PersonCard>
        </div>

      </div>
    </div>
  );
}

export default App;
