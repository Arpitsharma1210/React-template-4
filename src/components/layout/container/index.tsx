import React from "react";
import Header, { Props as HeaderProps } from "../Header";
import Sidebar from "../Sidebar";
import Notifications from "../../notifications";
import { styled } from "styled-components";
import { colors } from "../../../theme/style.palette";
import {
  StyledContainerProps,
  StyledScreenContainer,
  StyledScreenComponentContainer,
  StyledNotificationContainer,
} from "./styles";
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
  <StyledScreenContainer>
    {!hideSidebar && <Sidebar />}
    <StyledScreenComponentContainer className="screen_comp">
      <StyledNotificationContainer>
        <Notifications />
      </StyledNotificationContainer>
      {!hideHeader && <Header navigation={navigation} />}
      {children}
    </StyledScreenComponentContainer>
  </StyledScreenContainer>
);
export default Container;
