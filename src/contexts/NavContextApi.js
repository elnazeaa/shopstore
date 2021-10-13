import React, { createContext, useReducer } from "react";
import navReducer from "../reducers/navReducer";

export const NavContextApi = createContext();

const NavContextApiProvider = (props) => {
  const initialState = {
    openSide: false,
  };

  const [state, dispatch] = useReducer(navReducer, initialState);

  const handleClick = () => {
    dispatch({ type: "HANDLE_CLICK", payload: state.openSide });
  };

  const handleClose = () => {
    dispatch({ type: "HANDLE_CLOSE" });
  };

  return (
    <NavContextApi.Provider value={{ ...state, handleClick, handleClose }}>
      {props.children}
    </NavContextApi.Provider>
  );
};

export default NavContextApiProvider;
