import React, { useEffect, useState } from "react";
import axios from "axios";
import getAverageColor from "get-average-color";
import { motion } from "framer-motion";
import Standarized from "../Functions/Standarized";
import { StatsExpanded } from "./StatsExpanded";
import TypesIcon2 from "../Functions/TypeIcon2";
import bug from "../Tipos/bug.svg";
import dark from "../Tipos/dark.svg";
import dragon from "../Tipos/dragon.svg";
import electric from "../Tipos/electric.svg";
import fairy from "../Tipos/fairy.svg";
import fighting from "../Tipos/fighting.svg";
import fire from "../Tipos/fire.svg";
import flying from "../Tipos/flying.svg";
import ghost from "../Tipos/ghost.svg";
import grass from "../Tipos/grass.svg";
import ground from "../Tipos/ground.svg";
import ice from "../Tipos/ice.svg";
import normal from "../Tipos/normal.svg";
import poison from "../Tipos/poison.svg";
import psychic from "../Tipos/psychic.svg";
import rock from "../Tipos/rock.svg";
import steel from "../Tipos/steel.svg";
import water from "../Tipos/water.svg";

export default function CardExpanded({ info, desc, types, result }) {
  const [MoveInfo, setMoveInfo] = useState([]);
  const [abilitiesInfo, setAbilitiesInfo] = useState([]);
  const [evolutionsInfo, setEvolutionsInfo] = useState([]);
  const [color, setColor] = useState([]);
  const [japanese, setJapanese] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [image, setImage] = useState([]);
  const [region, setRegion] = useState([]);
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${info.id}.png`;

  useEffect(() => {
    info.moves
      .slice(0, 4)
      .filter((elem) => elem.move)
      .map((elem) =>
        axios.get(elem.move.url).then((res) => {
          let json = res.data;
          setMoveInfo((prevState) => [...prevState, json]);
        })
      );
    info.abilities
      .slice(0, 2)
      .filter((e) => e.ability)
      .map((e) =>
        axios.get(e.ability.url).then((res) => {
          let json2 = res.data;
          setAbilitiesInfo((prevState) => [...prevState, json2]);
        })
      );
    setRegion(desc.pokedex_numbers[1]?.pokedex?.name);
    setJapanese(desc.names[0].name);

    axios.get(desc.evolution_chain.url).then((res) => {
      let json2 = res.data;

      setEvolutionsInfo([json2.chain.species?.name]);
      if (json2.chain?.evolves_to[0]?.species?.name) {
        setEvolutionsInfo((prevState) =>
          [prevState, json2.chain.evolves_to[0].species?.name].flat()
        );
      }
      if (json2.chain?.evolves_to[0]?.evolves_to[0]?.species?.name) {
        setEvolutionsInfo((prevState) =>
          [
            prevState,
            json2.chain?.evolves_to[0].evolves_to[0].species?.name,
          ].flat()
        );
      }
    });

    fetch(imageUrl)
      .then((response) => response.blob())
      .then((image) => {
        const localUrl = URL.createObjectURL(image);
        setImage(localUrl);
        getAverageColor(localUrl).then((rgb) => {
          setColor(rgb);
        });
      });
  }, [desc, info, imageUrl]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=649`)
      .then((response) => {
        const json = response.data;
        json.results
          .filter((e) => evolutionsInfo.some((i) => e.name === i))
          .map((elem) => elem.url)
          .map((elem) =>
            axios.get(`${elem}`).then((res) => {
              let json2 = res.data;
              setPokemons((prevState) => [
                ...prevState,
                { id: json2.id, name: json2.name },
              ]);
            })
          );
      });
  }, [evolutionsInfo]);

    //fetch evolution images on useEffect()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ delay: 0.1, duration: 0.4 }}
      animate={{
        opacity: 1,
      }}
      className={`cardSkeleton expanded `}
      style={{ backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b})` }}
    >
      <span className="japanese">{japanese}</span>
      <div className="firstColumn">
        <div className="firstColumn1">
          <h3 className="cardeTitle titleExpanded2">{Standarized(info)}</h3>
          <h2 className="cardeTitle titleExpanded">
            {result.name.toUpperCase()}
          </h2>
        </div>
        <div className="firstColumn2">
          <div className="wrap">
            <div>
              <p className="metricExpanded">Height: {info.height / 10}m</p>
            </div>
            <div>
              <p className="metricExpanded">Weigth: {info.weight / 10}kg</p>
            </div>
            <span className="region">Region: {region}</span>
          </div>
        </div>
      </div>
      <div className="secondColumn">
        {" "}
        <motion.img
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{ delay: 0, duration: 0.3 }}
          className="my-image"
          src={image}
          alt=""
        ></motion.img>
      </div>

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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.2 }}
          className="titleExpanded3"
        >
          Base Stats:
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.2 }}
          className="barraVertical"
        >
          <hr className="barrita"></hr>
          <StatsExpanded info={info}></StatsExpanded>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.2 }}
          className="titleExpanded3"
        >
          Evolution chain:
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="evolution"
        >
          <hr className="barrita barrita2"></hr>
          {pokemons.map((elem) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="each"
              key={Math.random()}
            >
              <img
                key={Math.random()}
                style={{ width: "5.5rem" }}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${elem.id}.png`}
                alt=""
              ></img>
              <div>{elem.name}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
        {/* {evolutionsInfo.map((el) => (
        <div key={Math.random()} className="space">
          {el}
        </div>
      ))} */}
        {/* <Description className="descExpanded" desc={desc} /> */}
     
      {/* {MoveInfo.map((el) => (
        <div key={Math.random()} className="space">
          {`name: ${el.name}  `}
          <br></br>
          {`type: ${el.type.name} `} <br></br>
          {`accuracy: ${el.accuracy}`}
          <br></br>
          {`description: ${el.flavor_text_entries[7].flavor_text}`}
          <br></br>
        </div>
      ))} */}
     
      {/* {abilitiesInfo.map((el) => (
        <div key={Math.random()} className="space">
          {el.name}:
          {el.effect_entries.find((elem) => elem.language.name === "en").effect}
        </div>
      ))} */}
    </motion.div>
  );
}
