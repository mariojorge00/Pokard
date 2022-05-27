import React from "react";
import { motion } from "framer-motion";
import { StatsExpanded } from "./StatsExpanded";

export function ThirdColumn({
  TypesIcon2,
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
  info,
  pokemons,
}) {
  return (
    <div className="thirdColumn">
      <div className="types-side">
        {TypesIcon2(
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
        )}
      </div>
      <motion.h1
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
          duration: 0.2,
        }}
        className="titleExpanded3"
      >
        Base Stats:
      </motion.h1>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.3,
          duration: 0.2,
        }}
        className="barraVertical"
      >
        <hr className="barrita"></hr>
        <StatsExpanded info={info}></StatsExpanded>
      </motion.div>
      <motion.h1
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.35,
          duration: 0.2,
        }}
        className="titleExpanded3"
      >
        Evolution chain:
      </motion.h1>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        //sincronizar timings de delay
        transition={{
          delay: 0.1,
          duration: 0.3,
        }}
        className="evolution"
      >
        <hr className="barrita barrita2"></hr>
        {pokemons.map((elem) => (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
              duration: 0.3,
            }}
            className="each"
            key={Math.random()}
          >
            <img
              key={Math.random()}
              style={{
                width: "5.5rem",
              }}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${elem.id}.png`}
              alt=""
            ></img>
            <div>{elem.name.charAt(0).toUpperCase() + elem.name.slice(1)}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
