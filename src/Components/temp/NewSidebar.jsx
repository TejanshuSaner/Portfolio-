import React, { useState } from "react";
import { motion } from "framer-motion";
import "../css/sidebar.css";
import ToggleBtn from "../ToggleBtn";
import NewLinks  from "./NewLinks";

function NewSidebar() {
    const [open, setOpen] = useState(false);
    let variants = {
        open: {
          clipPath: "circle(1200px at 50px 50px)",
          transition: {
            type: "spring",
            stiffness: 20,
          },
        },
        closed: {
          clipPath: "circle(30px at 50px 50px)",
          transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
          },
        },
      };
  return (
    <motion.div className="sidebar-main" animate={open ? "open" : "closed"}>
    <motion.div className="sidebar-bg" variants={variants}>
      <NewLinks />
    </motion.div>
    <ToggleBtn setOpen={setOpen} />
  </motion.div>
  )
}

export default NewSidebar