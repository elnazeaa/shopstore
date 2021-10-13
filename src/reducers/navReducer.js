const navReducer = (state, action) => {
  if (action.type === "HANDLE_CLICK") {
    return { ...state, openSide: !action.payload };
  }
  if (action.type === "HANDLE_CLOSE") {
    return { ...state, openSide: false };
  }
  return state;
};

export default navReducer;
