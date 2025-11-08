// /src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import CarasQASite from "./CarasQASite.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CarasQASite />
  </React.StrictMode>
);

