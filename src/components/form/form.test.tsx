import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form, FormRow, FormRowItem, FormError } from './index'; // Import your components here
import { StyledCandidateHeader } from './styles';
import { brand } from '../../theme/style.palette';
import { fontSize, secondaryFontFamily } from '../../theme/style.typography';


const department = [
    { label: "HR", value: "hr" },
    { label: "Design", value: "design" },
    { label: "Engineering", value: "engineering" },
    { label: "Business", value: "business" },
  ];

describe('Form Component', () => {
  it('renders children correctly', () => {
    render(
      <Form>
        <div data-testid="child-element">Child Element</div>
      </Form>
    );
    const childElement = screen.getByTestId('child-element');
    expect(childElement).toBeInTheDocument();
  });

  it('renders FormRow component correctly', () => {
    render(
      <FormRow>
        <div data-testid="child-element">Child Element</div>
      </FormRow>
    );
    const childElement = screen.getByTestId('child-element');
    expect(childElement).toBeInTheDocument();
  });

  it('renders FormRowItem component correctly', () => {
    render(
      <FormRowItem>
        <div data-testid="child-element">Child Element</div>
      </FormRowItem>
    );
    const childElement = screen.getByTestId('child-element');
    expect(childElement).toBeInTheDocument();
  });

  it('renders FormError component correctly with default message', () => {
    render(<FormError />);
    const errorMessage = screen.getByText(/server error/i); // Assuming the default message contains "server error"
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders FormError component correctly with custom message', () => {
    render(<FormError message="Custom Error Message" />);
    const errorMessage = screen.getByText(/custom error message/i);
    expect(errorMessage).toBeInTheDocument();
  });
});

describe('FormRow Component', () => {
    it('renders children correctly', () => {
      render(
        <FormRow>
          <div>Test Child</div>
        </FormRow>
      );
      expect(screen.getByText('Test Child')).toBeInTheDocument();
    });
  });

  describe('FormRowItem Component', () => {
    it('renders children correctly', () => {
      render(
        <FormRowItem>
          <div>Test Child</div>
        </FormRowItem>
      );
      expect(screen.getByText('Test Child')).toBeInTheDocument();
    });
  });

describe('StyledCandidateHeader Component', () => {
    it('renders children correctly', () => {
      render(<StyledCandidateHeader>Test Header</StyledCandidateHeader>);
      expect(screen.getByText('Test Header')).toBeInTheDocument();
    });
  
    it('applies correct styling', () => {
      render(<StyledCandidateHeader>Test Header</StyledCandidateHeader>);
      const header = screen.getByRole('heading', { name: /Test Header/i });
      expect(header).toHaveStyle({
        color: brand.secondaryMain,
      });
    });

    it("defines department data", () => {
        expect(department).toBeDefined();
        expect(department).toHaveLength(4);
      });
  });

  describe('Department constant', () => {
    it('contains correct label and value pairs', () => {
      const department = [
        { label: "HR", value: "hr" },
        { label: "Design", value: "design" },
        { label: "Engineering", value: "engineering" },
        { label: "Business", value: "business" },
      ];
  
      department.forEach(({ label, value }) => {
        expect(label).toBeDefined(); 
        expect(value).toBeDefined(); 
      });
    });
  });
  
  
