import React, { useState, useEffect } from "react";
import "./Filter.css";
import { Product } from "../../types";
import { FaAngleDown } from "react-icons/fa";

interface FilterProps {
  options: string[];
  products: Product[];
  filteredProducts: Product[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}
const Filter: React.FC<FilterProps> = ({
  options,
  products,
  filteredProducts,
  setFilteredProducts,
}) => {
  useEffect(() => {
    setInitialProducts();
  }, [products]);

  const setInitialProducts = () => {
    setFilteredProducts(products);
  };

  const filterProducts = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "all") {
      setFilteredProducts(products);
    } else {
      const filteredProducts = [...products].filter(
        (product) => product.category === e.target.value
      );
      setFilteredProducts(filteredProducts);
    }
  };
  return (
    <div className="filter">
      <select
        name="type"
        id="coffee makers"
        onChange={(e) => {
          filterProducts(e);
        }}
      >
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
