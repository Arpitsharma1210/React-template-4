import * as React from "react";
import { Modal as MuiModal } from "@mui/material";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {
  StyledModalContentBox,
  StyledCloseIcon,
  closeIconContainerStyles,
  StyledSliderModalContentBox,
  StyledCloseContainer,
  StyledContainer,
  StyledHeaderContainer,
  StyledHeading,
  StyledHeadingImg,
  StyledHeadingImgContainer,
  StyledSubHeading,
} from "./styles";
import { colors } from "../../theme/style.palette";
import CloseIconImg from "../../assets/images/closeIcon.svg";
import Card from "../card";

interface Props {
  show?: boolean;
  disableClose?: boolean;
  edgy?: boolean;
  modalStateHandler?: any;
  slider?: boolean;
  style?: {};
  onClose?: () => void;
  children?: JSX.Element | JSX.Element[];
  heading?: string;
  headingImgSrc?: string;
  subHeading?: string;
  fitContent?: boolean;
}

const CloseIcon: React.FC<{ handleClose: any }> = ({ handleClose }) => (
  <div style={closeIconContainerStyles} className="modal_icon">
    <StyledCloseIcon
      onClick={handleClose}
      src={CloseIconImg}
      alt="close icon"
    />
  </div>
);

const Modal: React.FC<Props> = ({
  show,
  children,
  onClose,
  heading,
  subHeading,
  fitContent,
  headingImgSrc,
}) => {

  return (
    <MuiModal
        open={!!show}
        onClose={onClose}
    >
        <StyledContainer fitContent={fitContent}>
            <Card
                contentCss={{
                    overflowY: 'auto',
                    maxHeight: 'calc(100vh - 300px)'
                }}
                header={(
                    <StyledHeaderContainer>
                        {heading && <StyledHeading variant="h3">
                            {heading}
                        </StyledHeading>}
                        {subHeading && <StyledSubHeading variant="body1">
                            {subHeading}
                        </StyledSubHeading>}
                        {headingImgSrc && (
                            <StyledHeadingImgContainer>
                                <StyledHeadingImg src={headingImgSrc}/>
                            </StyledHeadingImgContainer>
                        )}
                        <StyledCloseContainer onClick={onClose}>
                            <CloseRoundedIcon
                                style={{
                                    color: colors.grey100
                                }}
                            />
                        </StyledCloseContainer>
                    </StyledHeaderContainer>
                )}
            >
                {children}
            </Card>
        </StyledContainer>
    </MuiModal>
)
};

export default Modal;
