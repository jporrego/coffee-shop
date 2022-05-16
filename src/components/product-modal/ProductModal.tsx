import React from "react";
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
  const handleCloseModal = () => {
    setSelectedProduct(undefined);
  };

  return (
    <div className="product-modal">
      <div className="nav">
        <IoMdArrowRoundBack
          onClick={() => handleCloseModal()}
        ></IoMdArrowRoundBack>
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
