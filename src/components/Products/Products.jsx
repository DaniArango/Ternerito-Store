import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsState";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import "./Products.scss";



const ApiFake = () => {
  const { fakeProducts, getApiProducts } = useContext(ProductsContext);

  useEffect(() => {
    getApiProducts();
  }, []);

  return (
    
       <div className="btnscontainer">
       <button className="btnsnext"><AiOutlineDoubleLeft /> Previous</button>
       <button className="btnsnext">Next <AiOutlineDoubleRight /> </button>
      
      <div className="container-products">
      {fakeProducts.map((productfake) => {
        return (
          <div key={productfake.id} className="products">
            <p 
              style={{
                width: 250,
              }}
            >
            {productfake.title}
              <hr />
            </p>

            <br />
            <img src={productfake.image} width="150" height="150" />
            <br />
            <br />
            <p>Category: {productfake.category}</p>
            <p>{productfake.price}€</p>
            <button className="btn">Shop Now</button>
            <br />
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default ApiFake;
