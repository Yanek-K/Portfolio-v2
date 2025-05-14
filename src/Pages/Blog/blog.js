import React from "react";
import { createRoot } from "react-dom/client";
import Blog from "./Blog.jsx";
import "./../Home/App.js";

const root = createRoot(document.getElementById("app"));
root.render(<Blog />);
