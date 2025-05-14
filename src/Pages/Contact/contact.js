import React from "react";
import { createRoot } from "react-dom/client";
import Contact from "./Contact.jsx";
import "./../Home/App.js";

const root = createRoot(document.getElementById("app"));
root.render(<Contact />);
