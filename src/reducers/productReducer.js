const productReducer = (state, action) => {
  if (action.type === "LOADER") {
    return { ...state, loading: true };
  }
  if (action.type === "GET_PRODUCTS") {
    return { ...state, products: action.payload, loading: false };
  }
  if (action.type === "GET_FEATURED_PRODUCTS") {
    const featured = state.products.filter((item) => item.featured);
    return { ...state, featurePrducts: featured };
  }
  return state;
};

export default productReducer;
