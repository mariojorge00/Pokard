import { ThirdColumn } from "./ThirdColumn";
import { SecondColumn } from "./SecondColumn";
import { FirstColumn } from "./FirstColumn";
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import getAverageColor from "get-average-color";
import { motion } from "framer-motion";
import Standarized from "../Functions/Standarized";
import TypesIcon2 from "../Functions/TypeIcon2";
import { pokemonscontext } from "../Functions/Context";
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
  // eslint-disable-next-line no-unused-vars
  const [MoveInfo, setMoveInfo] = useState([]);
  const [abilitiesInfo, setAbilitiesInfo] = useState([]);
  const [evolutionsInfo, setEvolutionsInfo] = useState([]);
  const [color, setColor] = useState([]);
  const [japanese, setJapanese] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [image, setImage] = useState([]);
  const [region, setRegion] = useState('');
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${info.id}.png`;
  const pokemonsList = useContext(pokemonscontext);

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
      .filter((elem) => elem.ability)
      .map((elem) =>
        axios.get(elem.ability.url).then((res) => {
          let json2 = res.data;
          setAbilitiesInfo((prevState) => [...prevState, json2]);
        })
      );
    setRegion((desc.pokedex_numbers[1]?.pokedex?.name).substring((desc.pokedex_numbers[1]?.pokedex?.name).indexOf("-") + 1))
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
    
    pokemonsList.results
      .filter((elem) => evolutionsInfo.some((prop) => elem.name === prop))
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
  }, [evolutionsInfo, pokemonsList]);

  //fetch evolution images on useEffect()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ delay: 0.1, duration: 0.4 }}
      animate={{ opacity: 1 }}
      className={`cardSkeleton expanded `}
      style={{ backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b})` }}
    >
      <span className="japanese">{japanese}</span>
      <FirstColumn
        Standarized={Standarized}
        info={info}
        result={result}
        region={region}
      />
      <SecondColumn image={image} />
      <ThirdColumn
        TypesIcon2={TypesIcon2}
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
        info={info}
        pokemons={pokemons}
      />
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
