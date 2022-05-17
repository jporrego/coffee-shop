import React, { useState, useEffect } from "react";
import "./Shop.css";
import { Product } from "../../../types";
import Cart from "../../cart/Cart";
import ProductList from "../../product-list/ProductList";
import ProductModal from "../../product-modal/ProductModal";
import Navbar from "../../navbar/Navbar";

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  const [selectedProduct, setSelectedProduct] = useState<Product>();

  const addProductToCart = (id: number) => {
    const productToAdd = [...products].find((p) => p.id === id);
    if (productToAdd !== undefined) {
      setCartProducts([...cartProducts, productToAdd]);
    }
  };

  const openProductModal = (id: number) => {
    const productToAdd = [...products].find((p) => p.id === id);
    if (productToAdd !== undefined) {
      setSelectedProduct(productToAdd);
    }
  };

  return (
    <div>
      {selectedProduct ? (
        <ProductModal
          product={selectedProduct}
          onAddToCart={addProductToCart}
          setSelectedProduct={setSelectedProduct}
        ></ProductModal>
      ) : (
        <div className="shop">
          {/*<Cart cartProducts={cartProducts}></Cart>*/}
          <Navbar
            paths={[{ path: "/", text: "home" }]}
            cart={<Cart cartProducts={cartProducts}></Cart>}
          ></Navbar>
          <div className="shop-title">Coffee Makers</div>
          <ProductList
            setProducts={setProducts}
            products={products}
            onAddToCart={addProductToCart}
            openProductModal={openProductModal}
          ></ProductList>{" "}
        </div>
      )}
    </div>
  );
};

export default Shop;
