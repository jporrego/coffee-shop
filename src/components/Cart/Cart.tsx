import React, { useEffect, useState } from "react";
import { Product } from "../../types";
import "./Cart.css";
import { BsFillHandbagFill } from "react-icons/bs";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { idText } from "typescript";
import { SiBuymeacoffee } from "react-icons/si";
import CartProduct from "./cart-product/CartProduct";

interface CartProps {
  cartProducts: { product: Product; amount: number }[];
  setCartProducts: React.Dispatch<
    React.SetStateAction<{ product: Product; amount: number }[]>
  >;
}
const Cart: React.FC<CartProps> = ({ cartProducts, setCartProducts }) => {
  const [cartVisible, setCartVisible] = useState(true);

  useEffect(() => {
    setScrolling();
  });

  /* ------- Functions ------- */

  const getProductAmount = (): number => {
    let productAmount = 0;
    cartProducts.length > 0 &&
      cartProducts.map((product) => (productAmount += product.amount));
    return productAmount;
  };

  const getTotal = (): number => {
    let total = 0;
    cartProducts.length > 0 &&
      cartProducts.map(
        (product) => (total += product.product.price * product.amount)
      );
    return total;
  };

  const changeAmount = (id: string, operator: "-" | "+") => {
    const product = cartProducts.find((p) => p.product._id === id);

    if (product !== undefined) {
      const index = cartProducts.indexOf(product);
      const updatedCart = [...cartProducts];
      if (operator === "+") {
        updatedCart[index].amount += 1;
      } else {
        if (updatedCart[index].amount > 1) {
          updatedCart[index].amount -= 1;
        }
      }

      setCartProducts(updatedCart);
    }
  };

  const deleteProduct = (id: string) => {
    const product = cartProducts.find((p) => p.product._id === id);

    if (product !== undefined) {
      const updatedCart = [...cartProducts].filter((p) => p.product._id !== id);
      setCartProducts(updatedCart);
    }
  };

  const setScrolling = () => {
    if (cartVisible) {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  /* ------- Elements ------- */

  const cartIcon = () => {
    return (
      <div className="cart-icon" onClick={() => setCartVisible(false)}>
        <BsFillHandbagFill className="icon"></BsFillHandbagFill>
        <div className="cart-icon__product-ammount">
          <div>{getProductAmount()}</div>
        </div>
      </div>
    );
  };

  const cartModal = () => {
    return (
      <div className="cart-modal">
        <div className="cart-modal-content">
          <div className="cart-modal-nav">
            <IoMdArrowRoundBack
              className="btn-back"
              onClick={() => setCartVisible(true)}
            ></IoMdArrowRoundBack>
            <div className="cart-modal-title">My Cart</div>
          </div>
          <div className="cart-modal-product-list">
            {cartProducts.map((product) => (
              <CartProduct
                key={product.product._id}
                product={product}
                changeAmount={changeAmount}
                deleteProduct={deleteProduct}
              ></CartProduct>
            ))}
            {cartProducts.length === 0 && (
              <div className="cart-modal-empty-message">
                <SiBuymeacoffee></SiBuymeacoffee>
                <div>Your cart is empty</div>
              </div>
            )}
          </div>
          <div className="cart-modal-info">
            <div className="cart-modal-amount">{getProductAmount()} items</div>
            <div className="cart-modal-total">${getTotal()}.00</div>
          </div>
        </div>
      </div>
    );
  };

  return <div className="cart">{cartVisible ? cartIcon() : cartModal()}</div>;
};

export default Cart;
