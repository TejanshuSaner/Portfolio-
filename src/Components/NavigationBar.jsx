import React from "react";
import "./css/NavigationBar.css";
import { motion } from "framer-motion";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import gmail from "../assets/gmail.png";
import Sidebar from "./Sidebar";
// import NewSidebar from "./temp/NewSidebar";

function NavigationBar() {
  return (
    <div className="navBar">
      <Sidebar id="Sidebar" />
      {/* <NewSidebar/> */}
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration:0.5}}
        >
          Aniket
        </motion.span>
        <div className="social">
          <a href="#">
            <img src={facebook} alt="" />
          </a>
          <a href="#">
            <img src={gmail} alt="" />
          </a>
          <a href="#">
            <img src={linkedin} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
