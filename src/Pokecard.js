import "./Pokecard.css"

const poke_image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
// ${id}.png

const Pokecard = ({id, name, type, base_experience}) => {
  let imgSrc = `${poke_image}${id}.png`
  return (
    <div className="Pokecard">
      <div className="Pokecard-name">{name}</div>
      <img className="Pokecard-img" src={imgSrc}/>
      <div className="Pokecard-type">Type: {type}</div>
      <div className="Pokecard-exp">EXP: {base_experience}</div>
    </div>
  )
}

export default Pokecard;


