import { ListOfCards } from "./Components/ListOfCards";
import LoadingSkeleton from "./Components/LoadingSkeleton";
import React from "react";
import { useEffect, useState } from "react";
import "./Styles/App.scss";
import axios from "axios";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [weakTypes, setWeakTypes] = useState([]);
  const [typesNames, setTypesNames] = useState([]);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=649`)
      .then((response) => {
        const json = response.data;
        setPokemons(json);
      });

    axios.get("https://pokeapi.co/api/v2/type").then((response) => {
      const json = response.data;
      setTypesNames(json.results.map((el) => el.name));

      json.results.map((el) =>
        axios.get(`${el.url}`).then((res) => {
          let json3 = res.data;
          setWeakTypes((prevState) => [
            ...prevState,
            el.name,
            json3.damage_relations.double_damage_from
              .filter((elem) => elem.name)
              .map((elem) => elem.name),
          ]);
        })
      );
    });
  }, []);

  if (
    !weakTypes ||
    weakTypes.length < 40 ||
    !typesNames ||
    typesNames.length === 0
  )
    return <LoadingSkeleton />;

  return (
    <ListOfCards
      weakTypes={weakTypes}
      typesNames={typesNames}
      pokemons={pokemons}
    />
  );
}

export default App;
