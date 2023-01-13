import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsState";

const ApiFake = () => {
  const {fakeProducts, getApiProducts } = useContext(ProductsContext);

  useEffect(() => {
    getApiProducts();
  }, []);

  const productsfake = fakeProducts.map((productfake) => {
    return (
      <div key={productfake.id}>
        <div>
          <p >{productfake.title}</p>
          <p >{productfake.category}</p>
          <img src={productfake.image } width="350" height="500" alt=""  /> <br />
          <p >{productfake.description}</p>
          

        </div>
      </div>
    );
  }); 


  return <div>{productsfake}</div>;
};

export default ApiFake;
