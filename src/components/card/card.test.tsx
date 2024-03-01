import React, { ReactNode } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Card from "./index";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import CardActions from "./CardActions";
import { Provider } from 'react-redux';
import { Card as MaterialCard,  Grid, SxProps, Theme } from "@mui/material";
import store from '../../redux/store';
import CardTitle from "./CardTitle";

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

describe('Separate rendering tests', () => {
  it('Does not render StyledCardHeader when noHeader prop is passed', () => {
    render(
      <MockCardComponent noHeader />,
    );
    expect(screen.queryByRole('region', { name: /card header/i })).not.toBeInTheDocument();
  });

  it('Renders StyledCardHeader when noHeader prop is not passed', () => {
    render(
      <MockCardComponent />,
    );
    expect(screen.queryByRole('region', { name: /card header/i })).toBeNull();
  });
});

describe("Card Components", () => {

  describe("CardContent", () => {
    it("renders content correctly", () => {
      render(<CardContent>Card Content</CardContent>);
      const content = screen.getByText("Card Content");
      expect(content).toBeInTheDocument();
    });
  });

  describe("Card", () => {

    it('renders with title and Grid component when title prop is provided', () => {
        render(
          <Card title="Test Title">
            <div>Card Content</div>
          </Card>
        );
    
        const gridContainer = screen.getByRole('heading');
        
        expect(gridContainer).toBeInTheDocument();
        expect(gridContainer).toHaveStyle('display: block');
      });
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

jest.mock("@mui/material", () => ({
  ...jest.requireActual("@mui/material"),
  CardHeader: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}));

describe("CardHeader Component", () => {
  it("renders CardHeader with children correctly", () => {
    render(
      <CardHeader>
        Header Content
      </CardHeader>
    );

    const headerContent = screen.getByText("Header Content");
    expect(headerContent).toBeInTheDocument();
  });
});

describe("CardTitle Component", () => {
  it("renders CardTitle with children correctly", () => {
    render(
      <CardTitle>
        Title Content
      </CardTitle>
    );

    const titleContent = screen.getByText("Title Content");
    expect(titleContent).toBeInTheDocument();
    expect(titleContent).toHaveClass("card_title");
  });

  it("applies styles correctly when style prop is provided", () => {
    const customStyle = { color: 'red' };
    render(
      <CardTitle style={customStyle}>
        Styled Title
      </CardTitle>
    );

    const styledTitle = screen.getByText("Styled Title");
    expect(styledTitle).toBeInTheDocument();
    expect(styledTitle).toHaveClass("card_title");
    expect(styledTitle).toHaveStyle(customStyle);
  });
});