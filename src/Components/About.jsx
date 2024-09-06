import React from "react";
import "./css/about.css";
import { animate, motion, stagger } from "framer-motion";

function About() {
  const variants = {
    initial: {
      x: -500,
      y: 0,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      className="main-about"
      variants={variants}
      initial="initial"
      // animate="animate"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          Setting goal is the first step in <br /> turning the invisible into
          the visible
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/src/assets/people.webp" alt="" />
          <h1>
            Hey
            <motion.b whileHover={{color:"coral"}}>Visitor,</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            meet my
            <motion.b  whileHover ={{color:"coral"}}>Partners</motion.b>
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Ashish Bendale</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
            molestias quia facere porro placeat dignissimos, autem rerum dolorum
            numquam! Maxime similique dignissimos atque eum eligendi quae
            deleniti rerum. Vitae, dicta?
          </p>
          <button>Explore</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Tejanshu Saner</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
            molestias quia facere porro placeat dignissimos, autem rerum dolorum
            numquam! Maxime similique dignissimos atque eum eligendi quae
            deleniti rerum. Vitae, dicta?
          </p>
          <button>Explore</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>harshal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
            molestias quia facere porro placeat dignissimos, autem rerum dolorum
            numquam! Maxime similique dignissimos atque eum eligendi quae
            deleniti rerum. Vitae, dicta?
          </p>
          <button>Explore</button>
        </motion.div>{" "}
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Abhay Sonawane</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
            molestias quia facere porro placeat dignissimos, autem rerum dolorum
            numquam! Maxime similique dignissimos atque eum eligendi quae
            deleniti rerum. Vitae, dicta?
          </p>
          <button>Explore</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default About;
