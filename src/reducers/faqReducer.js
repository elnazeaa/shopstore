const faqReducer = (state, action) => {
  if (action.type === "FAQ_GET") {
    return { ...state, faqs: action.payload };
  }
  if (action.type === "SEARCH_TERM") {
    return { ...state, searchTerm: action.payload };
  }
  return state;
};

export default faqReducer;
