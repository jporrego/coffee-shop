import React, { useState, useEffect } from "react";
import "./Shop.css";
import { ProductInterface } from "../../types";
import Cart from "../cart/Cart";
import ProductList from "../product-list/ProductList";
import ProductModal from "../product-modal/ProductModal";

const Shop = () => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [cartProducts, setCartProducts] = useState<ProductInterface[]>([]);

  const [modalOpen, setModalOpen] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<ProductInterface>();

  useEffect(() => {
    // Update the document title using the browser API
    getProducts();

    const productToAdd = [...products].find((p) => p.id === 1);
    if (productToAdd !== undefined) {
      setSelectedProduct(productToAdd);
    }
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch("data/products.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

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
    <div className="shop">
      <div className="nav">Navbar</div>
      <Cart products={cartProducts}></Cart>
      <div className="shop-title">Coffee Makers</div>
      <ProductList
        products={products}
        onAddToCart={addProductToCart}
        openProductModal={openProductModal}
      ></ProductList>
      {selectedProduct && (
        <ProductModal product={selectedProduct}></ProductModal>
      )}
    </div>
  );
};

export default Shop;
