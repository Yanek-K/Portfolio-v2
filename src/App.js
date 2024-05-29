import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import "./app.css";
import FixedIcons from "./Components/FixedIcons";

const App = () => {
  return (
    <div>
      <Navbar />
      <FixedIcons />
      <Hero />
    </div>
  );
};

export default App;
