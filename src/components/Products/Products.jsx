import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsState";
import { Button, Card } from 'antd';
import { BsFillCartCheckFill, BsFillCartDashFill } from "react-icons/bs";

const ApiFake = () => {
  const {fakeProducts, getApiProducts } = useContext(ProductsContext);

  useEffect(() => {
    getApiProducts();
  }, []);

  return (
    <div className="container-products">
  {fakeProducts.map((productfake) => {
    return (
      <Card
      title={productfake.title}
      bordered={false}
      style={{
        width: 300,
      }}
    >
    <p >{productfake.category}</p>
    <p >{productfake.price}</p>
    <img src={productfake.image } width="100" height="100" alt=""  /> <br />
    <br/> 
    <Button> <BsFillCartCheckFill /> </Button>
    <Button> <BsFillCartDashFill /> </Button>
    </Card>
    )}
  )};
  </div>
  )};

export default ApiFake;
