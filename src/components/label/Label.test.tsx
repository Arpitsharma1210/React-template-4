import React from 'react';
import { render, screen } from '@testing-library/react';
import InputLabel from './index';
import { BrowserRouter } from 'react-router-dom';
import { StyledFieldLabel, StyledLink } from './styles';
import { colors } from '../../theme/style.palette';

describe('InputLabel component', () => {
  it('renders label without link', () => {
    render(<InputLabel label="Username" />);
    expect(screen.getByText('Username')).toBeInTheDocument();
  });

  it('renders label with link', () => {
    render(
      <BrowserRouter> {/* Wrap your component with BrowserRouter */}
        <InputLabel label="Password" linkText="Forgot Password?" to="/forgot-password" />
      </BrowserRouter>
    );
    expect(screen.getByText('Password')).toBeInTheDocument();
    expect(screen.getByText('Forgot Password?')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/forgot-password');
  });

  it('does not apply required indicator style when required prop is false', () => {
    render(<StyledFieldLabel>Email</StyledFieldLabel>);
    const fieldLabel = screen.getByText('Email');
    expect(fieldLabel).toBeInTheDocument();

    expect(fieldLabel).not.toHaveStyle('color: red'); 
  });
});
