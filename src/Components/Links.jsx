import { color, motion } from "framer-motion";
import React from "react";
import { Link } from "react-scroll";

function Links() {


  const handleLinkClick = ({ setOpen }) => {
    setOpen(false);
  };


  
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
    <motion.div className="links" variants={variants}>
      <motion.a>

        <Link to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}  >Home

        </Link>


      </motion.a>


      <motion.a>

      <Link to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}>About Us

        </Link>

      </motion.a>
      <motion.a>
      <Link to="skills1"
          spy={true}
          smooth={true}
          offset={50}
          duration={20000}>Skill

        </Link>

      </motion.a>


      <motion.a>

      <Link to="skill1"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}>Project

        </Link>

      </motion.a>

      <motion.a>

      <Link to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}>Contact

        </Link>

      </motion.a>



    </motion.div>
  );
}

export default Links;
