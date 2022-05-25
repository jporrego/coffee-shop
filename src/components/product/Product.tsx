import React, { useState } from "react";
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
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div
      className="product"
      onClick={() => !showMessage && openProductModal(id)}
    >
      <img src={require("../../assets/img/product/" + img)} alt="" />
      <div className="product-name">{name}</div>
      <div className="product-price">${price}.00</div>
      <button
        className="btn-round"
        onClick={(e) => {
          e.stopPropagation();
          onAddToCart(id);
          setShowMessage(true);
          setTimeout(() => setShowMessage(false), 1500);
        }}
      >
        +
      </button>
      {showMessage && (
        <div className="product-added-mesage">
          <div>Added to cart</div>
        </div>
      )}
    </div>
  );
};

export default Product;
