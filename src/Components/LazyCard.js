import { MoreMetrics } from "./MoreMetrics";
import { Metricas } from "./Metricas";
import { Titulo } from "./Titulo";
import { Description } from "./Description";
import { Imagen } from "./Imagen";
import React, { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import { weakTypescontext } from "../Functions/Context.js";
import { typeSelectcontext } from "../Functions/Context.js";
import { hiddencontext } from "../Functions/Context.js";
import CardPlaceholder from "./CardPlaceholder";
import Standarized from "../Functions/Standarized";
import TypesIcon from "../Functions/TypeIcon";
import CardExpanded from "./CardExpanded";
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
import axios from "axios";

function Carde(result) {
  const [info, setinfo] = useState([]);
  const [desc, setDesc] = useState([]);
  const [types, setTypes] = useState([]);
  const [weak, setWeak] = useState([]);
  const [expand, setExpand] = useState(false);
  const weakTypes = useContext(weakTypescontext);
  const typeSelect = useContext(typeSelectcontext);
  const { hidden, setHidden } = useContext(hiddencontext);
  Standarized();
  TypesIcon();
   const updateExpand = (state) => {
    setExpand(state);
  }

  useEffect(() => {
    axios.get(`${result.url}`).then((res) => {
      let json = res.data;
      setinfo(json);
      setTypes(
        json.types
          .filter((elem) => elem.type.name)
          .map((elem) => elem.type.name)
      );
      setWeak(
        json.types
          .filter((elem) => elem.type.name)
          .map((elem) => elem.type.name)
          .map((elem) => weakTypes.findIndex((item) => item === elem))
          .map((elem) => weakTypes[elem + 1])
      );
      axios
        .get(`https://pokeapi.co/api/v2/pokemon-species/${json.id}/`)
        .then((res) => {
          let json = res.data;
          setDesc(json);
        });
    });
  }, [result.url, weakTypes]);

  useEffect(() => {
    if (!typeSelect || typeSelect.length === 0) return setHidden("visible");
    if (types.every((elem) => elem !== `${typeSelect}`)) {
      setHidden("hidden");
    } else setHidden("visible");
  }, [types, setHidden, typeSelect, hidden]);
  if (hidden === "hidden") return null;

  if (
    !info ||
    info.length === 0 ||
    !desc ||
    desc.length === 0 ||
    !weak ||
    weak.length === 0
  )
    return <CardPlaceholder />;

  return expand ? (
    <>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0, duration: 0.2 }}
        className="cardExpanded"
      >
        <CardExpanded
          types={types}
          info={info}
          desc={desc}
          result={result}
          updateExpand={updateExpand}
        >
         
        </CardExpanded>
      </motion.button>{" "}
      <motion.li
        onClick={() => setExpand((p) => !p)}
        className={`card `}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.99 }}
      >
        <Imagen info={info} />
        <Titulo Standarized={Standarized} info={info} result={result} />
        <Description desc={desc} />
        <Metricas info={info} desc={desc} />
        <MoreMetrics
          TypesIcon={TypesIcon}
          info={info}
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
          weak={weak}
        />
      </motion.li>
    </>
  ) : (
    <motion.li
      onClick={() => setExpand((p) => !p)}
      className={`card `}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.99 }}
    >
      <Imagen info={info} />
      <Titulo Standarized={Standarized} info={info} result={result} />
      <Description desc={desc} />
      <Metricas info={info} desc={desc} />
      <MoreMetrics
        TypesIcon={TypesIcon}
        info={info}
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
        weak={weak}
      />
    </motion.li>
  );
}

function LazyCard(result) {
  const [show, setShow] = useState(false);
  const [hidden, setHidden] = useState("visible");
  useEffect(function () {
    const onChange = (entries) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: "200px",
    });

    observer.observe(document.getElementById(result.name));
  });

  return (
    <hiddencontext.Provider value={{ hidden, setHidden }}>
      <div className={`Carde ${hidden}`} id={result.name}>
        {show ? (
          <Carde key={result.name} {...result}></Carde>
        ) : (
          <CardPlaceholder />
        )}
      </div>
    </hiddencontext.Provider>
  );
}
export default React.memo(LazyCard, (prevProps, nextProps) => {
  return prevProps.name === nextProps.name;
});
