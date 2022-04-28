import React from "react";
export function Titulo({ Standarized, info, result }) {
  return (
    <>
      {" "}
      <h3 className="cardeTitle">{Standarized(info)}</h3>
      <h2 className="cardeTitle">{result.name.toUpperCase()}</h2>
    </>
  );
}
