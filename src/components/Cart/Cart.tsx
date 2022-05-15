import React, { useState } from "react";
import "./Cart.css";

interface ProductInterface {
  id: number;
  name: string;
  price: number;
  description: string;
  img?: string;
}

interface CartProps {
  products?: ProductInterface[];
}
const Cart: React.FC<CartProps> = ({ products }) => {
  let total = 0;
  products && products.map((product) => (total += product.price));
  return <div>${total}</div>;
};

export default Cart;
