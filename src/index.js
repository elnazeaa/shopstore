import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ArticleContextProvider from "./contexts/ArticleContext";
import FaqProvider from "./contexts/FaqContext";
import NavContextApiProvider from "./contexts/NavContextApi";
import ProductContextProvider from "./contexts/Products";

ReactDOM.render(
  <React.StrictMode>
    <NavContextApiProvider>
      <FaqProvider>
        <ArticleContextProvider>
          <ProductContextProvider>
            <App />
          </ProductContextProvider>
        </ArticleContextProvider>
      </FaqProvider>
    </NavContextApiProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
