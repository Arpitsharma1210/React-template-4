import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Dropdown from './index';
import userEvent from '@testing-library/user-event';

describe('Dropdown Component', () => {
  it('renders with default value and options', () => {
    render(<Dropdown type="status" />);
    expect(screen.getByText('open')).toBeInTheDocument();
  });

  it('renders with specified type', () => {
    render(<Dropdown type="priority" />);
    expect(screen.getByText('low')).toBeInTheDocument();
  });


  it('executes onChange callback when an option is selected', async () => {
    const onChangeMock = jest.fn();
    render(<Dropdown type="source" onChange={onChangeMock} />);
    
    const selectElement = screen.getByRole('combobox');
    fireEvent.mouseDown(selectElement);
    const optionElement = await screen.findByText('referral');
    fireEvent.click(optionElement);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });
  

  it('displays the selected value', async () => {
    render(<Dropdown type="confirm" />);

    fireEvent.mouseDown(screen.getByRole('combobox'));
    const menuItems = await screen.findAllByText('yes');
    fireEvent.click(menuItems[0]);
    expect(menuItems[0]).toBeInTheDocument();
  });

});
