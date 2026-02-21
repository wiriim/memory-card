import { useState, useEffect } from "react";

const URL = "https://pokeapi.co/api/v2/pokemon";

function CardItem({ pokemon, handler }) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${URL}/${pokemon}`);
      const responseObj = await response.json();
      const image = responseObj.sprites.other["official-artwork"].front_default;
      setImageUrl(image);
    }
    fetchData();
  }, []);


  if (!imageUrl) return null;

  return (
    <button className="card" onClick={handler} data-pokemon={pokemon}>
      <img src={imageUrl} alt={pokemon} />
      <p>{pokemon.toUpperCase()}</p>
    </button>
  );
}

export default CardItem;
