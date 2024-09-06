import React, { useRef } from "react";
import "./css/project.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const item = [
  {
    id: 1,
    title: "React Portfolio",
    img: "https://images.pexels.com/photos/14936129/pexels-photo-14936129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisiciQuisng elit. Lorem ipsum dolor sit amet, consectetur adipisiciQuisng elit.Lorem ipsum dolor sit amet, consectetur adipisiciQuisng elit.Lorem ipsum dolor sit amet, consectetur adipisiciQuisng elit. ",
  },
  {
    id: 2,
    title: "HTML CSS Ecommerce",
    img: "https://images.pexels.com/photos/1042143/pexels-photo-1042143.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisiciQuisng elit. Lorem ipsum dolor sit amet, consectetur adipisiciQuisng elit.Lorem ipsum dolor sit amet, consectetur adipisiciQuisng elit.Lorem ipsum dolor sit amet, consectetur adipisiciQuisng elit. ",
  },
  {
    id: 3,
    title: "JS Portfolio",
    img: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

    desc: "Lorem ipsum dolor sit amet, consectetur adipisiciQuisng elit. Lorem ipsum dolor sit amet, consectetur adipisiciQuisng elit.Lorem ipsum dolor sit amet, consectetur adipisiciQuisng elit.Lorem ipsum dolor sit amet, consectetur adipisiciQuisng elit. ",
  },
  {
    id: 4,
    title: "JS Calculator",
    img: "https://images.pexels.com/photos/4386326/pexels-photo-4386326.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisiciQuisng elit. Lorem ipsum dolor sit amet, consectetur adipisiciQuisng elit.Lorem ipsum dolor sit amet, consectetur adipisiciQuisng elit.Lorem ipsum dolor sit amet, consectetur adipisiciQuisng elit. ",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset :["start start","end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-500", "500"]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>see Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Project() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="project-main" ref={ref}>
      <div className="progress">
        <h1>Featured works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {item.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Project;
