import React, { useState } from "react";
import { ProductInterface } from "../../types";
import "./Cart.css";
import { BsFillHandbagFill } from "react-icons/bs";

interface CartProps {
  products?: ProductInterface[];
}
const Cart: React.FC<CartProps> = ({ products }) => {
  let total = 0;
  products && products.map((product) => (total += product.price));
  return (
    <div>
      <BsFillHandbagFill className="icon"></BsFillHandbagFill>${total}.00
    </div>
  );
};

export default Cart;
