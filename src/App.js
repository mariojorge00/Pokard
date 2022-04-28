import { ListOfCards } from "./Components/ListOfCards";
import LoadingSkeleton from "./Components/LoadingSkeleton";
import React from "react";
import { useEffect, useState } from "react";
import "./Styles/App.scss";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [weakTypes, setWeakTypes] = useState([]);
  const [typesNames, setTypesNames] = useState([]);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=649`)
        .then((response) => response.json())
        .then((json) => {
          setPokemons(json);
          fetch("https://pokeapi.co/api/v2/type")
            .then((res) => res.json())
            .then((json3) => {
              json3.results.map((el) =>
                fetch(`${el.url}`)
                  .then((res) => res.json())
                  .then((json) => {
                    setWeakTypes((prevState) => [
                      ...prevState,
                      el.name,
                      json.damage_relations.double_damage_from
                        .filter((elem) => elem.name)
                        .map((elem) => elem.name),
                    ]);
                  })
              );
              setTypesNames(json3.results.map((el) => el.name));
            });
        });
    }, 0);
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
