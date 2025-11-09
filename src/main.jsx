// /src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import CaraQAway from "./CaraQAway.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CaraQAway />
  </React.StrictMode>
);

