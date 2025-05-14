import React from "react";
import { createRoot } from "react-dom/client";
import About from "./About.jsx";
import "./../Home/App.js";

const root = createRoot(document.getElementById("app"));
root.render(<About />);
