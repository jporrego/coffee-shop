import React from "react";
import "./ProductModal.css";
import { ProductInterface } from "../../types";
import { IoMdArrowRoundBack } from "react-icons/io";

interface ProductModalProps {
  product: ProductInterface | undefined;
  onAddToCart: (id: number) => void;
  closeModal: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onAddToCart,
  closeModal,
}) => {
  return (
    <div className="product-modal">
      <div className="nav">
        <IoMdArrowRoundBack onClick={() => closeModal()}></IoMdArrowRoundBack>
      </div>
      <img src={require("../../assets/img/product/" + product?.img)} alt="" />
      <div className="product-modal-info">
        <div className="product-modal-name">{product?.name}</div>
        <div className="product-modal-price">${product?.price}.00</div>
        <div className="product-modal-description">{product?.description}</div>
        {product && (
          <div
            className="div"
            onClick={(e) => onAddToCart && onAddToCart(product.id)}
          >
            O
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductModal;
