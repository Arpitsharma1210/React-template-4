import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import MaterialAutocompleteInput from './index';

describe('MaterialAutocompleteInput component', () => {
  it('renders without crashing', () => {
    render(<MaterialAutocompleteInput />);
  });

  it("renders label and input field", () => {
    const { getByText, getByRole } = render(<MaterialAutocompleteInput label="Test Label" />);
  
    expect(getByText("Test Label")).toBeInTheDocument();
    expect(getByRole("combobox")).toBeInTheDocument();
  });

  it('does not display error message when disableErrorMode is true', () => {
    render(<MaterialAutocompleteInput options={[]} error="Test error" $disableErrorMode />);
    expect(screen.queryByTestId('Test error')).toBeNull();
    expect(screen.queryByText('Test error')).toBeNull();
  });
  

});
