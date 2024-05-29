import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import "./app.css";
import FixedIcons from "./Components/FixedIcons";
import Services from "./Components/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <FixedIcons />
      <Hero />
      <Services />
    </div>
  );
};

export default App;
