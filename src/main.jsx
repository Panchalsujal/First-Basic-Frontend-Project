import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./../src/style.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Productcontext from "./ProductContext/Productcontext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/First-Basic-Frontend-Project">
    <Productcontext>
      <App />
    </Productcontext>
  </BrowserRouter>,
);
