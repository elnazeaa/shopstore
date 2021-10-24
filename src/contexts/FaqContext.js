import React, { createContext, useEffect, useReducer } from "react";
import faqReducer from "../reducers/faqReducer";
import faqs from "../utils/infos";

export const FaqContext = createContext();

const FaqProvider = (props) => {
  // inital Values
  const initalState = {
    faqs: [],
    searchTerm: "",
    filterResult: [],
  };

  // use Reducer to connect data and functionality
  const [state, dispatch] = useReducer(faqReducer, initalState);

  const fetchInfos = () => {
    dispatch({ type: "FAQ_GET", payload: faqs });
  };

  useEffect(() => {
    fetchInfos();
  }, []);

  const handleSearchTerm = (e) => {
    const term = e.target.value;
    dispatch({ type: "SEARCH_TERM", payload: term });
  };

  const searchFaqAndFilterTerm = () => {
    let linksExtracts = state.faqs.map((items) => {});

    console.log(linksExtracts);
  };

  return (
    <FaqContext.Provider
      value={{ ...state, handleSearchTerm, searchFaqAndFilterTerm }}
    >
      {props.children}
    </FaqContext.Provider>
  );
};

export default FaqProvider;
