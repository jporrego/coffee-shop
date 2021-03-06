import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Product from "./Product";
import { Product as ProductInterface } from "../../types";

// Setup props
const product: ProductInterface = {
  _id: "0",
  brand: { _id: "0", name: "Ovalware" },
  name: "Product",
  price: 10,
  stock: 5,
  img: "breville.png",
  description: "Product description",
  category: { _id: "0", name: "cold brew" },
};

const onAddToCart = jest.fn();
const openProductModal = jest.fn();

describe("product", () => {
  it("renders the product", () => {
    // since screen does not have the container property, we'll destructure render to obtain container for this test
    const { container } = render(
      <Product
        product={product}
        onAddToCart={onAddToCart}
        openProductModal={openProductModal}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders the correct product information", () => {
    render(
      <Product
        product={product}
        onAddToCart={onAddToCart}
        openProductModal={openProductModal}
      />
    );
    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(
      screen.getByText(product.price, { exact: false })
    ).toBeInTheDocument();
  });

  it("calls onAddToCart after button click", () => {
    render(
      <Product
        product={product}
        onAddToCart={onAddToCart}
        openProductModal={openProductModal}
      />
    );
    const button = screen.getByRole("button", { name: "+" });
    userEvent.click(button);
    expect(onAddToCart).toHaveBeenCalledTimes(1);
  });
});
