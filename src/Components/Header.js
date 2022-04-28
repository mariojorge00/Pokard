import React from "react";
export function Header({
  listHandler,
  typesNames,
  inputHandler
}) {
  return <header>
        <h1>POKARD</h1>
        <form action=''>
          <select onChange={listHandler}>   
            <option key={21} value=''>all</option>
            {typesNames.map((tipo, index) => <option key={index} value={tipo}>{tipo}</option>)}
          </select>
        </form>
        <div className="container">
          <div className="search-box">
            <input type="text" onChange={inputHandler}></input>
            <span></span>
          </div>
        </div>
      </header>;
}
  