const filterReducer = (state, action) => {
  if (action.type === "GETS_ALL_PRODUCTS") {
    return {
      ...state,
      all_products: action.payload,
      filterProducts: action.payload,
    };
  }

  if (action.type === "GET_PRICES") {
    let tempPr = state.all_products;
    let min_price = 0;
    let prices = tempPr.map((item) => item.price);
    let max_price = Math.max(...prices);
    return {
      ...state,
      filters: { ...state.filters, price: +max_price, max_price: +max_price },
    };
  }

  if (action.type === "GRID_VIEW") {
    return { ...state, gridView: true };
  }

  if (action.type === "LIST_VIEW") {
    return { ...state, gridView: false };
  }

  if (action.type === "GET_SORT_VALUES") {
    return { ...state, sort_val: action.payload };
  }

  if (action.type === "SORT") {
    let tempForAllProducts = [...state.filterProducts];
    const val = state.sort_val;
    if (val === "price-lowest") {
      tempForAllProducts = tempForAllProducts.sort((a, b) => a.price - b.price);
    }
    if (val === "price-highest") {
      tempForAllProducts = tempForAllProducts.sort((a, b) => b.price - a.price);
    }
    if (val === "name-a") {
      tempForAllProducts = tempForAllProducts.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }
    if (val === "name-z") {
      tempForAllProducts = tempForAllProducts.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }
    return { ...state, filterProducts: tempForAllProducts };
  }

  if (action.type === "SET_FILTER_VALUE") {
    return {
      ...state,
      filters: {
        ...state.filters,
        [action.payload.fil_name]: action.payload.fil_val,
      },
    };
  }

  if (action.type === "FILTER") {
    const { text, category, company, color, shipping, price } = state.filters;
    let tempProducts = [...state.all_products];
    if (text) {
      tempProducts = tempProducts.filter((item) =>
        item.name.toLowerCase().startsWith(text)
      );
    }
    if (category !== "all") {
      tempProducts = tempProducts.filter((item) => item.category === category);
    }
    if (company !== "all") {
      tempProducts = tempProducts.filter((item) => item.company === company);
    }
    if (color !== "all") {
      tempProducts = tempProducts.filter((item) => item.colors.includes(color));
      console.log(tempProducts);
    }
    if (shipping) {
      tempProducts = tempProducts.filter((item) => item.shipping);
    }
    if (price) {
      tempProducts = tempProducts.filter((item) => item.price <= price);
    }
    return { ...state, filterProducts: tempProducts };
  }

  if (action.type === "CLEAR_FILTERS") {
    return {
      ...state,
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
  }

  return state;
};

export default filterReducer;
