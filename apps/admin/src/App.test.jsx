import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("test button rendering", () => {
  it("should not be in document", () => {
    render(<App />);
    const buttonElement = screen.findByText("my test button");
    waitFor(() => expect(buttonElement).not.toBeInTheDocument());
  });
  it("should be in document", () => {
    render(<App />);
    const buttonElement = screen.findByText("Boop");
    waitFor(() => expect(buttonElement).toBeInTheDocument());
  });
});
