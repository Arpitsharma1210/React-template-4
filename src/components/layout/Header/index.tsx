import React from "react";
import { useHistory } from "react-router-dom";
import { Chip } from "@mui/material";
import { Button, ChipButton } from "../..";
import { usePopupReducer } from '../../../hooks';
import { useDispatch } from 'react-redux';
import { goBack, push } from 'connected-react-router';
import {
  StyledComponentContainer,
  StyledNavigationContainer,
  StyledHeaderTextContainer,
  StyledHeader,
  StyledButtonsContainer,
  StyledGoBackContainer,
} from "./styles";
import messages from "../../../messages";

type Buttons = {
  name: string;
  handler: any;
  logo?: any;
  onClick?: any;
};

export interface Props {
  heading?: string;
  headingCount?:(string | number);
  showCount?: boolean;
  showGoBack?: boolean;
  children?: any;
  navigation?: boolean;
  openButton?: boolean;
  openButtonOnClick?: any;
  chipData?: string;
  buttons?: Buttons[];
  onClick?: (event: MouseEvent) => void;
}

export const Header: React.FC<Props> = ({
  heading, headingCount,
    showCount, showGoBack,
  children,
  navigation = false,
  openButton,
  openButtonOnClick,
  chipData,
  buttons,
  onClick,
}) => {
  const history = useHistory();

  const reduxDispatch = useDispatch();

  const {
    visibility: formVisibility,
    showPopup: showForm,
    hidePopup: hideForm
} = usePopupReducer();

  return (
    <StyledComponentContainer>
      <header>
        {navigation && (
          <StyledNavigationContainer>
             {showGoBack && <StyledGoBackContainer
                    onClick={() => {
                       reduxDispatch(goBack())
                    }}
                >
                    
                </StyledGoBackContainer>}
            <Button onClick={goBack} variant="text">
              &lt; {messages?.button?.back}
            </Button>
          </StyledNavigationContainer>
        )}

        <StyledHeaderTextContainer>
          <StyledHeader>
            <h2>{children}</h2>{" "}
            {openButton && (
              <ChipButton onClick={openButtonOnClick} color="green">
                {messages?.button?.open}
              </ChipButton>
            )}
          </StyledHeader>
          {chipData && (
            <aside>
              {/* <Chip
                icon={<img src={Calendar} alt="Calendar" />}
                label={chipData}
              /> */}
            </aside>
          )}
        </StyledHeaderTextContainer>
      </header>

      <StyledButtonsContainer>
        {buttons?.map((item) => (
          <Button key={item.name} onClick={item.handler}>
            {item?.logo}
            {item.name}
          </Button>
        ))}
      </StyledButtonsContainer>
    </StyledComponentContainer>
  );
};

export default Header;
