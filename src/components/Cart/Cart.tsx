import React, { useState } from "react";
import { Product } from "../../types";
import "./Cart.css";
import { BsFillHandbagFill } from "react-icons/bs";

interface CartProps {
  cartProducts: Product[];
}
const Cart: React.FC<CartProps> = ({ cartProducts }) => {
  const [cartModalVisible, setCartModalVisible] = useState(false);

  const getTotal = () => {
    let total = 0;
    cartProducts.length > 0 &&
      cartProducts.map((product) => (total += product.price));
    return total;
  };

  const cartIcon = () => {
    return (
      <div className="cart-icon">
        <BsFillHandbagFill className="icon"></BsFillHandbagFill>
        <div className="cart-icon__product-ammount">{cartProducts.length}</div>
      </div>
    );
  };

  return <div>{cartIcon()}</div>;
};

export default Cart;
