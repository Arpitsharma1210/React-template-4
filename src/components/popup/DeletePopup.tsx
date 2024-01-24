import * as React from "react";
import { Stack } from "@mui/material";
import deleteIcon from "../../assets/images/deletePopup.png";
import { ModalWrapper, Button } from "../";

import {
  ContentWrapper,
  ContentMain,
  StyledIconContainer,
  StyledIcon,
  PopupText,
  PopupMsgText,
} from "./styles";
import messages from "../../messages";

interface Props {
  modalOpenState: boolean;
  modalStateHandler: any;
  onClickSecondary: any;
  onClickPrimary: any;
}

const DeletePopup: React.FC<Props> = ({
  modalOpenState,
  modalStateHandler,
  onClickSecondary,
  onClickPrimary,
}) => {
  return (
    <ModalWrapper
      modalOpenState={modalOpenState}
      modalStateHandler={modalStateHandler}
    >
      <ContentWrapper className="content_wrapper">
        <ContentMain>
          <StyledIconContainer>
            <StyledIcon src={deleteIcon} alt="modal mark" />
          </StyledIconContainer>
          <PopupText $smallText={true}>
            {messages?.popup?.deleteTextMessage}
          </PopupText>
          <PopupMsgText>{messages?.popup?.deleteConfirmation}</PopupMsgText>
          <Stack direction="row" gap="25px" justifyContent="space-around">
            <Button variant="outlined" onClick={onClickSecondary}>
              {messages?.button?.inactive}
            </Button>
            <Button bold={true} onClick={onClickPrimary}>
              {messages?.button?.delete}
            </Button>
          </Stack>
        </ContentMain>
      </ContentWrapper>
    </ModalWrapper>
  );
};

export default DeletePopup;
