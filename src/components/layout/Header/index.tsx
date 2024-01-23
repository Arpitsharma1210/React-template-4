import React from "react";
import { useHistory } from "react-router-dom";
import { Chip } from "@mui/material";
import { Button, ChipButton } from "../..";

import {
  StyledComponentContainer,
  StyledNavigationContainer,
  StyledHeaderTextContainer,
  StyledHeader,
  StyledButtonsContainer,
} from "./styles";
import messages from "../../../messages";

type Buttons = {
  name: string;
  handler: any;
  logo?: any;
  onClick?: any;
};

export interface Props {
  children?: any;
  navigation?: boolean;
  openButton?: boolean;
  openButtonOnClick?: any;
  chipData?: string;
  buttons?: Buttons[];
  onClick?: (event: MouseEvent) => void;
}

export const Header: React.FC<Props> = ({
  children,
  navigation = false,
  openButton,
  openButtonOnClick,
  chipData,
  buttons,
  onClick,
}) => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <StyledComponentContainer>
      <header>
        {navigation && (
          <StyledNavigationContainer>
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
