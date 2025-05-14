import React from "react";
import { createRoot } from "react-dom/client";
import About from "./Pages/About";
import "./app.css";

const root = createRoot(document.getElementById("app"));
root.render(<About />);
