import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import React from "react";
import Accordion from "./index";
import { waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


const MockAccordion: React.FC<{
  title: string;
  contentComponent: React.ReactNode;
}> = ({ title, contentComponent }) => {
  const [expanded, setExpanded] = React.useState(false);

  jest.mock("@mui/material", () => ({
    ...jest.requireActual("@mui/material"),
    Typography: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
  }));

  return (
    <div>
      <div data-testid="accordion-title" onClick={() => setExpanded(!expanded)}>
        {title}
      </div>
      {expanded && (
        <div data-testid="accordion-content">{contentComponent}</div>
      )}
    </div>
  );
};

const MockContentComponent: React.FC = () => <div>Test Content</div>;

describe("Accordion Tests", () => {
  it("renders Accordion with title and content", () => {
    render(
      <MockAccordion
        title="Test Title"
        contentComponent={<MockContentComponent />}
      />
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.queryByText("Test Content")).not.toBeInTheDocument();
  });

  it("expands/collapses Accordion on click", () => {
    render(
      <MockAccordion
        title="Test Title"
        contentComponent={<MockContentComponent />}
      />
    );

    const accordionTitle = screen.getByTestId("accordion-title");
    expect(screen.queryByText("Test Content")).not.toBeInTheDocument();

    fireEvent.click(accordionTitle);
    expect(screen.getByText("Test Content")).toBeInTheDocument();

    fireEvent.click(accordionTitle);
    expect(screen.queryByText("Test Content")).not.toBeInTheDocument();
  });

  it("renders Accordion without content when initially collapsed", () => {
    render(
      <MockAccordion
        title="Test Title"
        contentComponent={<MockContentComponent />}
      />
    );

    expect(screen.queryByText("Test Content")).not.toBeInTheDocument();
  });

  it("renders Accordion with content when initially expanded", () => {
    render(
      <MockAccordion
        title="Test Title"
        contentComponent={<MockContentComponent />}
      />
    );

    fireEvent.click(screen.getByTestId("accordion-title"));
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("does not render Accordion content when initially collapsed and clicked twice", () => {
    render(
      <MockAccordion
        title="Test Title"
        contentComponent={<MockContentComponent />}
      />
    );

    fireEvent.click(screen.getByTestId("accordion-title"));
    fireEvent.click(screen.getByTestId("accordion-title"));
    expect(screen.queryByText("Test Content")).not.toBeInTheDocument();
  });

  it("renders Accordion in collapsed state by default", () => {
    render(
      <MockAccordion
        title="Test Title"
        contentComponent={<MockContentComponent />}
      />
    );
    expect(screen.queryByText("Test Content")).not.toBeInTheDocument();
  });

  it("expands Accordion when clicked", () => {
    render(
      <MockAccordion
        title="Test Title"
        contentComponent={<MockContentComponent />}
      />
    );

    fireEvent.click(screen.getByTestId("accordion-title"));
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("collapses Accordion when clicked twice", () => {
    render(
      <MockAccordion
        title="Test Title"
        contentComponent={<MockContentComponent />}
      />
    );

    fireEvent.click(screen.getByTestId("accordion-title"));
    fireEvent.click(screen.getByTestId("accordion-title"));
    expect(screen.queryByText("Test Content")).not.toBeInTheDocument();
  });

  it("updates expanded state correctly when clicked", () => {
    render(
      <MockAccordion
        title="Test Title"
        contentComponent={<MockContentComponent />}
      />
    );

    const accordionTitle = screen.getByTestId("accordion-title");

    fireEvent.click(accordionTitle);
    expect(screen.getByTestId("accordion-content")).toBeInTheDocument();
    expect(screen.getByTestId("accordion-title").textContent).toBe(
      "Test Title"
    );

    fireEvent.click(accordionTitle);
    expect(screen.queryByTestId("accordion-content")).not.toBeInTheDocument();
    expect(screen.getByTestId("accordion-title").textContent).toBe(
      "Test Title"
    ); 
  });

  // it("renders in collapsed state initially (async)", async () => {
  //   render(
  //     <Accordion
  //       title="Test Title"
  //       contentComponent={<MockContentComponent />}
  //     />
  //   );
  
  //   const addIcon = screen.getByTestId("add-icon");
  //   expect(addIcon).toBeInTheDocument();
  
  //   const closeIcon = screen.queryByTestId("close-icon");
  //   expect(closeIcon).not.toBeInTheDocument();
  // });
  


  it("renders CloseIcon when expanded", async () => {
    const { getByTestId } = render(
      <Accordion
        title="Test Title"
        contentComponent={<MockContentComponent />}
      />
    );

    userEvent.click(getByTestId("accordion-summary"));

    await waitFor(() => {
      const closeIcon = getByTestId("close-icon");
      expect(closeIcon).toBeInTheDocument();

      const addIcon = screen.queryByTestId("add-icon");
      expect(addIcon).not.toBeInTheDocument();
    });
  });
});
