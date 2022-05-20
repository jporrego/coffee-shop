import React, { useState, useEffect } from "react";
import "./Filter.css";
import { Product } from "../../types";
import { FaAngleDown } from "react-icons/fa";

interface FilterProps {
  filter: string;
  products: Product[];
  filteredProducts: Product[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}
const Filter: React.FC<FilterProps> = ({
  filter,
  products,
  filteredProducts,
  setFilteredProducts,
}) => {
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    setInitialProducts();
    generateOptions();
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

  const generateOptions = () => {
    const optionArray: string[] = ["all"];
    for (const product of products) {
      if (filter in product) {
        // @ts-ignore
        if (!optionArray.includes(product[filter])) {
          // @ts-ignore
          optionArray.push(product[filter]);
        }
      }
    }
    setOptions(optionArray);
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
