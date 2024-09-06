import React, { useState } from "react";
import { motion, stagger } from "framer-motion";

function Test() {
  const [open, setOpen] = useState(false);

  const variants = {
    visible: {
      opacity: 1,
      x: 100,
      transition :{ staggerChildren:0.2},
    },
    hidden: { opacity: 0 },
  };

  let items = ["item1", "item2", "item3", "item4", "item5"];
  return (
    <div className="animate-box">
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item) => (
          <motion.li variants={variants} key={item}>{item}</motion.li>
        ))}
      </motion.ul>
      {/* <button onClick={()=>setOpen(prev=> !prev)}>Click me</button> */}
    </div>
  );
}

export default Test;
