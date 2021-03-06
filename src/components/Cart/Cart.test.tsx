/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cart from "./Cart";
import { Product as ProductInterface } from "../../types";

// set Cart props
type CartProps = {
  cartPoducts: { product: ProductInterface; amount: number }[];
  setCartProducts: typeof jest.fn;
};

const products = [
  {
    product: {
      _id: 0,
      brand: "Ovalware",
      name: "Product 1",
      price: 10,
      offer: 0,
      img: "breville.png",
      description: "Product description",
      category: "cold brew",
    },
    amount: 1,
  },
  {
    product: {
      _id: 1,
      brand: "Kups",
      name: "Product 1",
      price: 10,
      offer: 0,
      description:
        "Does not trap essential oils of your coffee in a paper filter, and makes a beautiful slow-brew. Includes a permanent stainless seel mesh filter.",
      img: "nesspresso-kups.png",
      category: "coffee machines",
    },
    amount: 2,
  },
];

const setCartProducts = jest.fn();

/*
describe("cart", () => {
  it("renders the cart icon", () => {
    const { container } = render(
      <Cart cartProducts={products} setCartProducts={setCartProducts}></Cart>
    );
    expect(container).toMatchSnapshot();
  });

  it("renders the correct amount of products", () => {
    const { container } = render(
      <Cart cartProducts={products} setCartProducts={setCartProducts}></Cart>
    );

    expect(container.textContent).toBe("3");
  });

  it("opens the cart modal", () => {
    const { container } = render(
      <Cart cartProducts={products} setCartProducts={setCartProducts}></Cart>
    );
    userEvent.click(screen.getByText("3"));
    expect(container).toMatchSnapshot();
  });

  it("shows empty message in cart modal", () => {
    render(<Cart cartProducts={[]} setCartProducts={setCartProducts}></Cart>);
    userEvent.click(screen.getByText("0"));
    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
  });

  it("renders all products in cart modal", () => {
    render(
      <Cart cartProducts={products} setCartProducts={setCartProducts}></Cart>
    );
    userEvent.click(screen.getByText("3"));
    expect(screen.queryAllByText(/product/i, { exact: false }).length).toBe(2);
  });

  it("shows the correct total price", () => {
    render(
      <Cart cartProducts={products} setCartProducts={setCartProducts}></Cart>
    );
    userEvent.click(screen.getByText("3"));
    expect(screen.getByText("30", { exact: false })).toBeInTheDocument();
  });
});
*/
