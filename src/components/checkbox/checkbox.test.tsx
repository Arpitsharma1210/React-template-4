import { fireEvent, render, screen } from "@testing-library/react";
import MuiCheckBox from "./index";
import React from "react";

describe("MuiCheckBox Component", () => {
  it("renders with default properties", () => {
    render(<MuiCheckBox />);

    const checkBox = screen.getByRole("checkbox");
    expect(checkBox).toBeInTheDocument();
    expect(checkBox).not.toBeChecked();
  });

  it("renders with provided label", () => {
    const labelText = "Check Me";
    render(<MuiCheckBox label={labelText} />);

    expect(screen.getByText(labelText)).toBeInTheDocument();
  });

  it("changes value when clicked", () => {
    let isChecked = false;
    const handleChange = (value: boolean) => {
      isChecked = value;
    };

    render(<MuiCheckBox label="Check Me" value={isChecked} onChange={handleChange} />);

    const checkBox = screen.getByRole("checkbox");
    fireEvent.click(checkBox);

    expect(isChecked).toBe(true);
  });

  it("renders error message when error prop is provided", () => {
    const errorMessage = "This field is required";
    render(<MuiCheckBox label="Check Me" error={errorMessage} />);

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  it("does not render error message when disableErrorMode prop is true", () => {
    const errorMessage = "This field is required";
    render(<MuiCheckBox label="Check Me" error={errorMessage} disableErrorMode />);

    expect(screen.queryByText(errorMessage)).not.toBeInTheDocument();
  });


  it("handles change event when onChange is not provided", () => {
    const label = "Test Label";
    render(<MuiCheckBox label={label} />);

    const checkboxInput = screen.getByRole("checkbox");

    fireEvent.click(checkboxInput);
    expect(checkboxInput).not.toBeChecked();
  });

});
