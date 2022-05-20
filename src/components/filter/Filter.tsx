import React, { useState, useEffect } from "react";
import "./Filter.css";
import { Product } from "../../types";
import { FaAngleDown } from "react-icons/fa";

interface FilterProps {
  filter: string;
  products: Product[];
  filteredProducts: Product[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  filters: object[];
  setFilters: React.Dispatch<React.SetStateAction<object[]>>;
}
const Filter: React.FC<FilterProps> = ({
  filter,
  products,
  filteredProducts,
  setFilteredProducts,
  filters,
  setFilters,
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
      const filteredArray = [...filteredProducts].filter((product) => {
        // @ts-ignore
        if (product[filter] === e.target.value) {
          return product;
        }
      });
      setFilteredProducts(filteredArray);
    }
  };

  const onChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filterName = e.target.name;
    const filterValue = e.target.value;
    setFilters([...filters, { [filterName]: filterValue }]);
    console.log(1);
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
        name={filter}
        id="coffee makers"
        onChange={(e) => {
          onChangeFilter(e);
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
