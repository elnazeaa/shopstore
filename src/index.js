import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ArticleContextProvider from "./contexts/ArticleContext";
import FaqProvider from "./contexts/FaqContext";
import FilterContextProvider from "./contexts/FilterContext";
import NavContextApiProvider from "./contexts/NavContextApi";
import ProductContextProvider from "./contexts/Products";
import SingleProductProvider from "./contexts/SingleProductContext";

ReactDOM.render(
  <React.StrictMode>
    <NavContextApiProvider>
      <FaqProvider>
        <ArticleContextProvider>
          <ProductContextProvider>
            <FilterContextProvider>
              <SingleProductProvider>
                <App />
              </SingleProductProvider>
            </FilterContextProvider>
          </ProductContextProvider>
        </ArticleContextProvider>
      </FaqProvider>
    </NavContextApiProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
