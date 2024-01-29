import * as React from "react";
import successIcon from "../../assets/images/successPopup.png";
import failIcon from "../../assets/images/failPopup.png";
import { ModalWrapper } from "../";

import {
    ContentWrapper,
    ContentMain,
    StyledIconContainer,
    StyledIcon,
    PopupText,
} from "./styles";

interface Props {
    success: boolean;
    modalOpenState: boolean;
    modalStateHandler: any;
    children: string;
}

const InfoPopup: React.FC<Props> = ({
    success,
    modalOpenState,
    modalStateHandler,
    children,
}) => {
    const iconLink = success ? successIcon : failIcon;
    return (
        <ModalWrapper
            modalStateHandler={modalStateHandler}
            disableClose={true}
        >
            <ContentWrapper $disableClose={true} className="content_wrapper">
                <ContentMain $center={true}>
                    <StyledIconContainer
                        $margin={true}
                        className="modalIconContainer"
                    >
                        <StyledIcon src={iconLink} alt="modal mark" />
                    </StyledIconContainer>
                    <PopupText>{children}</PopupText>
                </ContentMain>
            </ContentWrapper>
        </ModalWrapper>
    );
};

export default InfoPopup;
