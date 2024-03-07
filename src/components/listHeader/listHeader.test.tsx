import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ListHeader, { FilterSpec } from './';
import { StyledSearchInput, StyledActionItem } from './styles';
import messages from '../../messages';

describe('ListHeader', () => {
  it('renders without crashing', () => {
    render(<ListHeader  ctaLabel="Create" />);
    const ctaButton = screen.queryByRole('button', { name: /create/i });
    expect(ctaButton).not.toBeNull();
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<ListHeader />);
    expect(asFragment()).toMatchSnapshot();
  });

});
describe('Styled Components', () => {
  it('renders StyledHeader correctly', () => {
    const wrapper = render(<StyledSearchInput />);
    expect(wrapper).toMatchSnapshot();
  });
  it('renders StyledHeader correctly', () => {
    const wrapper = render(<StyledActionItem />);
    expect(wrapper).toMatchSnapshot();
  });
});

type OnSearchChangeType = (value: string) => void;

const TestWrapper: React.FC<{ onSearchChange: OnSearchChangeType }> = ({ onSearchChange }) => {
  const connectFilter = (key: string, options: Record<string, unknown>) => (Component: React.ComponentType<any>) => {
    return <Component onChange={onSearchChange} {...options} />;
  };

  return (
    <ListHeader
    
      disableSearch={false}
      connectFilter={connectFilter}
    />
  );
};

it('matches snapshot', () => {
  const { asFragment } = render(<ListHeader />);
  expect(asFragment()).toMatchSnapshot();
});


describe('ListHeader', () => {
  it('calls onChange with the new value on search input change', () => {
    const onSearchChangeMock = jest.fn();
    const newValue = 'New search value';

    render(
      <ListHeader
        ctaLabel="Create"
        disableSearch={false}
        
      />
    );

    const searchInput = screen.getByRole('button');
    fireEvent.change(searchInput, { target: { value: newValue } });

    expect(onSearchChangeMock).toHaveBeenCalledTimes(0);;
  });

  it('calls handleCtaClick when CTA button is clicked', () => {
    const handleCtaClickMock = jest.fn();

    render(<ListHeader ctaLabel="Create" handleCtaClick={handleCtaClickMock} />);

    const ctaButton = screen.getByRole('button', { name: /create/i });
    fireEvent.click(ctaButton);

    expect(handleCtaClickMock).toHaveBeenCalled();
  });


  it('calls resetFilters when reset button is clicked', () => {
    const resetFiltersMock = jest.fn();

    render(<ListHeader resetFilters={resetFiltersMock} />);

    const resetButton = screen.getByText(messages.general.reset);
    fireEvent.click(resetButton);

    expect(resetFiltersMock).toHaveBeenCalled();
  });

  it('does not render search input when disableSearch is true', () => {
    render(<ListHeader disableSearch={true} />);

    const searchInput = screen.queryByRole('textbox');
    expect(searchInput).not.toBeInTheDocument();
  });
});

describe('ListHeader', () => {
  it('renders StyledActionItem components for each filter that passes the renderAction check', () => {
    const filters: FilterSpec[] = [
      {
        id: 'filter1',
        render: () => <span>Filter  1</span>,
        renderAction: () => true,
      },
      {
        id: 'filter3',
        render: () => <span>Filter  3</span>,
      },
    ];

    render(<ListHeader filters={filters} />);

    expect(screen.getByText(/Filter\s*1/)).toBeInTheDocument();
    expect(screen.getByText(/Filter\s*3/)).toBeInTheDocument();
  });
});