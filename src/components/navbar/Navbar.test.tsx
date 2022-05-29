import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";

describe("navbar", () => {
  it("renders correctly", () => {
    // since screen does not have the container property, we'll destructure render to obtain container for this test
    const { container } = render(<Navbar />);
    expect(container).toMatchSnapshot();
  });
});
