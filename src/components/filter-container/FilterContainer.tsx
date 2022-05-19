import React from "react";
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
  return (
    <div className="filter-container">
      <Filter
        options={["all", "coffee machines", "cold brew", "electric percolator"]}
        products={products}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      ></Filter>
    </div>
  );
};

export default FilterContainer;
