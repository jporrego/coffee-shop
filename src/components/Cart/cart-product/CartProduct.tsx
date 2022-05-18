import React from "react";
import "./CartProduct.css";
import { MdDeleteOutline } from "react-icons/md";
import { Product } from "../../../types";

interface CartProductProps {
  product: { product: Product; amount: number };
  changeAmount: (id: number, operator: "-" | "+") => void;
  deleteProduct: (id: number) => void;
}

const CartProduct: React.FC<CartProductProps> = ({
  product,
  changeAmount,
  deleteProduct,
}) => {
  const { id, name, price, img } = product.product;
  const { amount } = product;

  return (
    <div className="cart-product">
      <div className="cart-product-img">
        <img src={require("../../../assets/img/product/" + img)} alt="" />
      </div>
      <div className="cart-product-name">{name}</div>
      <div className="cart-product-price">${price}.00</div>

      <div className="cart-product-buttons">
        <div
          className="product-amount-btn"
          onClick={(e) => changeAmount(id, "-")}
        >
          -
        </div>
        <div className="product-amount">{amount}</div>
        <div
          className="product-amount-btn"
          onClick={(e) => changeAmount(id, "+")}
        >
          +
        </div>
        <MdDeleteOutline
          className="delete-icon"
          onClick={() => deleteProduct(id)}
        ></MdDeleteOutline>
      </div>
    </div>
  );
};

export default CartProduct;
