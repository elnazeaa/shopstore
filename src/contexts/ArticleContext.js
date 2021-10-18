import React, { createContext, useEffect, useReducer } from "react";
import articleReducer from "../reducers/articleReducer";

export const ArticleContext = createContext();

const ArticleContextProvider = (props) => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const initialState = {
    news: [],
  };

  const [state, dispatch] = useReducer(articleReducer, initialState);

  const getNews = async () => {
    try {
      const response = await fetch(url);
      const res = await response.json();
      dispatch({ type: "GET_NEWS", payload: res.slice(0, 30) });
    } catch (error) {}
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <ArticleContext.Provider value={{ ...state }}>
      {props.children}
    </ArticleContext.Provider>
  );
};

export default ArticleContextProvider;
