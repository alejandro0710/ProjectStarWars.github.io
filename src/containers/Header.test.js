import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { describe, it, expect } from "@jest/globals";
import Header from "./Header";

describe("Header", () => {
  it("renders the correct text", () => {
    render(<Header />);
    expect(screen.getByText("Web test")).toBeInTheDocument();
    expect(screen.getByText("Play with SWAPI")).toBeInTheDocument();
  });
});
