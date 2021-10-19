import React, { createContext, useEffect, useReducer } from "react";
import productReducer from "../reducers/productReducer";
import { products_url } from "../utils/infos";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const initalState = {
    loading: false,
    products: [],
    featurePrducts: [],
  };
  const [state, dispatch] = useReducer(productReducer, initalState);

  const getProducts = async () => {
    try {
      dispatch({ type: "LOADER" });
      const response = await fetch(products_url);
      const res = await response.json();
      dispatch({ type: "GET_PRODUCTS", payload: res });
      dispatch({ type: "GET_FEATURED_PRODUCTS", payload: res });
    } catch (error) {}
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ ...state }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
