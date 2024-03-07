import React from 'react';
import { render, screen } from '@testing-library/react';
import DataItem from './';

describe('DataItem Component', () => {
  it('renders data item with provided data', () => {
    render(<DataItem type="activejobs" data="100" />);
    expect(screen.getByAltText('dataitem icon')).toBeInTheDocument();
    expect(screen.getByText('Active Jobs')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
  });

  it('renders data item with stattype and statdata', () => {
    render(<DataItem type="applicants" data="200" stattype="increase" statdata="5" />);
    expect(screen.getByAltText('dataitem icon')).toBeInTheDocument();
    expect(screen.getByText('Applicants')).toBeInTheDocument();
    expect(screen.getByText('200')).toBeInTheDocument();
    expect(screen.getByAltText('')).toBeInTheDocument(); // Assuming the alt text is empty for the stat icon
    expect(screen.getByText('5%')).toBeInTheDocument();
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<DataItem type="activejobs" data="100" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
