import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Loader from "./index";
import { useSelector } from "react-redux";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

describe("Loader component", () => {
  beforeEach(() => {
    (useSelector as jest.Mock).mockClear();
  });

  it("renders loader when visibility is true", () => {
    (useSelector as jest.Mock).mockReturnValue({ visibility: true });

    render(<Loader />);

    expect(screen.getByTestId("loader-container")).toBeInTheDocument();
  });

  it("does not render loader when visibility is false", () => {
    (useSelector as jest.Mock).mockReturnValue({ visibility: false });

    render(<Loader />);

    expect(screen.queryByTestId("loader-container")).not.toBeInTheDocument();
  });
});
