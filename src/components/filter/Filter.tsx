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

    // First we handle the options for the Category filter, since it will control other filters.
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
      // For the rest of the filters, if there is a category selected, we only show the options that match the category.
      // This way the user can't select a filter combination that doesn't lead to any products.

      let category: string | undefined = undefined;

      if (filters.length > 0) {
        for (const f of filters) {
          if (Object.keys(f)[0] === "category") {
            // @ts-ignore
            category = f[Object.keys(filters[0])[0]];
          }
        }
      }

      for (const product of products) {
        if (filter in product) {
          if (category === "" || category === undefined) {
            // @ts-ignore
            if (!optionArray.includes(product[filter])) {
              // @ts-ignore
              optionArray.push(product[filter]);
            }
          } else if (category === product["category"]) {
            // @ts-ignore
            if (!optionArray.includes(product[filter])) {
              // @ts-ignore
              optionArray.push(product[filter]);
            }
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
