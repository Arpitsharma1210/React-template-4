import { fireEvent, render, screen } from "@testing-library/react";
import { TextInput } from "../../components";
import React from "react";

// test ids
const inputContainer = "inputContainer";
const readOnlyInputField = "readOnlyInputField";
const inputField = "inputField";

describe("Text Input Component", () => {
  it("renders without crashing", () => {
    render(<TextInput />);
    expect(screen.getByTestId(inputContainer)).toBeInTheDocument();
  });

  it("renders label through props", () => {
    render(<TextInput label="Email Address" />);
    expect(screen.getByText("Email Address")).toBeInTheDocument();
  });

  it("renders error message through props", () => {
    render(<TextInput error="An error occurred" />);
    expect(screen.getByText("An error occurred")).toBeInTheDocument();
  });

  it("runs onChange function passed through props", () => {
    const mockFunction = jest.fn();
    render(<TextInput onChange={mockFunction} />);
    fireEvent.input(screen.getByTestId(inputField), {
      target: { value: "sometext" },
    });
    expect(mockFunction).toHaveBeenCalled();
  });

  it("disables showing error through disableErrorMode prop", () => {
    render(<TextInput error="some error" disableErrorMode />);
    expect(screen.queryByText("some error")).toBeNull();
  });

  it("calls readOnlyCtaClick when it is readonly", () => {
    const mockFunction = jest.fn();
    render(<TextInput readOnly onReadOnlyCtaClick={mockFunction} />);
    fireEvent.click(screen.getByTestId(readOnlyInputField));
    expect(mockFunction).toHaveBeenCalled();
  });
});