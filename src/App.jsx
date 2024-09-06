import { useState } from "react";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import Test from "./Components/Test";
import ParallaxOne from "../ParallaxOne";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import MyRoutes from "./Components/MyRoutes";
import Hero from "../src/Components/Hero";
import About from "../src/Components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     
        <section id="home">
        {/* <MyRoutes/> */}
        <NavigationBar />
        <Hero />
      </section>

      <section id="about">
        <ParallaxOne type="about" />
      </section>

      <section>
        <About />
      </section>

      <section id="skills">
        <ParallaxOne type="skills" />
      </section>

      <section>
        <Skills />
      </section>
      <Project />

      <section id="contact">
        <Contact />
      </section>

     
    </>
  );
}

export default App;
