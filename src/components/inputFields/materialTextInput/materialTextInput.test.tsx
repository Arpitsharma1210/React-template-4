import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import MaterialTextInput from './index';

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
});
