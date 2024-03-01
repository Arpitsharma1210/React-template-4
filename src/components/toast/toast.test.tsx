import React from 'react';
import { render, screen } from '@testing-library/react';
import Toast from './'; 
import '@testing-library/jest-dom';

describe('Toast Component', () => {

  it('renders text in ToastInfoText when text prop is provided', () => {
    render(<Toast text="Success Message" />);
    expect(screen.getByText("Success Message")).toBeInTheDocument();
  });

  it('renders subText in ToastInfoSubText when subText prop is provided', () => {
    render(<Toast subText="Additional Information" />);
    expect(screen.getByText("Additional Information")).toBeInTheDocument();
  });

  it('renders both text and subText when both props are provided', () => {
    render(<Toast text="Success Message" subText="Additional Information" />);
    expect(screen.getByText("Success Message")).toBeInTheDocument();
    expect(screen.getByText("Additional Information")).toBeInTheDocument();
  });

  it('matches snapshot when given props', () => {
    const { asFragment } = render(
      <Toast
        text="Success Message"
        subText="Additional Information"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
