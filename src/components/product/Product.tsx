import React from "react";
import "./Product.css";

interface Props {
  id: number;
  name: string;
  price: number;
  description: string;
  img?: string;
}

const Product = ({ id, name, price, description, img }: Props) => {
  return (
    <div className="product">
      <img src={require("../../assets/img/product/" + img)} alt="" />
      <div className="product-name">{name}</div>
      <div className="product-price">${price}.00</div>
    </div>
  );
};

export default Product;
