import React, { useState, useEffect } from "react";
import "./Shop.css";
import { ProductInterface } from "../../types";
import Cart from "../cart/Cart";
import ProductList from "../product-list/ProductList";

const Shop = () => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [cartProducts, setCartProducts] = useState<ProductInterface[]>([]);

  useEffect(() => {
    // Update the document title using the browser API
    getProducts();
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
    } catch (error) {
      console.log(error);
    }
  };

  const addProductToCart = (id: number) => {
    const productToAdd = [...products].filter((p) => p.id === id)[0];
    setCartProducts([...cartProducts, productToAdd]);
  };

  return (
    <div className="shop">
      <div className="nav">Navbar</div>
      <Cart products={cartProducts}></Cart>
      <div className="shop-title">Coffee Makers</div>
      <ProductList
        products={products}
        onAddToCart={addProductToCart}
      ></ProductList>
    </div>
  );
};

export default Shop;
