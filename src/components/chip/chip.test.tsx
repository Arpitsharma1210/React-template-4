import React from 'react';
import { render, screen } from '@testing-library/react';
import Chip from './chip';
import ChipGroup from './chipGroup';
import renderer from 'react-test-renderer';
import { StyledPopoverChipGroup, StyledPopoverSectionContainer, StyledPopoverSectionHeader } from './styles';

describe('Chip Component', () => {
  it('renders chip with text correctly', () => {
    render(<Chip text="Test Chip" />);
    const chipElement = screen.getByText('Test Chip');
    expect(chipElement).toBeInTheDocument();
  });
});

describe('ChipGroup Component', () => {
  it('renders only specified number of chips when displayCount prop is provided', () => {
    const data = [{ header: 'Group  1', data: [{ key: '1', text: 'Chip  1', bgColor: 'red', textColor: 'white' }] }];
    const tree = renderer
      .create(<ChipGroup data={data} displayCount={1} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
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

    it('renders StyledPopoverChipGroup correctly', () => {
      const tree = renderer
        .create(<StyledPopoverChipGroup>Chip Group</StyledPopoverChipGroup>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders StyledPopoverSectionHeader correctly', () => {
      const tree = renderer
        .create(<StyledPopoverSectionHeader>Section Header</StyledPopoverSectionHeader>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders StyledPopoverSectionContainer correctly', () => {
      const tree = renderer
        .create(<StyledPopoverSectionContainer>Section Content</StyledPopoverSectionContainer>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders chip popover when more chips are available', () => {
      const data = [
        { header: 'Group  1', data: [{ key: '1', text: 'Chip  1', bgColor: 'red', textColor: 'white' }] },
        { header: 'Group  2', data: [{ key: '2', text: 'Chip  2', bgColor: 'blue', textColor: 'white' }] }
      ];
      const tree = renderer
        .create(<ChipGroup data={data} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders chip with icon when iconCtaClick prop is provided', () => {
      const tree = renderer
        .create(<Chip text="Test Chip" iconCtaClick={() => {}} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });