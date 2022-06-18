import React, { useState, useEffect } from "react";
import "./ProductList.css";
import { Product as ProductInterface } from "../../types";
import Product from "../product/Product";
import Spinner from "../../assets/spinner.svg";

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
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      if (process.env.REACT_APP_API_URL !== undefined) {
        setLoading(true);
        const response = await fetch(process.env.REACT_APP_API_URL);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
        setErrorMsg("");
      }
    } catch (error) {
      console.log(error);
      setErrorMsg("Failed to connect to the server... trying again...");
      setLoading(false);
    }
    /*
    let tryToFetch = true;
    setTimeout(() => {
      tryToFetch = false;
    }, 10000);
    while (tryToFetch) {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:4000/");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
        setErrorMsg("");
        break;
      } catch (error) {
        console.log(error);
        setErrorMsg("Failed to connect to the server... trying again...");
        setLoading(false);
      }
    }*/
  };

  return (
    <div className="product-list">
      {process.env.NODE_ENV}
      {loading && (
        <div className="spinner">
          <img src={Spinner} alt="React Logo" />
        </div>
      )}
      {errorMsg}
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
