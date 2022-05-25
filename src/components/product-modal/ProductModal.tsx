import React, { useState, useEffect } from "react";
import "./ProductModal.css";
import { Product } from "../../types";
import { IoMdArrowRoundBack } from "react-icons/io";

interface ProductModalProps {
  product: Product | undefined;
  onAddToCart: (id: number) => void;
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
          <img
            src={require("../../assets/img/product/" + product?.img)}
            alt=""
          />
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
                  onAddToCart(product.id);
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
