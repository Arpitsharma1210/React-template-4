import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MaterialPasswordInput from ".";


jest.mock("@mui/material", () => ({
  ...jest.requireActual("@mui/material"),
  TextField: jest.fn(({ onChange, value }) => (
    <input
      type="text"
      onChange={onChange}
      value={value}
      data-testid="mock-textfield"
    />
  )),
  IconButton: jest.fn(({ onClick, children }) => (
    <button onClick={onClick} role="button">
      {children}
    </button>
  )),
}));

describe("MaterialPasswordInput Component", () => {
  it("renders without crashing", () => {
    render(<MaterialPasswordInput />);
    expect(screen.getByTestId("mock-textfield")).toBeInTheDocument();
  });

  it("applies value sent through props", () => {
    const tempText = "sometestvalue";
    render(<MaterialPasswordInput value={tempText} />);
    expect(screen.getByTestId("mock-textfield")).toHaveValue(tempText);
  });

  it("runs onChange provided through props", () => {
    const tempFunction = jest.fn();
    render(<MaterialPasswordInput onChange={tempFunction} />);
    fireEvent.input(screen.getByTestId("mock-textfield"), {
      target: { value: "testingtext" },
    });
    expect(tempFunction).toHaveBeenCalledWith("testingtext");
  });


  it("displays error sent through props", () => {
    const errorText = "some error";
    render(<MaterialPasswordInput error={errorText} />);
    expect(screen.getByText(errorText)).toBeInTheDocument();
  });

  it("hides error when disableErrorMode is true", () => {
    const errorText = "some error";
    render(<MaterialPasswordInput error={errorText} disableErrorMode />);
    expect(screen.queryByText(errorText)).toBeNull();
  });

  it("matches snapshot when password is visible", () => {
    const { asFragment } = render(<MaterialPasswordInput value="password" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("matches snapshot when password is hidden", () => {
    const { asFragment } = render(<MaterialPasswordInput value="password" disableErrorMode />);
    expect(asFragment()).toMatchSnapshot();
  }); 
});
