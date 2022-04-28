import React from "react";
export function Tipos({
  TypesIcon,
  types,
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
  return <div className="types">
          TYPE
          <div className="types-side">
            {TypesIcon(types, bug, dark, dragon, electric, fairy, fighting, fire, flying, ghost, grass, ground, ice, normal, poison, psychic, rock, steel, water)}
          </div>
        </div>;
}
  