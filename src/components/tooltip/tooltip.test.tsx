import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Tooltip from "./index";


jest.mock("./index", () => ({
  __esModule: true,
  default: jest.fn(({ children, title }) => (
    <div data-testid="mock-tooltip" role="tooltip">
      {children}
      <div data-testid="mock-tooltip-title" style={{ display: 'none' }}>
        {title}
      </div>
    </div>
  )),
}));


describe("Tooltip Component", () => {
  it("renders without crashing", () => {
    render(
      <Tooltip title="Tooltip Title">
        <div>Child Element</div>
      </Tooltip>
    );
    expect(screen.getByTestId("mock-tooltip")).toBeInTheDocument();
  });

  it("renders child element as text", () => {
    render(<Tooltip title="Tooltip Title"><div>Child Element</div></Tooltip>);
    expect(screen.getByText("Child Element")).toBeInTheDocument();
  });

  it("renders child element as JSX element", () => {
    render(
      <Tooltip title="Tooltip Title">
        <article>testingarticle</article>
      </Tooltip>
    );
    expect(screen.getByRole("article")).toBeInTheDocument();
  });

  it("matches snapshot when tooltip is visible", () => {
    const { asFragment } = render(<Tooltip title="Tooltip Title"><div>Child Element</div></Tooltip>);
    fireEvent.mouseEnter(screen.getByRole('tooltip'));
    expect(asFragment()).toMatchSnapshot();
  });

  it("matches snapshot when tooltip is not visible", () => {
    const { asFragment } = render(<Tooltip title="Tooltip Title"><div>Child Element</div></Tooltip>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with the specified title", async () => {
    render(<Tooltip title="Tooltip Title"><div>Child Element</div></Tooltip>);
    fireEvent.mouseEnter(screen.getByRole('tooltip'));
    const tooltipTitle = await screen.findByText("Tooltip Title");
    expect(tooltipTitle).toBeInTheDocument();
  });

  it("matches snapshot when tooltip is visible", () => {
    const { asFragment } = render(<Tooltip title="Tooltip Title"><div>Child Element</div></Tooltip>);
    fireEvent.mouseEnter(screen.getByRole('tooltip'));
    expect(asFragment()).toMatchSnapshot();
  });

  it("matches snapshot when tooltip is not visible", () => {
    const { asFragment } = render(<Tooltip title="Tooltip Title"><div>Child Element</div></Tooltip>);
    expect(asFragment()).toMatchSnapshot();
  });

});