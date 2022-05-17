import React, { useEffect, useState } from "react";
import { Product } from "../../types";
import "./Cart.css";
import { BsFillHandbagFill } from "react-icons/bs";
import { IoMdArrowRoundBack } from "react-icons/io";

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
      <div className="cart-modal">
        <div className="cart-modal-nav">
          <IoMdArrowRoundBack
            className="btn-back"
            onClick={() => setCartVisible(true)}
          ></IoMdArrowRoundBack>
          <div className="cart-modal-title">My Cart</div>
        </div>
        <div className="cart-modal-product-list">
          {cartProducts.map((product) => (
            <div className="cart-modal-product">
              <div className="cart-modal-product-img">
                <img
                  src={require("../../assets/img/product/" + product.img)}
                  alt=""
                />
              </div>
              <div className="cart-modal-product-name">{product.name}</div>
              <div className="cart-modal-product-price">
                ${product.price}.00
              </div>
              <div className="cart-modal-product-buttons">- 1 + Delete</div>
            </div>
          ))}
        </div>
        <div className="cart-modal-info">
          <div className="cart-modal-amount">{cartProducts.length} items</div>
          <div className="cart-modal-total">${getTotal()}.00</div>
        </div>
      </div>
    );
  };

  return <div className="cart">{cartVisible ? cartIcon() : cartModal()}</div>;
};

export default Cart;
