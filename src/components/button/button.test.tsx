import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import MuiButton from "./index";
import userEvent from "@testing-library/user-event";

describe("Button component", () => {
  it('renders with default properties', () => {
    render(<MuiButton>Test Button</MuiButton>);
   
    const button = screen.getByRole('button', { name: /Test Button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Test Button');
  });

  it('renders with provided properties', () => {
    render(<MuiButton variant="outlined" bold type="submit" disabled>Submit</MuiButton>);
   
    const button = screen.getByRole('button', { name: /Submit/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'submit');
    expect(button).toHaveClass('MuiButton-outlined');
    expect(button).toHaveClass('MuiButtonBase-root');
    expect(button).toBeDisabled();
  });

  it('is disabled when disabled prop is true', () => {
    render(<MuiButton disabled>Disabled Button</MuiButton>);
   
    const button = screen.getByRole('button', { name: /Disabled Button/i });
    expect(button).toBeDisabled();
  });

  it('calls onClick handler with the correct event argument', () => {
    const mockOnClick = jest.fn();

    render(<MuiButton onClick={mockOnClick}>Click me</MuiButton>);
   
    const button = screen.getByRole('button', { name: /Click me/i });
   
    fireEvent.click(button);
   
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});