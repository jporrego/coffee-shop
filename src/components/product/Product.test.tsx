import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Product from "./Product";
import { Product as ProductInterface } from "../../types";

// setup props
const product: ProductInterface = {
  id: 0,
  name: "Product",
  price: 10,
  img: "breville.png",
  description: "Product description",
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
    expect(screen.getByText("Product")).toBeInTheDocument();
    expect(screen.getByText(/10/)).toBeInTheDocument();
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
