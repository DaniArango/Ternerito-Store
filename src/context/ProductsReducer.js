const products = (state, action) => {
    switch (action.type) {
      case "GET_APIPRODUCTS":
        return {
          ...state,
          products: action.payload,
        };

    };
}
    export default products;