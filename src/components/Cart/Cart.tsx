import React, { useEffect, useState } from "react";
import { Product } from "../../types";
import "./Cart.css";
import { BsFillHandbagFill } from "react-icons/bs";
import { IoMdArrowRoundBack } from "react-icons/io";

interface CartProps {
  cartProducts: { product: Product; amount: number }[];
}
const Cart: React.FC<CartProps> = ({ cartProducts }) => {
  const [cartVisible, setCartVisible] = useState(true);

  useEffect(() => {
    setScrolling();
  });

  const getProductAmount = () => {
    let productAmount = 0;
    cartProducts.length > 0 &&
      cartProducts.map((product) => (productAmount += product.amount));
    return productAmount;
  };

  const getTotal = () => {
    let total = 0;
    cartProducts.length > 0 &&
      cartProducts.map(
        (product) => (total += product.product.price * product.amount)
      );
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
        <div className="cart-icon__product-ammount">{getProductAmount()}</div>
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
                  src={require("../../assets/img/product/" +
                    product.product.img)}
                  alt=""
                />
              </div>
              <div className="cart-modal-product-name">
                {product.product.name}
              </div>
              <div className="cart-modal-product-price">
                ${product.product.price}.00
              </div>
              {product.amount}
              <div className="cart-modal-product-buttons">- 1 + Delete</div>
            </div>
          ))}
        </div>
        <div className="cart-modal-info">
          <div className="cart-modal-amount">{getProductAmount()} items</div>
          <div className="cart-modal-total">${getTotal()}.00</div>
        </div>
      </div>
    );
  };

  return <div className="cart">{cartVisible ? cartIcon() : cartModal()}</div>;
};

export default Cart;
