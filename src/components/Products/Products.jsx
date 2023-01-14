import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsState";
import { Button, Card } from "antd";
import { BsFillCartCheckFill, BsFillCartDashFill } from "react-icons/bs";
import "./Products.scss";

const ApiFake = () => {
  const { fakeProducts, getApiProducts } = useContext(ProductsContext);

  useEffect(() => {
    getApiProducts();
  }, []);

  return (
    
    <div className="container-products">
      {fakeProducts.map((productfake) => {
        return (
          
          <Card>
            <div key={productfake.id} className="products">
            <p
            
              style={{
                width: 300,
              }}
            >
              
              {productfake.title}
            </p>
            <hr />
            <br />
            <img src={productfake.image} width="150" height="150"  />
            <br />
            <br />
            <p>Category: {productfake.category}</p>
            <p>{productfake.price}€</p>
            <br />
            <Button> <BsFillCartCheckFill /> </Button>
            
            </div>
          </Card>
        );
      })}
      ;
    </div>
  );
};

export default ApiFake;
