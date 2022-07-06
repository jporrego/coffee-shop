import React, { useState } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import "./Product.css";
import { Product as ProductInterface } from "../../types";
import CloudinaryImg from "../cloudinary_img/CloudinaryImg";

interface ProductProps {
  product: ProductInterface;
  onAddToCart: (id: string) => void;
  openProductModal: (id: string) => void;
}

const Product: React.FC<ProductProps> = ({
  product,
  onAddToCart,
  openProductModal,
}) => {
  const { _id, name, price, img } = product;
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div
      className="product"
      onClick={() => !showMessage && openProductModal(_id)}
    >
      <CloudinaryImg path={img} size={150}></CloudinaryImg>
      <div className="product-name">{name}</div>
      <div className="product-price">${price}.00</div>
      <button
        className="btn-round"
        onClick={(e) => {
          e.stopPropagation();
          onAddToCart(_id);
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
