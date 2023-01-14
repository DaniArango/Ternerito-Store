const products = (state, action) => {
    switch (action.type) {
      case "GET_APIPRODUCTS":
        return {
          ...state,
          fakeProducts: action.payload,
        };

    };
}
    export default products;