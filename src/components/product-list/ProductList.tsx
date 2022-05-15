import React from "react";
import "./ProductList.css";
import { ProductInterface } from "../../types";
import Product from "../product/Product";

interface ProductListProps {
  products: ProductInterface[];
  onAddToCart: (id: number) => void;
}
const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          img={product.img}
          onAddToCart={onAddToCart}
        ></Product>
      ))}
    </div>
  );
};

export default ProductList;
