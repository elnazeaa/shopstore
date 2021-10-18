const articleReducer = (state, action) => {
  if (action.type === "GET_NEWS") {
    return { ...state, news: action.payload };
  }
  return state;
};

export default articleReducer;
