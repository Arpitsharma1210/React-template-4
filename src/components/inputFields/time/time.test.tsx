import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'; 
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Timefield from './index';


describe('Timefield component', () => {
    it('renders label and time picker', () => {
        render(
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-US">
            <Timefield label="Time" value={''} onChange={undefined} formatfor={'form'} />
          </LocalizationProvider>
        );
      });
    
      it('renders label and time picker', () => {
        render(
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-US">
            <Timefield label="Time" value={''} onChange={jest.fn()} formatfor={'form'} />
          </LocalizationProvider>
        );
        expect(screen.getByText('Time')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
      });
      
      it('does not call onChange when onChange function does not exist', () => {
        render(
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-US">
        <Timefield value="" formatfor="form" onChange={undefined} />
        </LocalizationProvider>
        ); 
        fireEvent.change(screen.getByRole('textbox'), { target: { value: '12:00' } });
      });

});
