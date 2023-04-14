import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import MobileNav from "./components/MobileNav";
// animation
import { motion, useScroll } from "framer-motion";

function App() {
  
        const { scrollYProgress } = useScroll(); 
  return (
    <div>
      <motion.div style={{ scaleX: scrollYProgress }} className="z-[1000]">
        {" "}
      </motion.div>
      <Nav />
      <MobileNav />
      <div className="mx-10 md:mx-24 lg:mx-40">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
