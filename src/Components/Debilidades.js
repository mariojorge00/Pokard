import React from "react";
export function Debilidades({
  TypesIcon,
  weak,
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
}) {
  return <div className="weak">
        WEAKNESSES
        <div className="weak-side">
          {TypesIcon(weak, bug, dark, dragon, electric, fairy, fighting, fire, flying, ghost, grass, ground, ice, normal, poison, psychic, rock, steel, water)}
        </div>
      </div>;
}
