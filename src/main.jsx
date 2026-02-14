import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./../src/index.css";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import Productcontext from "./ProductContext/Productcontext.jsx";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Productcontext>
      <App />
    </Productcontext>
  </HashRouter>,
);
