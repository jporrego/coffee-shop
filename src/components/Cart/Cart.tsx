import React, { useState } from "react";
import { ProductInterface } from "../../types";
import "./Cart.css";
import { FaShoppingCart } from "react-icons/fa";

interface CartProps {
  products?: ProductInterface[];
}
const Cart: React.FC<CartProps> = ({ products }) => {
  let total = 0;
  products && products.map((product) => (total += product.price));
  return (
    <div>
      <FaShoppingCart className="icon"></FaShoppingCart>
      {total}
    </div>
  );
};

export default Cart;
