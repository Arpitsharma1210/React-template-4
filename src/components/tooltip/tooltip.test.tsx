import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Tooltip } from "../../components";

// Test ids
const tooltip = "tooltip";

describe("Tooltip Component", () => {
    it("renders without crashing", () => {
        render(
          <Tooltip title="Tooltip Title">
            <div>Child Element</div>
          </Tooltip>
        );
        expect(screen.getByTestId(tooltip)).toBeInTheDocument();
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

//   it("renders child without title", () => {
//     render(<Tooltip><div>Hello</div></Tooltip>);
//     expect(screen.getByText("Hello")).toBeInTheDocument();
//   });

//   it("renders without child and title", () => {
//     render(<Tooltip />);
//     expect(screen.getByTestId(tooltip)).toBeInTheDocument();
//   });

  it("renders with the specified title", async () => {
    render(<Tooltip title="Tooltip Title"><div>Child Element</div></Tooltip>);
    fireEvent.mouseEnter(screen.getByTestId(tooltip));
    await screen.findByText("Tooltip Title");
    expect(screen.getByText("Tooltip Title")).toBeInTheDocument();
  });
});