import React from "react";
import { motion } from "framer-motion";
const parentChild = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      when: "beforeChildren",
      mass: 0.4,
      staggerChildren: 0.8,
    },
  },
};
const childComponent = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    delay: 2,
  },
};

const Order = ({ pizza }) => {
  return (
    <motion.div
      className="container order"
      variants={parentChild}
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childComponent}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      {pizza.toppings.map((topping) => (
        <motion.div variants={childComponent} key={topping}>
          {topping}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Order;
