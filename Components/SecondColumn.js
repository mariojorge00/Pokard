import React from "react";
import { motion } from "framer-motion";

export function SecondColumn({ image }) {
  return (
    <div className="secondColumn">
      {" "}
      <motion.img className="my-image" src={image} alt=""></motion.img>
    </div>
  );
}
