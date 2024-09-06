import { color, motion } from "framer-motion";
import React from "react";

function Links() {
  const variants = {
    open: {
      Transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      Transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };
  const itemsVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };
  const items = ["Home", "About Us", "Skills", "Project", "Contact Us"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={item}
          key={item}
          variants={itemsVariants}
          whileHover={{ scale: 1.1 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
}

export default Links;
