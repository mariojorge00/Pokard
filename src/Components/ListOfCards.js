import { Header } from './Header';
import React, { useState } from "react";
import LazyCard from "./LazyCard.js";
import { weakTypescontext, typeSelectcontext } from "../Functions/Context";
import typesNamescontext from "../Functions/Context2";

export function ListOfCards({ weakTypes, pokemons, typesNames }) {
  const [inputText, setInputText] = useState("");
  const [inputType, setInputType] = useState("");
  
  let inputHandler = (e) => {
    if (!e || e.length === 0) return setInputText(new RegExp(/[a-z]/));
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    console.log(lowerCase);
  };
  
  let listHandler = (e) => {
    if (!e || e.length === 0) return setInputType(new RegExp(/[a-z]/));
    //convert input text to lower case
    setInputType(e.target.value.toLowerCase());
    console.log(e.target.value.toLowerCase());
  };
  return (
    <div className="wrapper">
      <Header   listHandler={listHandler} inputHandler={inputHandler} typesNames={typesNames} />
      <ul className="grid">
        <typesNamescontext.Provider value={typesNames}>
          <weakTypescontext.Provider value={weakTypes}>
            <typeSelectcontext.Provider value={inputType}>
              {pokemons.results
                .filter(({ name }) => name.match(inputText))
                .map((result) => (
                  <LazyCard
                    whileHover={{
                      scale: 1.1,
                    }}
                    key={result.name}
                    {...result}
                    {...inputText}
                  ></LazyCard>
                ))}
            </typeSelectcontext.Provider>
          </weakTypescontext.Provider>
        </typesNamescontext.Provider>
      </ul>
    </div>
  );
}
