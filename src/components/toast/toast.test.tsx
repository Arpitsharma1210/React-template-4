import { render, screen } from "@testing-library/react";
import React from "react";
import { Toast } from "../../components";

// Test ids
const toastContainer = "toastContainer";
const toastIconContainer = "toastIconContainer";
const toastIcon = "toastIcon";
const toastInfoContainer = "toastInfoContainer";
const toastInfoText = "toastInfoText";
const toastInfoSubText = "toastInfoSubText";

describe("Toast Component", () => {
  it("renders without crashing", () => {
    render(<Toast />);
    expect(screen.getByTestId(toastContainer)).toBeInTheDocument();
  });

  it("renders text in ToastInfoText when text prop is provided", () => {
    render(<Toast text="Success Message" />);
    expect(screen.getByTestId(toastInfoText)).toBeInTheDocument();
    expect(screen.getByText("Success Message")).toBeInTheDocument();
  });

  it("renders subText in ToastInfoSubText when subText prop is provided", () => {
    render(<Toast subText="Additional Information" />);
    expect(screen.getByTestId(toastInfoSubText)).toBeInTheDocument();
    expect(screen.getByText("Additional Information")).toBeInTheDocument();
  });

  it("renders both text and subText when both props are provided", () => {
    render(<Toast text="Success Message" subText="Additional Information" />);
    expect(screen.getByTestId(toastInfoText)).toBeInTheDocument();
    expect(screen.getByTestId(toastInfoSubText)).toBeInTheDocument();
    expect(screen.getByText("Success Message")).toBeInTheDocument();
    expect(screen.getByText("Additional Information")).toBeInTheDocument();
  });

  it("does not render ToastInfoText when text prop is not provided", () => {
    render(<Toast />);
    expect(screen.queryByTestId(toastInfoText)).toBeNull();
  });

  it("does not render ToastInfoText when text prop is not provided", () => {
    render(<Toast />); 
    expect(screen.queryByTestId(toastInfoText)).toBeNull();
  });

  it("does not crash when both text and subText aren't provided", () => {
    render(<Toast />);
    expect(screen.getByTestId(toastIconContainer)).toBeInTheDocument();
  });
});