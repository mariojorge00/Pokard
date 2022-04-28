import React from "react";
import CardPlaceholder from "./CardPlaceholder"
function LoadingSkeleton() {
  let imaginary=['.','.','.','.']
  return (
    <div className="wrapper">
       <header>
        <h1>POKARD</h1>
        <div className="container">
          <div className="search-box">
            <input type="text" ></input>
            <span></span>
          </div>
        </div>
      </header>
      <ul className="grid">
        {imaginary.map(() => (
          <CardPlaceholder
            whileHover={{
              scale: 1.1,
            }}
            key={Math.random()}
          ></CardPlaceholder>
        ))}
      </ul>
    </div>
  );
}
export default React.memo(LoadingSkeleton,()=>true)