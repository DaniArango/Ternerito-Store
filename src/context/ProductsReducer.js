const products = (state, action) => {
  switch (action.type) {
    case "GET_APIPRODUCTS":
      return {
        ...state,
        fakeProducts: action.payload,
      };
    default:
      return state;
  }
};
export default products;
