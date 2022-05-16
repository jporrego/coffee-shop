import React from "react";
import { queryAllByTestId, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductList from "./ProductList";
import { Product as ProductInterface } from "../../types";

interface MockProductProps {
  product: ProductInterface;
  onAddToCart: typeof jest.fn;
  openProductModal: typeof jest.fn;
}

jest.mock(
  "../product/Product",
  () =>
    ({ product, onAddToCart, openProductModal }: MockProductProps) =>
      <div data-testid="product">{product.name}</div>
);

// set ProductList props
const products: ProductInterface[] = [
  {
    id: 0,
    name: "Product",
    price: 10,
    img: "breville.png",
    description: "Product description",
  },
  {
    id: 1,
    name: "Product 2",
    price: 20,
    img: "nesspresso-kups.png",
    description: "Product 2 description",
  },
];

const setProducts = jest.fn();
const onAddToCart = jest.fn();
const openProductModal = jest.fn();

describe("product list", () => {
  it("renders the product list", () => {
    const { container } = render(
      <ProductList
        products={products}
        setProducts={setProducts}
        onAddToCart={onAddToCart}
        openProductModal={openProductModal}
      ></ProductList>
    );

    expect(container).toMatchSnapshot();
  });

  it("renders two products", () => {
    render(
      <ProductList
        products={products}
        setProducts={setProducts}
        onAddToCart={onAddToCart}
        openProductModal={openProductModal}
      ></ProductList>
    );

    expect(screen.queryAllByTestId("product").length).toBe(2);
  });
});
