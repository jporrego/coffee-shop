import React, { useEffect, useState } from "react";
import { Product } from "../../types";
import "./Cart.css";
import { BsFillHandbagFill } from "react-icons/bs";

interface CartProps {
  cartProducts: Product[];
}
const Cart: React.FC<CartProps> = ({ cartProducts }) => {
  const [cartVisible, setCartVisible] = useState(true);

  useEffect(() => {
    setScrolling();
  });

  const getTotal = () => {
    let total = 0;
    cartProducts.length > 0 &&
      cartProducts.map((product) => (total += product.price));
    return total;
  };

  const setScrolling = () => {
    if (cartVisible) {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const cartIcon = () => {
    return (
      <div className="cart-icon" onClick={() => setCartVisible(false)}>
        <BsFillHandbagFill className="icon"></BsFillHandbagFill>
        <div className="cart-icon__product-ammount">{cartProducts.length}</div>
      </div>
    );
  };

  const cartModal = () => {
    return (
      <div className="cart-modal" onClick={() => setCartVisible(true)}>
        <div></div>
      </div>
    );
  };

  return <div className="cart">{cartVisible ? cartIcon() : cartModal()}</div>;
};

export default Cart;
