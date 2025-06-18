import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AppIndex from "./App";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppIndex />
    </BrowserRouter>
  </StrictMode>
);
