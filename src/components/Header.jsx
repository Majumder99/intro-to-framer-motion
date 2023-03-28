import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <motion.div
        className="logo"
        style={{ cursor: "pointer" }}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={5}
      >
        <motion.svg
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          initial={{ rotateZ: 180 }}
          animate={{ rotateZ: 0 }}
          transition={{ delay: 1.2, duration: 3 }}
        >
          <path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <path fill="none" d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z" />
        </motion.svg>
      </motion.div>
      <motion.div className="title" initial={{ y: -150 }} animate={{ y: 0 }}>
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  );
};

export default Header;
