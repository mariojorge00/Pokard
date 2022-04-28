import React from "react";
import {Tipos} from './Tipos'
import {Debilidades} from './Debilidades'
import {Stats} from './Stats'
export function MoreMetrics({
  TypesIcon,
  info,
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
  water,
  weaksToShow,
  weak,
  statsEval,
}) 

{
  
  function weaksToShow(weaks) {
    if (weaks.length === 1) return weaks[0];
    else if (weaks[0].length < 4) return weaks[0];
    else return weaks[1]; 
  }
  return (
    <div className="moreMetrics">
      <div className="right">
        <Tipos
          TypesIcon={TypesIcon}
          types={types}
          bug={bug}
          dark={dark}
          dragon={dragon}
          electric={electric}
          fairy={fairy}
          fighting={fighting}
          fire={fire}
          flying={flying}
          ghost={ghost}
          grass={grass}
          ground={ground}
          ice={ice}
          normal={normal}
          poison={poison}
          psychic={psychic}
          rock={rock}
          steel={steel}
          water={water}
        />
        <Debilidades
          TypesIcon={TypesIcon}
          weak={weaksToShow(weak)}
          bug={bug}
          dark={dark}
          dragon={dragon}
          electric={electric}
          fairy={fairy}
          fighting={fighting}
          fire={fire}
          flying={flying}
          ghost={ghost}
          grass={grass}
          ground={ground}
          ice={ice}
          normal={normal}
          poison={poison}
          psychic={psychic}
          rock={rock}
          steel={steel}
          water={water}
        />
      </div>
      <Stats statsEval={statsEval} info={info} />
    </div>
  );
}
