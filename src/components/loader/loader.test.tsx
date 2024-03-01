import React from "react";
import { render, screen } from "@testing-library/react";
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

    expect(screen.getByAltText("noah logo loader")).toBeInTheDocument();
  });

  it("does not render loader when visibility is false", () => {
    (useSelector as jest.Mock).mockReturnValue({ visibility: false });

    render(<Loader />);

    expect(screen.queryByAltText("noah logo loader")).not.toBeInTheDocument();
  });

  it("matches snapshot when loader is visible", () => {
    (useSelector as jest.Mock).mockReturnValue({ visibility: true });

    const { asFragment } = render(<Loader />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("matches snapshot when loader is not visible", () => {
    (useSelector as jest.Mock).mockReturnValue({ visibility: false });

    const { asFragment } = render(<Loader />);
    expect(asFragment()).toMatchSnapshot();
  });
});
