import React from "react";
import "./CartProduct.css";
import { MdDeleteOutline } from "react-icons/md";
import { Product } from "../../../types";
import CloudinaryImg from "../../cloudinary_img/CloudinaryImg";

interface CartProductProps {
  product: { product: Product; amount: number };
  changeAmount: (id: string, operator: "-" | "+") => void;
  deleteProduct: (id: string) => void;
}

const CartProduct: React.FC<CartProductProps> = ({
  product,
  changeAmount,
  deleteProduct,
}) => {
  const { _id, name, price, img } = product.product;
  const { amount } = product;

  return (
    <div className="cart-product">
      <div className="cart-product-img">
        <CloudinaryImg path={img} size={100}></CloudinaryImg>
      </div>
      <div className="cart-product-name">{name}</div>
      <div className="cart-product-price">${price}.00</div>

      <div className="cart-product-buttons">
        <div
          className="product-amount-btn"
          onClick={(e) => changeAmount(_id, "-")}
        >
          -
        </div>
        <div className="product-amount">{amount}</div>
        <div
          className="product-amount-btn"
          onClick={(e) => changeAmount(_id, "+")}
        >
          +
        </div>
        <MdDeleteOutline
          className="delete-icon"
          onClick={() => deleteProduct(_id)}
        ></MdDeleteOutline>
      </div>
    </div>
  );
};

export default CartProduct;
