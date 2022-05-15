import React from "react";
import "./ProductModal.css";
import { ProductInterface } from "../../types";

interface ProductModalProps {
  product: ProductInterface | undefined;
}

const ProductModal: React.FC<ProductModalProps> = ({ product }) => {
  return <div>{product?.name}</div>;
};

export default ProductModal;
