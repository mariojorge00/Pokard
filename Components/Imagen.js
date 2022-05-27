import React from "react";
export function Imagen({ info }) {
  return (
    <div className="imgBox">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${info.id}.svg`}
        alt="logo"
        className="poke-logo"
      ></img>
    </div>
  );
}
