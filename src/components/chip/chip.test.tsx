import React from 'react';
import { render, screen } from '@testing-library/react';
import Chip from './chip';
import ChipGroup from './chipGroup';

describe('Chip Component', () => {
  it('renders chip with text correctly', () => {
    render(<Chip text="Test Chip" />);
    const chipElement = screen.getByText('Test Chip');
    expect(chipElement).toBeInTheDocument();
  });

  it('renders chip with icon when iconCtaClick prop is provided', () => {
    render(<Chip text="Test Chip" iconCtaClick={() => {}} />);
    const chipIcon = screen.getByTestId('close-icon');
    expect(chipIcon).toBeInTheDocument();
  });
});

describe('ChipGroup Component', () => {
    it("renders all chips when displayCount prop is not provided", async () => {
        const data = [{ header: 'Group 1', data: [{ key: '1', text: 'Chip 1', bgColor: 'red', textColor: 'white' }] }];
        render(<ChipGroup data={data} />);
        
        const chipContainer = screen.getByTestId('chip-container'); 
        expect(chipContainer).toBeInTheDocument();
      });
  
      it('renders only specified number of chips when displayCount prop is provided', () => {
        const data = [{ header: 'Group 1', data: [{ key: '1', text: 'Chip 1', bgColor: 'red', textColor: 'white' }] }];
        render(<ChipGroup data={data} displayCount={1} />);
        const chipElement = screen.getByText('Chip 1'); 
        expect(chipElement).toBeInTheDocument();
    });
    
    it('renders chip popover when more chips are available', () => {
        const data = [
          { header: 'Group 1', data: [{ key: '1', text: 'Chip 1', bgColor: 'red', textColor: 'white' }] },
          { header: 'Group 2', data: [{ key: '2', text: 'Chip 2', bgColor: 'blue', textColor: 'white' }] }
        ];
        render(<ChipGroup data={data} />);
        const popoverTrigger = screen.getByText(/(\+)(\d+)/); 
        expect(popoverTrigger).toBeInTheDocument();
    });    

  });