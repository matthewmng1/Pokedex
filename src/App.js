import logo from './logo.svg';
import './App.css';
import Pokecard from "./Pokecard"
import Pokedex from "./Pokedex"
import pokemon from "./pokemon"

function App() {
  return (
    <div className="App">
      <Pokedex pokemon={pokemon}/>
    </div>
  );
}

export default App;
