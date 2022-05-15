import React, { useState, useEffect } from "react";
import "./Shop.css";
import Cart from "../Cart/Cart";
import ProductList from "../product-list/ProductList";

const Shop = () => {
  const [products, setProducts] = useState([]);

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
  return (
    <div>
      <div className="nav">Navbar</div>
      <Cart products={products}></Cart>
      <ProductList products={products}></ProductList>
    </div>
  );
};

export default Shop;
