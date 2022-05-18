import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { Product } from "../../../types";

interface CartProductProps {
  product: { product: Product; amount: number };
  setCartProducts: React.Dispatch<
    React.SetStateAction<{ product: Product; amount: number }[]>
  >;
  changeAmount: (id: number, operator: "-" | "+") => void;
  deleteProduct: (id: number) => void;
}

const CartProduct: React.FC<CartProductProps> = ({
  product,
  setCartProducts,
  changeAmount,
  deleteProduct,
}) => {
  const { id, name, price, img } = product.product;
  const { amount } = product;

  return (
    <div>
      <div className="cart-modal-product">
        <div className="cart-modal-product-img">
          <img src={require("../../assets/img/product/" + img)} alt="" />
        </div>
        <div className="cart-modal-product-name">{name}</div>
        <div className="cart-modal-product-price">${price}.00</div>

        <div className="cart-modal-product-buttons">
          <div
            className="product-amount-btn"
            onClick={(e) => changeAmount(product.product.id, "-")}
          >
            -
          </div>
          <div className="product-amount">{product.amount}</div>
          <div
            className="product-amount-btn"
            onClick={(e) => changeAmount(product.product.id, "+")}
          >
            +
          </div>
          <MdDeleteOutline
            className="delete-icon"
            onClick={() => deleteProduct(product.product.id)}
          ></MdDeleteOutline>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
