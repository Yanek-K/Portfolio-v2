import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import "./app.css";
import FixedIcons from "./Components/FixedIcons";
import Services from "./Components/Services";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <FixedIcons />
      <Hero />
      <Services />
      <Experience />
      <Projects />
      <About />
      <Footer />
    </div>
  );
};

export default App;
