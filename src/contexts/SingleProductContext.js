import React, { createContext, useReducer, useEffect } from "react";
import singleProductReducer from "../reducers/singleProductReducer";

export const SingleProductContext = createContext();

const initialState = {
  singleProduct: [],
  loading: false,
  singlePrId: "recQ0fMd8T0Vk211E",
  singlePrForCartPage: getItems(),
  subTotal: 0,
  shipping: 534,
  totalNumber: 0,
};

function getItems() {
  let items = window.localStorage.getItem("saveItems");
  if (items) {
    return JSON.parse(localStorage.getItem("saveItems"));
  } else {
    return [];
  }
}

const SingleProductProvider = (props) => {
  // const url = `https://course-api.com/react-store-single-product?id=`;

  const [state, dispatch] = useReducer(singleProductReducer, initialState);

  const getSinglePr = async () => {
    try {
      dispatch({ type: "LOADER" });
      const response = await fetch(
        `https://course-api.com/react-store-single-product?id=${state.singlePrId}`
      );
      if (response.status === 404) {
        dispatch({ type: "LOADER" });
      }
      const res = await response.json();
      dispatch({ type: "GET_SINGLE_PRODUCT", payload: res });
    } catch (error) {}
  };

  useEffect(() => {
    getSinglePr();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.singlePrId]);

  const getSinglePrId = (singleId) => {
    dispatch({ type: "GET_ID", payload: singleId });
  };

  useEffect(() => {
    window.localStorage.setItem(
      "saveItems",
      JSON.stringify(state.singlePrForCartPage)
    );
  }, [state.singlePrForCartPage]);

  useEffect(() => {
    dispatch({ type: "COMPUTE_TOTAL_NUMBER_AND_PAYMENT" });
  }, [state.singlePrForCartPage]);

  const addItemsToCartPage = (
    number,
    keepColor,
    idNum,
    singlePrName,
    pricePr,
    stockPr,
    imgs
  ) => {
    dispatch({
      type: "ADD_ALL_ITEMS_TO_CART",
      payload: {
        number,
        keepColor,
        idNum,
        singlePrName,
        pricePr,
        stockPr,
        imgs,
      },
    });
  };

  const handleIncrease = (productId) => {
    dispatch({ type: "INCREASE_NUM", payload: productId });
  };

  const handleDecrease = (productId) => {
    dispatch({ type: "DECREASE_NUM", payload: productId });
  };

  const clearShoppingCart = () => {
    dispatch({ type: "CLEAR_SHOPPING_CART" });
  };

  const moveToTrash = (productId) => {
    dispatch({ type: "MOVE_TO_TRASH", payload: productId });
  };

  return (
    <SingleProductContext.Provider
      value={{
        ...state,
        getSinglePrId,
        addItemsToCartPage,
        handleDecrease,
        handleIncrease,
        clearShoppingCart,
        moveToTrash,
      }}
    >
      {props.children}
    </SingleProductContext.Provider>
  );
};

export default SingleProductProvider;
