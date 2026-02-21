import '../styles/App.css'
import CardContainer from './CardContainer'
import { useState } from 'react';

const pokemons = [
  "mewtwo",
  "umbreon",
  "lucario",
  "charizard",
  "ditto",
  "corviknight",
  "articuno",
  "snorlax",
  "bisharp",
  "greninja",
  "blastoise",
  "pikachu",
];

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clicked, setClicked] = useState([]);

  if (score > bestScore) {
    setBestScore(score);
  }
  function handleClick(e) {
    setScore(score + 1);
    shuffle(pokemons);

    let pokemon = e.target instanceof HTMLButtonElement ? e.target.dataset.pokemon : e.target.parentElement.dataset.pokemon;
    if (!clicked.includes(pokemon)){
      setClicked([...clicked, pokemon]);
    }
    else{
      setClicked([]);
      setScore(0);
    }
  }

  return (
    <>
      <h1>Memory Card Game</h1> 
      <span>Score: {score}, Best Score: {bestScore}</span>
      <p>Get points by clicking on an image but don't click on any more than once!</p>
      <CardContainer pokemons={pokemons} handler={handleClick}/>
    </>
  )
}

export default App
