import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsState";

const ApiFake = () => {
  const {fakeProducts, getApiProducts } = useContext(ProductsContext);

  useEffect(() => {
    getApiProducts();
  }, []);

  return (
    <div className="container-products">
    
  {fakeProducts.map((productfake) => {
    return (
      <div key={productfake.id}>
        <div>
          <p >{productfake.title}</p>
          <p >{productfake.category}</p>
          <p >{productfake.price}</p>
          <img src={productfake.image } width="100" height="100" alt=""  /> <br />
          <p >{productfake.description}</p>
        </div>  
        </div>
    )}
  )};
  </div>
  )};

export default ApiFake;
