import React from "react";
import { createRoot } from "react-dom/client";
import Blog from "./Pages/Blog";
import "./app.css";

const root = createRoot(document.getElementById("app"));
root.render(<Blog />);
