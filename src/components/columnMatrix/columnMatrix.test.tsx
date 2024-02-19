import React from 'react';
import { render, screen } from '@testing-library/react';
import ColumnMatrix from './index';

describe('ColumnMatrix Component', () => {
  it('renders column matrix with provided data', () => {
    const data = {
      Name: 'John Doe',
      Age:  30,
      Gender: 'Male',
      City: 'New York',
      Country: 'USA',
    };
    render(<ColumnMatrix data={data} />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
    expect(screen.getByText('Gender')).toBeInTheDocument();
    expect(screen.getByText('Male')).toBeInTheDocument();
    expect(screen.getByText('City')).toBeInTheDocument();
    expect(screen.getByText('New York')).toBeInTheDocument();
    expect(screen.getByText('Country')).toBeInTheDocument();
    expect(screen.getByText('USA')).toBeInTheDocument();
  });

  it('renders column matrix with specified number of rows', () => {
    const data = {
      Field1: 'Value1',
      Field2: 'Value2',
      Field3: 'Value3',
      Field4: 'Value4',
      Field5: 'Value5',
    };
    render(<ColumnMatrix data={data} rows={2} />);
    const fields = screen.getAllByText(/Value[1-5]/);
    expect(fields).toHaveLength(5);
  });

  it('matches snapshot', () => {
    const data = {
      Name: 'John Doe',
      Age:  30,
      Gender: 'Male',
      City: 'New York',
      Country: 'USA',
    };
    const { asFragment } = render(<ColumnMatrix data={data} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
