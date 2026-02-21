import CardItem from "./CardItem";
import "../styles/card.css";

function CardContainer({pokemons, handler}) {

  return (
    <div className="card-container">
      {pokemons.map((pokemon) => (
        <CardItem key={pokemon} pokemon={pokemon} handler={handler}/>
      ))}
    </div>
  );
}

export default CardContainer;
