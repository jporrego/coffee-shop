import React, { useState, useEffect } from "react";
import "./ProductList.css";
import { Product as ProductInterface } from "../../types";
import Product from "../product/Product";

interface ProductListProps {
  products: ProductInterface[];
  setProducts: React.Dispatch<React.SetStateAction<ProductInterface[]>>;
  onAddToCart: (id: string) => void;
  openProductModal: (id: string) => void;
}
const ProductList: React.FC<ProductListProps> = ({
  products,
  setProducts,
  onAddToCart,
  openProductModal,
}) => {
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      /*
      const response = await fetch("data/products.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });*/
      const response = await fetch("http://localhost:4000/");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product
          key={product._id}
          product={product}
          onAddToCart={onAddToCart}
          openProductModal={openProductModal}
        ></Product>
      ))}
    </div>
  );
};

export default ProductList;
