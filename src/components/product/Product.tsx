import React from "react";
import "./Product.css";
import { Product as ProductInterface } from "../../types";

interface ProductProps {
  product: ProductInterface;
  onAddToCart: (id: number) => void;
  openProductModal: (id: number) => void;
}

const Product: React.FC<ProductProps> = ({
  product,
  onAddToCart,
  openProductModal,
}) => {
  const { id, name, price, img } = product;

  return (
    <div
      className="product"
      onClick={() => openProductModal && openProductModal(id)}
    >
      <img src={require("../../assets/img/product/" + img)} alt="" />
      <div className="product-name">{name}</div>
      <div className="product-price">${price}.00</div>
      <button
        className="btn-round"
        onClick={(e) => {
          e.stopPropagation();
          onAddToCart && onAddToCart(id);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Product;
