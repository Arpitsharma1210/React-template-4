import React from "react";
import { render, screen } from "@testing-library/react";
import { TruncatedText } from "../../components";

//test ids
const ctaContainer = "ctaContainer";

describe("Truncated text component", () => {
  it("renders without crashing", () => {
    render(<TruncatedText />);
  });

  it("disables loadMore when hideLoadMore is true", () => {
    render(<TruncatedText text="some text" hideLoadMore />);
    expect(screen.queryByTestId(ctaContainer)).toBeNull();
  });
});