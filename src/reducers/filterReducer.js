const filterReducer = (state, action) => {
  if (action.type === "GET_ALL_PRODUCTS") {
    return { ...state, all_products: action.payload };
  }
  if (action.type === "GRID_VIEW") {
    return { ...state, gridView: true };
  }
  if (action.type === "LIST_VIEW") {
    return { ...state, gridView: false };
  }
  if (action.type === "Get_SORT_TERM") {
    return { ...state, sortTerm: action.payload };
  }
  if (action.type === "SORT") {
    if (state.sortTerm === "price-lowest") {
      const lowToHigh = state.all_products.sort((a, b) => a.price - b.price);
      return { ...state, all_products: lowToHigh };
    }
    if (state.sortTerm === "price-highest") {
      const highToLow = state.all_products.sort((a, b) => b.price - a.price);
      return { ...state, all_products: highToLow };
    }
    if (state.sortTerm === "name-a") {
      const aToZSort = state.all_products.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      return { ...state, all_products: aToZSort };
    }
    if (state.sortTerm === "name-z") {
      const zToASort = state.all_products.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
      return { ...state, all_products: zToASort };
    }
    return { ...state, all_products: state.all_products };
  }
  return state;
};

export default filterReducer;
