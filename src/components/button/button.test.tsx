import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import React from "react";
import MuiButton from "./index";
import userEvent from "@testing-library/user-event";


describe("Button component", () => {

it('renders with default properties', () => {
    render(<MuiButton>Test Button</MuiButton>);
  
    const button = screen.getByTestId('custom-button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Test Button');
    
  });
  it('renders with provided properties', () => {
    render(<MuiButton variant="outlined" bold type="submit" disabled>Submit</MuiButton>);
  
    const button = screen.getByTestId('custom-button');
  });
  
it('is disabled when disabled prop is true', () => {
    render(<MuiButton disabled>Disabled Button</MuiButton>);
  
    const button = screen.getByTestId('custom-button');
    expect(button).toBeDisabled();
  });
  
  it('calls onClick handler with the correct event argument', () => {
    const mockOnClick = jest.fn();

    render(<MuiButton onClick={mockOnClick}>Click me</MuiButton>);
  
    const button = screen.getByTestId('custom-button');
  
    fireEvent.click(button);
  
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
  
  it("handles click event when onClick is not provided", () => {
    render(<MuiButton>Test Button</MuiButton>);

    const button = screen.getByTestId("custom-button");

    fireEvent.click(button);
    expect(button).toBeInTheDocument();
  });

});