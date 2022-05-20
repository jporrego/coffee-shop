import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    filterProducts2();
  }, [filters]);

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

  const filterProducts2 = () => {
    let filteredArray: Product[] = [];

    /*for (const filter of filters) {
      for (const product of products) {
        if (
          // @ts-ignore
          product[Object.keys(filter)[0]] === filter[Object.keys(filter)[0]]
        ) {
          filteredArray.push(product);
        }
      }
    }*/

    for (const product of products) {
      let matches = true;
      for (const filter of filters) {
        if (
          // @ts-ignore
          product[Object.keys(filter)[0]] !== filter[Object.keys(filter)[0]]
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

export default FilterContainer;
