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
    /*
    if (process.env.REACT_APP_API_URL !== undefined) {
      try {
        setLoading(true);
        setErrorMsg(
          "Starting Heroku server. This can take around 10 seconds..."
        );
        const response = await fetch(process.env.REACT_APP_API_URL);
        const data = await response.json();
        setLoading(false);
        setErrorMsg("");
        setProducts(data);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setErrorMsg("Failed to connect to the server.");
      }
    } else {
      setErrorMsg("Failed to connect to the server.");
    }*/
    let tryToFetch = true;
    setTimeout(() => {
      tryToFetch = false;
    }, 20000);
    while (tryToFetch) {
      if (process.env.REACT_APP_API_URL !== undefined) {
        try {
          setLoading(true);
          setErrorMsg(
            "Starting Heroku server. This can take around 10 seconds..."
          );
          const response = await fetch(process.env.REACT_APP_API_URL);
          const data = await response.json();
          setProducts(data);

          setLoading(false);
          setErrorMsg("");
          break;
        } catch (error) {
          console.log(error);
          setLoading(false);
          if (tryToFetch) {
            setErrorMsg(
              "Starting Heroku server. This can take around 10 seconds..."
            );
          } else {
            setErrorMsg("Failed to connect to the server.");
          }
        }
      } else {
        setErrorMsg("Failed to connect to the server.");
        break;
      }
    }
  };

  return (
    <div className="product-list">
      {loading && (
        <div className="spinner">
          <img src={Spinner} alt="React Logo" />
        </div>
      )}
      <div className="error-msg">{errorMsg}</div>
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
