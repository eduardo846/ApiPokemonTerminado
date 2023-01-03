import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [pokemon, setPokemon] = useState({});
  const [isDecimeters, setIsDecimeters] = useState(true);
  const [isHectograms, setIsHectograms] = useState(true);

  useEffect(() => {
    const random = Math.floor(Math.random() * 600) + 1;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${random}/`)
      .then((res) => setPokemon(res.data));
  }, []);
  console.log(pokemon);
  const changeUnits = () => {
    setIsDecimeters(!isDecimeters);
    setIsHectograms(!isHectograms);
  };
  const changePokemon = () =>{
    const random = Math.floor(Math.random()*600)+1
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${random}/`)
      .then((res) => setPokemon(res.data));
  }

  return (
    <div className="App">
      <div className="card">
        <h1>{pokemon.name}</h1>
        <img
          src={pokemon.sprites?.other["official-artwork"].front_default}
          style={{ height: "70px" }}
          alt=""
        />
        <div className="mb-3">
          <b>Weight: </b>
          {isHectograms ? pokemon.weight : pokemon.weight / 10}{" "}
          {isHectograms ? "hectograms" : "kilograms"}
        </div>
        <div className="mb-3">
          <b>Height: </b>
          {isDecimeters ? pokemon.height : pokemon.height / 10}{" "}
          {isDecimeters ? "decimeters" : "meters"}
        </div>
        <div className="mb-3">
          <b>Type: </b>
          {pokemon.types?.[0].type.name}{" "}
        </div>
        <button onClick={changeUnits}>Change Units</button>
        <button onClick={changePokemon }>Change Pokemon</button>
      </div>
    </div>
  );
}

export default App;
