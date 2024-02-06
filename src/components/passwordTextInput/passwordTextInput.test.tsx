import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PasswordTextInput from ".";


// test ids
const inputContainer = "inputContainer";
const textfield = "textfield";
const error = "error";

describe("Password Text Input Component", () => {
  it("renders without crashing", () => {
    render(<PasswordTextInput />);
    expect(screen.getByTestId(inputContainer)).toBeInTheDocument();
  });

  it("applies value sent through props", () => {
    const tempText = "sometestvalue";
    render(<PasswordTextInput value={tempText} />);
    expect(screen.getByTestId(textfield).querySelector("input")).toHaveValue(
      tempText
    );
  });

  it("runs onChange provided through props", () => {
    const tempFunction = jest.fn();
    render(<PasswordTextInput onChange={tempFunction} />);
    fireEvent.input(screen.getByTestId(textfield).querySelector("input"), {
      target: { value: "testingtext" },
    });
    expect(tempFunction).toHaveBeenCalled();
  });

//   it("displays error sent through props", () => {
//     render(<PasswordTextInput error="some error" />);
//     expect(
//       screen.getByTestId(textfield).querySelector("input")
//     ).toHaveAttribute("aria-invalid", "true");
//     expect(screen.getByTestId(error)).toBeInTheDocument();
//   });

  it("hides error when disableErrorMode is true", () => {
    render(<PasswordTextInput error="some error" disableErrorMode />);
    expect(
      screen.getByTestId(textfield).querySelector("input")
    ).toHaveAttribute("aria-invalid", "false");
    expect(screen.queryByTestId(error)).toBeNull();
  });

  it("shows and hides password", () => {
    render(<PasswordTextInput value="password" />);
    fireEvent.click(
      screen.getByTestId(textfield).querySelector(".MuiButtonBase-root")
    );
    expect(
      screen.getByTestId(textfield).querySelector("input")
    ).toHaveAttribute("type", "text");
    fireEvent.click(
      screen.getByTestId(textfield).querySelector(".MuiButtonBase-root")
    );
    expect(
      screen.getByTestId(textfield).querySelector("input")
    ).toHaveAttribute("type", "password");
  });
});