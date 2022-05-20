import React, { useEffect, useState } from "react";
import { Product } from "../../types";
import Filter from "../filter/Filter";
import "./FilterManager.css";

interface FilterManagerProps {
  products: Product[];
  filteredProducts: Product[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const FilterManager: React.FC<FilterManagerProps> = ({
  products,
  filteredProducts,
  setFilteredProducts,
}) => {
  const [filters, setFilters] = useState<object[]>([]);

  useEffect(() => {
    setInitialProducts();
  }, [products]);

  const setInitialProducts = () => {
    setFilteredProducts(products);
  };

  useEffect(() => {
    filterProducts();
  }, [filters]);

  const filterProducts = () => {
    let filteredArray: Product[] = [];

    for (const product of products) {
      let matches = true;
      for (const filter of filters) {
        if (
          // @ts-ignore
          product[Object.keys(filter)[0]] != filter[Object.keys(filter)[0]]
        ) {
          matches = false;
          break;
        }
      }
      if (matches) {
        filteredArray.push(product);
      }
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

export default FilterManager;
