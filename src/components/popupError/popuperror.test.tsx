import { render, screen, fireEvent } from "@testing-library/react";
import { PopupError } from "../../components";
import userEvent from "@testing-library/user-event";
import React from "react";

// test ids
const popupError = "popupError";
const mockEvent = {
  currentTarget: document.createElement("button"),
};

describe("Popup Error Component", () => {
    it("applies forwarded anchorEl and renders successfully", () => {
      render(<PopupError anchorEl={<p>sometexthere</p> as unknown as HTMLElement} />); // Explicitly cast JSX element as HTMLElement
      expect(screen.getByTestId("popupError")).toBeInTheDocument();
    });
  
    it("renders message through props", () => {
      render(
        <PopupError anchorEl={<p>somethinghere</p> as unknown as HTMLElement} message="some message" /> // Explicitly cast JSX element as HTMLElement
      );
      expect(screen.getByText("some message")).toBeInTheDocument();
    });
  });