import React, { createContext, useContext, useEffect, useReducer } from "react";
import filterReducer from "../reducers/filterReducer";
import { ProductContext } from "./Products";

export const FilterContext = createContext();

const FilterContextProvider = (props) => {
  // Get All Products from Products.js
  // to get and use we have to use "useEffect"
  const { products } = useContext(ProductContext);

  // initialized values
  const initialState = {
    all_products: [],
    filterProducts: [],
    loading: false,
    gridView: true,
    sort_val: "price-lowest",
    filters: {
      text: "",
      category: "all",
      company: "all",
      color: "all",
      price: 0,
      max_price: 0,
      min_price: 0,
      shipping: false,
    },
  };

  const [state, dispatch] = useReducer(filterReducer, initialState);

  // to get All Products
  useEffect(() => {
    getProducts();
  }, [products]);

  // For Filter And Sort
  // order is important if Sort uses first Filter wont work
  useEffect(() => {
    dispatch({ type: "FILTER" });
    dispatch({ type: "SORT" });
  }, [products, state.sort_val, state.filters]);

  // function to get all products
  const getProducts = () => {
    dispatch({ type: "GETS_ALL_PRODUCTS", payload: products });
    dispatch({ type: "GET_PRICES" });
  };

  // Grid Views
  const handleGrid = (grid) => {
    if (grid === "grid") {
      dispatch({ type: "GRID_VIEW" });
    } else {
      dispatch({ type: "LIST_VIEW" });
    }
  };

  // Get Sort Value
  const sortItems = (e) => {
    let sort_Val = e.target.value;
    dispatch({ type: "GET_SORT_VALUES", payload: sort_Val });
  };

  // Apply Finctionality to work
  const getFilterValues = (e) => {
    const fil_name = e.target.name;
    let fil_val;
    if (fil_name === "text") {
      fil_val = e.target.value;
    }
    if (fil_name === "category") {
      fil_val = e.target.textContent;
    }
    if (fil_name === "company") {
      fil_val = e.target.value;
    }
    if (fil_name === "color") {
      fil_val = e.target.dataset.color;
    }
    if (fil_name === "shipping") {
      fil_val = e.target.checked;
    }
    if (fil_name === "price") {
      fil_val = e.target.value;
    }
    dispatch({ type: "SET_FILTER_VALUE", payload: { fil_name, fil_val } });
  };

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  return (
    <FilterContext.Provider
      value={{ ...state, handleGrid, sortItems, getFilterValues, clearFilters }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
