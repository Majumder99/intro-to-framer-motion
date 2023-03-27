import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div className="home container" animate={{ rotateZ: 90 }}>
      {/* Which component we need to animate just add motion */}
      <motion.h2 animate={{ fontSize: 50, color: "red", x: 100, y: -100 }}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <button>Create Your Pizza</button>
      </Link>
    </motion.div>
  );
};

export default Home;
