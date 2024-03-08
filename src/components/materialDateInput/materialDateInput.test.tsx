import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { MaterialDateInput } from "../../components";

describe('MaterialDateInput Component', () => {
  it('renders without crashing', () => {
    render(
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MaterialDateInput />
      </LocalizationProvider>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('renders label from props', () => {
    render(
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MaterialDateInput label="This is a Label" />
      </LocalizationProvider>
    );
    expect(screen.getByLabelText('This is a Label')).toBeInTheDocument();
  });

  // it('applies value from props', () => {
  //   render(
  //     <LocalizationProvider dateAdapter={AdapterMoment}>
  //     <MaterialDateInput value="12/12/2025" />
  //   </LocalizationProvider>
  //   );
  //   const inputElement = screen.getByRole('textbox');
  //   expect(inputElement).toHaveValue('12/12/2025'); 
  // });

  it('calls onChange function on user input from props', () => {
    const mockFunction = jest.fn();
    render(
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MaterialDateInput onChange={mockFunction} />
      </LocalizationProvider>
    );
    fireEvent.change(screen.getByRole('textbox'), { target: { value: '12/12/2025' } });
    expect(mockFunction).toHaveBeenCalled();
  });
});
