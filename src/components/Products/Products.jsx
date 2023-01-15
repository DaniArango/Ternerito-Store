import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsState";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { AiOutlineDoubleRight } from "react-icons/ai";
import "./Products.scss";

const ApiFake = () => {
  
  const { fakeProducts, getApiProducts } = useContext(ProductsContext);

  const [page, setPage]=useState(1)
  const limit = 8;

  useEffect(() => {
    getApiProducts();
  }, []);

  return (
    <div className="productsview">
      <div className="container-products">
        {fakeProducts
          .filter((productfake, index) => {
            return index >= 0 + (page - 1) * limit && index < limit * page;
          })
          .map((productfake) => {
            return (
              <div key={productfake.id} className="products">
                <br />
                <img src={productfake.image} />
                <br />
                <p>
                  <strong>{productfake.title}</strong>
                </p>
                <br />
                <p>{productfake.category}</p>
                <p>{productfake.price}€</p>
                <button className="btn">Shop Now</button>
                <br />
              </div>
            );
          })}
      </div>
      <div className="btnscontainer">
        <button className="btnsnext" onClick={()=>{
          setPage(page -1)
          window.scrollTo(0, 0);}}>
          <AiOutlineDoubleLeft /> Previous
        </button>
        <button className="btnsnext" onClick={()=>{
          setPage(page +1)
          window.scrollTo(0, 0);}}>
          Next <AiOutlineDoubleRight />{" "}

        </button>
      </div>
    </div>
  );
};

export default ApiFake;
