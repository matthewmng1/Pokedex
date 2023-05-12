import Pokecard from "./Pokecard";
import "./Pokedex.css"

function Pokedex({pokemon}){
  return(
    <div className="Pokedex">
      <h1 className="Pokedex-title">Pokedex</h1>
      <div className="Pokedex-cards">
        {pokemon.map(p => <Pokecard 
        key={p.id}
        id = {p.id}
        name={p.name}
        type={p.type}
        base_experience={p.base_experience}/>)}
      </div>
    </div>
  )
}

export default Pokedex;