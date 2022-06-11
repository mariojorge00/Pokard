import { Header } from "./Header";
import React, { useState } from "react";
import LazyCard from "./LazyCard.js";
import {
  weakTypescontext,
  typeSelectcontext,
  pokemonscontext,
} from "../Functions/Context";
import typesNamescontext from "../Functions/Context2";

export function ListOfCards({ weakTypes, pokemons, typesNames }) {
  const [inputText, setInputText] = useState("");
  const [inputType, setInputType] = useState("");

  const inputHandler = (e) => {
    if (!e || e.length === 0) return setInputText(new RegExp(/[a-z]/));
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const listHandler = (e) => {
    if (!e || e.length === 0) return setInputType(new RegExp(/[a-z]/));
    setInputType(e.target.value.toLowerCase());
    console.log(e.target.value.toLowerCase());
  };

  const [sortedPokemons, setSortedPokemons] = useState(pokemons.results);

  const sortHandler = (e) => {
    let option = e.target.value.toLowerCase();

    if (option === "nada") {
      setSortedPokemons(pokemons.results);
    } else if (option === "alfa") {
      setSortedPokemons(
        pokemons.results
          .slice()
          .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
      );
    } else if (option === "alfareversed") {
      setSortedPokemons(
        pokemons.results
          .slice()
          .sort((a, b) => (a.name < b.name ? 1 : b.name < a.name ? -1 : 0))
      );
    } else if (option === "idreversed") {
      setSortedPokemons(pokemons.results.slice().reverse());
    } else return setSortedPokemons(pokemons.results);
  };

  return (
    <div className="wrapper">
      <Header
        sortHandler={sortHandler}
        listHandler={listHandler}
        inputHandler={inputHandler}
        pokemons={pokemons}
        typesNames={typesNames}
      />
      <ul className="grid">
        <typesNamescontext.Provider value={typesNames}>
          <weakTypescontext.Provider value={weakTypes}>
            <typeSelectcontext.Provider value={inputType}>
              <pokemonscontext.Provider value={pokemons}>
                {sortedPokemons
                  .filter(({ name }) => name.match(inputText))
                  .map((result) => (
                    <LazyCard
                      whileHover={{
                        scale: 1.1,
                      }}
                      key={result.name}
                      {...result}
                    ></LazyCard>
                  ))}
              </pokemonscontext.Provider>
            </typeSelectcontext.Provider>
          </weakTypescontext.Provider>
        </typesNamescontext.Provider>
      </ul>
    </div>
  );
}
