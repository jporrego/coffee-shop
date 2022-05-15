import React from "react";
import "./Product.css";
import { ProductInterface } from "../../types";

const Product = ({
  id,
  name,
  price,
  description,
  img,
  onAddToCart,
}: ProductInterface) => {
  return (
    <div className="product">
      <img src={require("../../assets/img/product/" + img)} alt="" />
      <div className="product-name">{name}</div>
      <div className="product-price">${price}.00</div>
      <div className="btn-round" onClick={(e) => onAddToCart(id)}>
        +
      </div>
    </div>
  );
};

export default Product;
