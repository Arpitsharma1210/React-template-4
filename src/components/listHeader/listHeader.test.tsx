import { render, fireEvent, screen } from "@testing-library/react";
import { ListHeader } from "../../components";
import React from "react";

const mockFilters = [
  {
    id: "filter1",
    render: () => <div>Filter 1</div>,
  },
];

describe("ListHeader Component", () => {
  it("renders without crashing", () => {
    render(<ListHeader />);
  });

  it("renders ctaLabel passed through props", () => {
    render(<ListHeader ctaLabel="some label" />);
    expect(screen.getByText("some label")).toBeInTheDocument();
  });

  it("renders with filters", () => {
    render(<ListHeader filters={mockFilters} />);
    mockFilters.forEach((filter) => {
      expect(screen.getByTestId(`Filter_${filter.id}`)).toBeInTheDocument();
    });
  });

  it("calls handleCtaClick on CTA button click", () => {
    const handleCtaClickMock = jest.fn();
    render(
      <ListHeader ctaLabel="Add Item" handleCtaClick={handleCtaClickMock} />
    );

    fireEvent.click(screen.getByTestId("CtaButton"));

    expect(handleCtaClickMock).toHaveBeenCalled();
  });

  it("calls resetFilters on Reset Button click", () => {
    const resetFiltersMock = jest.fn();
    render(<ListHeader resetFilters={resetFiltersMock} />);

    fireEvent.click(screen.getByTestId("ResetButton"));

    expect(resetFiltersMock).toHaveBeenCalled();
  });

  it("disables search on disableSearch prop", () => {
    render(<ListHeader disableSearch />);
    expect(screen.queryByTestId("StyledActionItemSearch")).toBeNull();
  });
});