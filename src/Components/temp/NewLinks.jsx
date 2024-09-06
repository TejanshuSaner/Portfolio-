import React from 'react'
import { color, motion } from "framer-motion";
import { Link } from 'react-router-dom';


function NewLinks() {
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
  return (
    <motion.div className='links' variants={variants}>
       <Link to={"/"}>Home</Link> 

    </motion.div>
  )
}

export default NewLinks