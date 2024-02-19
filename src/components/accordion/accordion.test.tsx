import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Accordion from "./index";
import userEvent from "@testing-library/user-event";

const MockContentComponent: React.FC = () => <div>Test Content</div>;

describe("Accordion Tests", () => {
  it("renders Accordion with title and content", () => {
    render(
      <Accordion
        title="Test Title"
        contentComponent={<MockContentComponent />}
      />
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.queryByText("Test Content")).toBeInTheDocument();
  });

  it("expands/collapses Accordion on click", () => {
    render(
      <Accordion
        title="Test Title"
        contentComponent={<MockContentComponent />}
      />
    );

    const accordionTitle = screen.getByRole('button', { name: /Test Title/i });
    expect(screen.queryByText("Test Content")).toBeInTheDocument();

    fireEvent.click(accordionTitle);
    expect(screen.getByText("Test Content")).toBeInTheDocument();

    fireEvent.click(accordionTitle);
    expect(screen.queryByText("Test Content")).toBeInTheDocument();
  });

});
