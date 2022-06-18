import React, { useState, useEffect } from "react";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import "./ProductModal.css";
import { Product } from "../../types";
import { IoMdArrowRoundBack } from "react-icons/io";

interface ProductModalProps {
  product: Product | undefined;
  onAddToCart: (id: string) => void;
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product | undefined>>;
}

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onAddToCart,
  setSelectedProduct,
}) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setScrolling();
  });

  // ---- Connection to Cloudinary ----
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dzk0haoio",
    },
  });
  let image = cld.image(product && product.img);
  image.resize(fill().width(800));

  const handleCloseModal = () => {
    setSelectedProduct(undefined);
  };

  const setScrolling = () => {
    if (setSelectedProduct !== undefined) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };

  return (
    <div className="product-modal">
      <div className="product-modal__content">
        <div className="nav">
          <IoMdArrowRoundBack
            className="btn-back"
            onClick={() => handleCloseModal()}
          ></IoMdArrowRoundBack>
        </div>
        <div className="product-modal-img">
          <AdvancedImage cldImg={image} />
        </div>
        <div className="product-modal-info">
          <div className="product-modal-name">{product?.name}</div>
          <div className="product-modal-price">${product?.price}.00</div>
          <div className="product-modal-description">
            {product?.description}
          </div>
          {product && (
            <div
              className="btn-square--big btn--brown-light "
              onClick={(e) => {
                if (!showMessage) {
                  onAddToCart(product._id);
                  setShowMessage(true);
                  setTimeout(() => setShowMessage(false), 1500);
                }
              }}
            >
              {showMessage ? "Added to cart" : "Add to cart"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
