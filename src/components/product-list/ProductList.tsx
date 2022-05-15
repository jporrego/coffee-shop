import React from "react";
import "./ProductList.css";
import Product from "../product/Product";

interface ProductInterface {
  id: number;
  name: string;
  price: number;
  description: string;
  img?: string;
}

interface ProductListProps {
  products: ProductInterface[];
}
const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          img={product.img}
        ></Product>
      ))}
    </div>
  );
};

export default ProductList;
