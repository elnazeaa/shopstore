import React, { createContext, useContext, useEffect, useReducer } from "react";
import filterReducer from "../reducers/filterReducer";
import { ProductContext } from "./Products";

export const FilterContext = createContext();

const FilterContextProvider = (props) => {
  const initialState = {
    all_products: [],
    gridView: true,
    filterProducts: [],
    sortTerm: "price-lowest",
    filterPrs: {
      searchTerm: "",
      category: "",
      company: "",
      color: "",
      price: 0,
      min_price: 0,
      max_price: 0,
    },
  };
  const [state, dispatch] = useReducer(filterReducer, initialState);
  const { products } = useContext(ProductContext);

  useEffect(() => {
    dispatch({ type: "GET_ALL_PRODUCTS", payload: products });
    dispatch({ type: "SORT" });
  }, [products, state.sortTerm]);

  const handleGrid = (grid) => {
    dispatch({ type: "GRID_VIEW" });
  };

  const handleList = (list) => {
    dispatch({ type: "LIST_VIEW" });
  };

  const handleSortOptions = (e) => {
    const sortValue = e.target.value;
    dispatch({ type: "Get_SORT_TERM", payload: sortValue });
  };

  return (
    <FilterContext.Provider
      value={{ ...state, handleGrid, handleList, handleSortOptions }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
