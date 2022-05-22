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
  const [currentSelection, setCurrentSelection] = useState<string>("all");

  useEffect(() => {
    generateOptions();
  }, [products, filteredProducts]);

  const setInitialProducts = () => {
    setFilteredProducts(products);
  };

  const onChangeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filterName = e.target.name;
    const filterValue = e.target.value;

    for (const f of filters) {
      if (filterName in f) {
        const newFilters = [...filters];
        // @ts-ignore
        delete newFilters[newFilters.indexOf(f)][filterName];
        setFilters(newFilters);
      }
    }
    const noEmptyObjects = [...filters].filter(
      (f) => Object.keys(f).length !== 0
    );

    if (filterValue !== "all") {
      setFilters([...noEmptyObjects, { [filterName]: filterValue }]);
    } else {
      setFilters([...noEmptyObjects]);
    }

    setCurrentSelection(filterValue);
  };

  const generateOptions = () => {
    const optionArray: string[] = ["all"];

    if (filter === "category") {
      for (const product of products) {
        if (filter in product) {
          // @ts-ignore
          if (!optionArray.includes(product[filter])) {
            // @ts-ignore
            optionArray.push(product[filter]);
          }
        }
      }
    } else {
      // REWORK THIS TO USE THE FILTERED PRODUCTS AND IMPROVE BEHAVIOR //
      // Get category if it exists
      let category = "";

      if (filters.length > 0) {
        for (const f of filters) {
          if (Object.keys(filters[0])[0] === "category") {
            // @ts-ignore
            category = f[Object.keys(filters[0])[0]];
          }
        }
      }
      console.log(category);

      for (const product of products) {
        if (filter in product && category === product["category"]) {
          if (category !== "") {
          }
          // @ts-ignore
          if (!optionArray.includes(product[filter])) {
            // @ts-ignore
            optionArray.push(product[filter]);
          }
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
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
