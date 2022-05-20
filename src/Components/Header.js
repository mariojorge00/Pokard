import React from "react";
export function Header({ listHandler, typesNames, inputHandler, sortHandler }) {
  return (
    <header>
      <div className="Pokard">
        <h1>POKARD</h1>
      </div>
      <form action="">
        <label>SORT</label>
        <select onChange={sortHandler} className="select">
          <option
            className=" option"
            type="radio"
            name="test"
            id="opt1"
            key={0.5}
            value="nada"
          >
            default
          </option>
          <option
            className=" option"
            type="radio"
            name="test"
            id="op"
            key={1}
            value="alfa"
          >
            A-Z
          </option>
          <option
            className=" option"
            type="radio"
            name="test"
            id="opt4"
            key={2}
            value="alfaReversed"
          >
            Z-A
          </option>
          <option
            className=" option"
            type="radio"
            name="test"
            id="opt4"
            key={4}
            value="idreversed"
          >
            last to first
          </option>
        </select>
      </form>
      <form action="">
        <label>FILTER</label>
        <select onChange={listHandler} className="select">
          <option
            className=" option"
            type="radio"
            name="test"
            id="opt1"
            key={21}
            value=""
          >
            all
          </option>
          {typesNames
            .filter((e) => !e.match("unknown") && !e.match("shadow"))
            .map((tipo, index) => (
              <option key={index} value={tipo}>
                {tipo}
              </option>
            ))}
        </select>
      </form>
      <div className="container">
        <div className="search-box">
          <input type="text" onChange={inputHandler}></input>
          <span></span>
        </div>
      </div>
    </header>
  );
}
