import React from "react";
import Header, { Props as HeaderProps } from "../header";
import Sidebar from "../sidebar";
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
  showGoBack,
  ...styleProps
}) => (
  <StyledScreenContainer>
    {!hideSidebar && <Sidebar />}

    {!hideHeader && (<Header
      showGoBack={showGoBack}
    />)}

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
