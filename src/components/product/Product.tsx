import React, { useState } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import "./Product.css";
import { Product as ProductInterface } from "../../types";

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

  // ---- Connection to Cloudinary ----
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dzk0haoio",
    },
  });
  let image = cld.image(img);
  image.resize(fill().width(150));

  return (
    <div
      className="product"
      onClick={() => !showMessage && openProductModal(_id)}
    >
      <AdvancedImage cldImg={image} />
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
