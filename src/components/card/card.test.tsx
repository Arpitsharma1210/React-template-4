import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Card from "./index";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import CardActions from "./CardActions";
import { StyledCardHeader } from "./styles";

import { Provider } from 'react-redux';
import { SxProps, Theme } from '@mui/material';
import store from '../../redux/store';

interface Props {
    children?: JSX.Element | JSX.Element[];
    header?: JSX.Element | JSX.Element[];
    cardCss?: SxProps<Theme>;
    contentCss?: SxProps<Theme>;
    headerCss?: React.CSSProperties;
    noHeader?: boolean;
    title?: string;
    noHeaderPadding?: boolean;
}

const MockCardComponent: React.FC<Props> = (props: Props) => (
  <Provider store={store}>
    <Card {...props} />
  </Provider>
);

describe('Card tests', () => {
  beforeEach(() => {
    render(
      <MockCardComponent />,
    );
  });

  describe('Display tests', () => {
    it('render StyledCard without crashing', () => {
      expect(screen.getByTestId('card')).toBeInTheDocument();
    });
  });
});

describe('Separate rendering tests', () => {
  it('Does not render StyledCardHeader when noHeader prop is passed', () => {
    render(
      <MockCardComponent noHeader />,
    );
    expect(screen.queryByTestId('card-header')).not.toBeInTheDocument();
  });

  it('Renders StyledCardHeader when noHeader prop is not passed', () => {
    render(
      <MockCardComponent />,
    );
    expect(screen.queryByTestId('styled-card-header')).toBeInTheDocument();
  });
});

describe("Card Components", () => {
  describe("CardHeader", () => {
    it("renders header text correctly", async () => {
        render(<CardHeader>{"123"}</CardHeader>);
      
        await waitFor(() => {
          const cardHeaderContent = screen.getByTestId("card-header").querySelector(".MuiCardHeader-content");
          expect(cardHeaderContent.textContent).toBe("");
        });
    });  
  });

  describe("CardContent", () => {
    it("renders content correctly", () => {
      render(<CardContent>Card Content</CardContent>);
      const content = screen.getByText("Card Content");
      expect(content).toBeInTheDocument();
    });
  });

  describe("CardActions", () => {
    it("renders actions correctly", () => {
      render(
        <CardActions>
          <button>Button 1</button>
          <button>Button 2</button>
        </CardActions>
      );
      const button1 = screen.getByText("Button 1");
      const button2 = screen.getByText("Button 2");
      expect(button1).toBeInTheDocument();
      expect(button2).toBeInTheDocument();
    });  
  });

  describe("Card", () => {
    it("renders without crashing", () => {
      render(<Card />);
      const card = screen.getByTestId("card");
      expect(card).toBeInTheDocument();
    });

    it('renders with title and Grid component when title prop is provided', () => {
        render(
          <Card title="Test Title">
            <div>Card Content</div>
          </Card>
        );
    
        const gridContainer = screen.getByTestId('grid-container');
        
        expect(gridContainer).toBeInTheDocument();
        expect(gridContainer).toHaveStyle('display: flex');
        expect(gridContainer).toHaveStyle('align-items: center');
        expect(gridContainer).toHaveStyle('justify-content: space-between');
      });
  });

  describe("StyledCardHeader component", () => {
    it('applies noHeaderPadding style when noHeaderPadding prop is true', () => {
        render(<MockCardComponent noHeaderPadding />);
        const cardHeader = screen.getByTestId('card');
        expect(cardHeader).toHaveStyle('padding: 0px !important');
      });
  });
});
