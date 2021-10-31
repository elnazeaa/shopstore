const singleProductReducer = (state, action) => {
  if (action.type === "LOADER") {
    return { ...state, loading: true };
  }

  if (action.type === "GET_SINGLE_PRODUCT") {
    return { ...state, singleProduct: action.payload, loading: false };
  }

  if (action.type === "GET_ID") {
    return { ...state, singlePrId: action.payload };
  }

  if (action.type === "ADD_ALL_ITEMS_TO_CART") {
    // idPr: "",namePr: "",colorPr: "", numberPr: "",feePr: "",stocksPr: "",
    const { number, keepColor, idNum, singlePrName, pricePr, stockPr } =
      action.payload;
    let tempCheck = state.singlePrForCartPage.find(
      (item) => item.idPr === idNum + keepColor
    );
    if (tempCheck) {
      let newPr = state.singlePrForCartPage.map((item) => {
        if (item.idPr === idNum + keepColor) {
          let newNum = number + item.numberPr;
          if (newNum >= stockPr) {
            newNum = stockPr;
          }
          return { ...item, numberPr: newNum };
        }
        return { ...item };
      });
      return { ...state, singlePrForCartPage: newPr };
    }
    return {
      ...state,
      singlePrForCartPage: [
        ...state.singlePrForCartPage,
        {
          idPr: `${action.payload.idNum}${action.payload.keepColor}`,
          namePr: action.payload.singlePrName,
          colorPr: action.payload.keepColor,
          numberPr: action.payload.number,
          feePr: action.payload.pricePr,
          stocksPr: action.payload.stockPr,
          image: action.payload.imgs,
        },
      ],
    };
  }

  if (action.type === "INCREASE_NUM") {
    let newProducts = state.singlePrForCartPage.map((product) => {
      if (product.idPr === action.payload) {
        let addNum = product.numberPr + 1;
        if (product.numberPr >= product.stocksPr) {
          addNum = product.stocksPr;
        }
        return { ...product, numberPr: addNum };
      } else {
        return product;
      }
    });
    return { ...state, singlePrForCartPage: newProducts };
  }

  if (action.type === "DECREASE_NUM") {
    let newProducts = state.singlePrForCartPage.map((product) => {
      if (product.idPr === action.payload) {
        let decNum = product.numberPr - 1;
        if (product.numberPr <= 1) {
          decNum = 1;
        }
        return { ...product, numberPr: decNum };
      } else {
        return product;
      }
    });
    return { ...state, singlePrForCartPage: newProducts };
  }

  if (action.type === "CLEAR_SHOPPING_CART") {
    return { ...state, singlePrForCartPage: [] };
  }

  if (action.type === "MOVE_TO_TRASH") {
    const newProduct = state.singlePrForCartPage.filter((product) => {
      return product.idPr !== action.payload;
    });
    return { ...state, singlePrForCartPage: newProduct };
  }

  if (action.type === "COMPUTE_TOTAL_NUMBER_AND_PAYMENT") {
    let { subTotal, totalNumber, shipping } = state;
    const total = state.singlePrForCartPage.reduce(
      (items, products) => {
        items.totalAmounts += products.numberPr;
        items.totalFee += products.numberPr * products.feePr;
        return items;
      },
      { totalAmounts: 0, totalFee: 0 }
    );
    return {
      ...state,
      subTotal: total.totalFee,
      totalNumber: total.totalAmounts,
    };
  }

  return state;
};

export default singleProductReducer;
