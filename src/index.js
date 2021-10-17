import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import FaqProvider from "./contexts/FaqContext";
import NavContextApiProvider from "./contexts/NavContextApi";

ReactDOM.render(
  <React.StrictMode>
    <NavContextApiProvider>
      <FaqProvider>
        <App />
      </FaqProvider>
    </NavContextApiProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
