import React, { useState, useEffect } from "react";
import "./Shop.css";
import { Product } from "../../../types";
import Cart from "../../cart/Cart";
import ProductList from "../../product-list/ProductList";
import ProductModal from "../../product-modal/ProductModal";
import Navbar from "../../navbar/Navbar";
import FilterManager from "../../filter-container/FilterContainer";

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [cartProducts, setCartProducts] = useState<
    { product: Product; amount: number }[]
  >([]);
  const [selectedProduct, setSelectedProduct] = useState<Product>();

  const addProductToCart = (id: string) => {
    const productToAdd = [...products].find((p) => p._id === id);

    if (productToAdd !== undefined) {
      const productInCart = cartProducts.find((p) => p.product._id === id);

      if (productInCart !== undefined) {
        const index = cartProducts.indexOf(productInCart);
        const updatedCart = [...cartProducts];
        updatedCart[index].amount += 1;
        setCartProducts(updatedCart);
      } else {
        setCartProducts([
          ...cartProducts,
          { product: productToAdd, amount: 1 },
        ]);
      }
    }
  };

  const openProductModal = (id: string) => {
    const productToAdd = [...products].find((p) => p._id === id);
    if (productToAdd !== undefined) {
      setSelectedProduct(productToAdd);
    }
  };

  return (
    <div>
      <div className="shop">
        <Navbar
          paths={[{ path: "/coffee-shop", text: "home" }]}
          cart={
            <Cart
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            ></Cart>
          }
        ></Navbar>
        <div className="shop-content">
          <div className="shop-title">Coffee Makers</div>
          <div className="products-section">
            {/*<FilterManager
              products={products}
              filteredProducts={filteredProducts}
              setFilteredProducts={setFilteredProducts}
        ></FilterManager>*/}
            <ProductList
              setProducts={setProducts}
              products={products}
              onAddToCart={addProductToCart}
              openProductModal={openProductModal}
            ></ProductList>
          </div>
        </div>
      </div>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onAddToCart={addProductToCart}
          setSelectedProduct={setSelectedProduct}
        ></ProductModal>
      )}
    </div>
  );
};

export default Shop;
