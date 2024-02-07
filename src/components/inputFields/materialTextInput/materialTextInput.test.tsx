import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import MaterialTextInput from '.';

describe('MaterialTextInput', () => {
    it('calls onChange with the new value on input change', () => {
        const onChangeMock = jest.fn();
        const newValue = 'New input value';
    
        const { getByRole } = render(
          <MaterialTextInput
            label="Input"
            value=""
            onChange={onChangeMock}
            formatfor="form"
          />
        );
    
        const inputElement = getByRole('textbox');
        fireEvent.change(inputElement, { target: { value: newValue } });
    
        expect(onChangeMock).toHaveBeenCalledWith(newValue);
      });

      it('toggles showPassword state when eye icon is clicked', () => {
        const { getByTestId } = render(
          <MaterialTextInput
            label="Password"
            value=""
            formatfor="password"
          />
        );
    
        const eyeIcon = getByTestId('eye-icon');
    
        expect(eyeIcon).toBeInTheDocument();
        expect(eyeIcon).toHaveClass('MuiSvgIcon-root');
        fireEvent.click(eyeIcon);
        expect(eyeIcon).toHaveClass('MuiSvgIcon-root');
        fireEvent.click(eyeIcon);
        expect(eyeIcon).toHaveClass('MuiSvgIcon-root');
      });
});