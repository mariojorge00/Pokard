import React from "react";


export default function TypesIcon(
  typesWeak,
  bug,
  dark,
  dragon,
  electric,
  fairy,
  fighting,
  fire,
  flying,
  ghost,
  grass,
  ground,
  ice,
  normal,
  poison,
  psychic,
  rock,
  steel,
  water
) {
  if (!typesWeak || typesWeak.length === 0) return "hola";
  else
    return typesWeak.map((type) => {
      return (
        <div key={Math.random()} className={`icon ${type}`}>
          <img
            // eslint-disable-next-line no-eval
            src={eval(type)}
            alt=""
            className="b"
            key={Math.random()}
          />
        </div>
      );
    });
}
