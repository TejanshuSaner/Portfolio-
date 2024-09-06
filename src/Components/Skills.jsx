import React, { useEffect, useState } from "react";
import "./css/skills.css";
import { animate, motion } from "framer-motion";

import java from "../assets/java.png";
import html from "../assets/html-png.png";
import css from "../assets/css-png.png";
import JS from "../assets/mainJS.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwinnd-1.png";
import sql from "../assets/sql.png";

function Skills() {
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

  const now = 60;
  return (
    <motion.div
      className="skills-main"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <div className="title-box">
        <motion.h1 variants={variants}>Skills</motion.h1>
      </div>

      <div className="skill-box">
        <div className="progressing">
          <div className="technical-bars">
            <h2 className="heading">Technical Skills</h2>

            <div className="bar">
              <i className="bx bxl-html5"></i>
              <div className="info">
                <span>HTML 5</span>
              </div>
              <div className="line html">
                <span> hello</span>
              </div>
            </div>

            <div className="bar">
              <i className="bx bxl-css3"></i>
              <div className="info">
                <span>CSS 3</span>
              </div>
              <div className="line css">
                <span> </span>
              </div>
            </div>
            <div className="bar">
              <i className="bx bxl-javascript"></i>
              <div className="info">
                <span>JavaScript</span>
              </div>
              <div className="line javascript">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <i className="bx bxl-react"></i>
              <div className="info">
                <span>React JS</span>
              </div>
              <div className="line react">
                <span></span>
              </div>
            </div>
            <div className="bar">
              <i className="bx bxl-java"></i>
              <div className="info">
                <span>Java</span>
              </div>
              <div className="line java">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
