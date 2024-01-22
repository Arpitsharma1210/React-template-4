import React from "react";
import {
  StyledChildrenContainer,
  StyledContainer,
  StyledContainerProps,
  StyledContentWrapper,
  StyledSideBarContainer,
} from "./styles";
import Header, {Props as HeaderProps} from '../Header';
import Sidebar from "../Sidebar";
interface Props extends StyledContainerProps, HeaderProps {
  children?: JSX.Element | JSX.Element[];
  hideHeader?: boolean;
  hideSidebar?: boolean;
  cardCss?: any;
  contentCss?: any;
}
const Container: React.FC<Props> = ({
  children,
  hideHeader,
  hideSidebar,
  navigation,
  noPadding,
  ...styleProps
}) => (
  <StyledContainer
    data-testid="container-StyledContainer-div"
    noPadding={noPadding}
    {...styleProps}
  >
    {!hideSidebar && (
      <StyledSideBarContainer>
        <Sidebar />
      </StyledSideBarContainer>
    )}
    <StyledContentWrapper noPadding={noPadding}>
      {!hideHeader && <Header navigation= {navigation} />}
      <StyledChildrenContainer>{children}</StyledChildrenContainer>
    </StyledContentWrapper>
  </StyledContainer>
);
export default Container;
