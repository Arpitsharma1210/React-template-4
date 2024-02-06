import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Selectfield from './index';

describe('Selectfield component', () => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

//   it('renders with label and options', () => {
//     render(
//       <Selectfield
//         label="Select an option"
//         options={options}
//         value="option1"
//         formatfor="form"
//       />
//     );

//     const selectLabel = screen.getByText('Select an option');
//     expect(selectLabel).toBeInTheDocument();

//     options.forEach((option) => {
//       const optionElement = screen.getByText(option.label);
//       expect(optionElement).toBeInTheDocument();
//     });
//   });

//   it('calls onChange when an option is selected', () => {
//     const onChangeMock = jest.fn();
//     render(
//       <Selectfield
//         label="Select an option"
//         options={options}
//         value="option1"
//         onChange={onChangeMock}
//         formatfor="form"
//       />
//     );

//     const selectElement = screen.getByRole('combobox');
//     fireEvent.change(selectElement, { target: { value: 'option2' } });

//     expect(onChangeMock).toHaveBeenCalledWith('option2');
//   });

  it('displays error message if error prop is provided', () => {
    render(
      <Selectfield
        label="Select an option"
        options={options}
        value="option1"
        error="This is an error"
        formatfor="form"
      />
    );

    const errorMessage = screen.getByText('This is an error');
    expect(errorMessage).toBeInTheDocument();
  });

  it('calls onChange with the new value on selection change', () => {
    // Mock the onChange function
    const onChangeMock = jest.fn();

    // Render the Selectfield component with mocked onChange function
    render(
      <Selectfield
        label="Select an option"
        options={options}
        value="option1"
        onChange={onChangeMock}
        formatfor="form"
      />
    );

    // Get the select input element
    const selectInput = screen.getByRole('combobox');

    // Open the dropdown
    fireEvent.mouseDown(selectInput);

    // Get the option element for 'Option 2'
    const option2 = screen.getByText('Option 2');

    // Click on the 'Option 2' element to select it
    fireEvent.click(option2);

    // Assert that the onChange function is called with the new value
    expect(onChangeMock).toHaveBeenCalledWith('option2');
  });

  it('renders with an empty string value', () => {
    // Render the Selectfield component with an empty string value
    render(
      <Selectfield
        label="Select an option"
        options={options}
        value=""
        formatfor="form"
      />
    );

    // Assert that the select input has no selected option by default
    const selectInput = screen.getByRole('combobox') as HTMLSelectElement;
    expect(selectInput.value === undefined || selectInput.value === '').toBeTruthy();
  });

});
