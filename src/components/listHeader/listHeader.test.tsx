import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ListHeader, { FilterSpec } from './index';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import { SearchInputContainer } from './styles';



const mockFilters = [
  {
    id: "filter1",
    render: () => <div>Filter 1</div>,
  },
];
describe('ListHeader component', () => {
      

  it('calls handleCtaClick when Add Item button is clicked', () => {
    const handleCtaClick = jest.fn();
    render(<ListHeader ctaLabel="Add Item" handleCtaClick={handleCtaClick} />);

    fireEvent.click(screen.getByText('Add Item'));

    expect(handleCtaClick).toHaveBeenCalledTimes(1);
  });

  it('calls resetFilters when Reset button is clicked', () => {
    const resetFilters = jest.fn();
    render(<ListHeader resetFilters={resetFilters} />);

    fireEvent.click(screen.getByText('Reset'));

    expect(resetFilters).toHaveBeenCalledTimes(1);
  });

  it("disables search on disableSearch prop", () => {
    render(<ListHeader disableSearch />);
    expect(screen.queryByTestId("StyledActionItemSearch")).toBeNull();
  });
  
  it("calls resetFilters on Reset Button click", () => {
    const resetFiltersMock = jest.fn();
    render(<ListHeader resetFilters={resetFiltersMock} />);

    fireEvent.click(screen.getByTestId("ResetButton"));

    expect(resetFiltersMock).toHaveBeenCalled();
  });

  it("calls handleCtaClick on CTA button click", () => {
    const handleCtaClickMock = jest.fn();
    render(
      <ListHeader ctaLabel="Add Item" handleCtaClick={handleCtaClickMock} />
    );
    fireEvent.click(screen.getByTestId("CtaButton"));
    expect(handleCtaClickMock).toHaveBeenCalled();
  });


  it("renders with filters", () => {
    render(<ListHeader filters={mockFilters} />);
    mockFilters.forEach((filter) => {
      expect(screen.getByTestId(`Filter_${filter.id}`)).toBeInTheDocument();
    });
  });

  it("renders ctaLabel passed through props", () => {
    render(<ListHeader ctaLabel="some label" />);
    expect(screen.getByText("some label")).toBeInTheDocument();
  });


});
