import React, { useState } from "react";
import { Product } from "../../types";
import Filter from "../filter/Filter";
import "./FilterContainer.css";

interface FilterContainerProps {
  products: Product[];
  filteredProducts: Product[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const FilterContainer: React.FC<FilterContainerProps> = ({
  products,
  filteredProducts,
  setFilteredProducts,
}) => {
  const [filters, setFilters] = useState<object[]>([]);

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

  return (
    <div className="filter-container">
      <Filter
        filter={"category"}
        products={products}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        filters={filters}
        setFilters={setFilters}
      ></Filter>
      <Filter
        filter={"brand"}
        products={products}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        filters={filters}
        setFilters={setFilters}
      ></Filter>
    </div>
  );
};

export default FilterContainer;
