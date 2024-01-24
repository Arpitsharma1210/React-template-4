import * as React from "react";
import warningIcon from "../../assets/images/warningPopup.png";
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
    children: string;
    msg?: string | undefined;
    onClick: any;
}

const WarningPopup: React.FC<Props> = ({
    modalOpenState,
    modalStateHandler,
    children,
    msg = undefined,
    onClick,
}) => {
    const confirmHandler = (e: any) => {
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <ModalWrapper
            modalOpenState={modalOpenState}
            modalStateHandler={modalStateHandler}
        >
            <ContentWrapper className="content_wrapper">
                <ContentMain>
                    <StyledIconContainer>
                        <StyledIcon src={warningIcon} alt="modal mark" />
                    </StyledIconContainer>
                    <PopupText>{children}</PopupText>
                    {msg && <PopupMsgText>&#8220;{msg}&#8221;</PopupMsgText>}
                    <Button onClick={confirmHandler}>{messages?.button?.confirm}</Button>
                </ContentMain>
            </ContentWrapper>
        </ModalWrapper>
    );
};

export default WarningPopup;
