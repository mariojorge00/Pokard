import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  function scrollValue() {
    var navbar = document.getElementById("navbar");
    var navbor = document.getElementById("navbor");
    var navber = document.getElementById("navber");
    var scroll = window.scrollY;
    if (scroll < 550) {
      navbar.classList.remove("newColor");
      navbor.classList.remove("newColor");
      navber.classList.remove("newColor");
    } else {
      navbar.classList.add("newColor");
      navbor.classList.add("newColor");
      navber.classList.add("newColor");
    }
  }

  window.addEventListener("scroll", scrollValue);
  return (
    <div className="App">
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          easeIn: [0.17, 0.67, 0.83, 0.67],
          delay: 1,
          duration: 1.5,
        }}
        className="header"
      >
        <motion.title
          id="navbor"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          About
        </motion.title>
        <motion.title
          id="navber"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Projects
        </motion.title>
        <motion.title
          id="navbar"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          
          Contact
        </motion.title>
      </motion.header>
      <body className="body">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            easeIn: [0.17, 0.67, 0.83, 0.67],
            delay: 0.5,
            duration: 1.5,
          }}
          className="portada"
        >
          <motion.h1
            className="inside"
            style={{ transform: `translateY(${offsetY * 0.5}px)` }}
          >
            {" "}
            Web Dev (In progress...)
          </motion.h1>
        </motion.section>
        <section
          className="contenido"
          style={{ transform: `translateY(-${offsetY * 0.7}px)` }}
        >
          <h1 className="content">Contenido</h1>
        </section>
      </body>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
