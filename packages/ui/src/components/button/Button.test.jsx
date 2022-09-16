import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from ".";

describe("Button", () => {
  it("should render without crashing", () => {
    render(<Button />);
  });
});
