import React from 'react';
import { render, screen } from '@testing-library/react';
import Info from './index';

describe('Info component', () => {
  it('renders text correctly when provided', () => {
    render(<Info text="This is a test info" />);

    expect(screen.getByText('This is a test info')).toBeInTheDocument();
  });

  it('renders custom content correctly when provided', () => {
    const customContent = () => <div data-testid="custom-content">Custom Content</div>;
    render(<Info renderContent={customContent} />);

    expect(screen.getByTestId('custom-content')).toBeInTheDocument();
  });

});
