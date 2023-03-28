import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  //kyefram in []
  const parentChild = {
    hidden: {
      x: "100vw",
    },
    visible: {
      x: [0, -20, 20, 20, -20, 0],
      transition: {
        delay: 1,
        duration: 2,
        type: "spring",
      },
    },
  };
  const childComponent = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
    },
  };
  const buttonComponent = {
    hover: {
      scale: 1.1,
      transition: {
        repeat: Infinity,
      },
    },
  };
  return (
    <motion.div
      className="base container"
      variants={parentChild}
      initial="hidden"
      animate="visible"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className="next"
          variants={childComponent}
          initial="hidden"
          animate="visible"
        >
          <Link to="/toppings">
            <motion.button variants={buttonComponent} whileHover="hover">
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
