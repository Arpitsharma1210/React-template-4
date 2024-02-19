import * as React from "react";
import { Modal as MuiModal } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
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
  modalStateHandler: any;
  slider?: boolean;
  style?: {};
  onClose?: () => void;
  children?: JSX.Element | JSX.Element[];
  heading?: string;
  headingImgSrc?: string;
  subHeading?: string;
  fitContent?: boolean;
  modalOpenState?: boolean;
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
  slider,
  modalStateHandler,
  modalOpenState,
  disableClose,
  edgy,
  style,
}) => {
  const [transform, setTransform] = React.useState<string>("100%");

  const ModalCloseHandler = () => {
    if (show) {
      setTransform("100%");
      setTimeout(() => modalStateHandler(false), 500);
    } else {
      modalStateHandler(false);
    }
  };

  React.useEffect(() => {
    if (show) {
      setTransform("0%");
    }
  }, [show]);

  return (
    <MuiModal open={!!show} onClose={ModalCloseHandler}>
      {!slider ? (
        <StyledModalContentBox
          className="modal_content"
          $edgy={edgy}
          style={{ ...style }}
        >
          <StyledHeaderContainer>
          {heading && <StyledHeading variant="h3">{heading}</StyledHeading>}
          {subHeading && (
            <StyledSubHeading variant="body1">{subHeading}</StyledSubHeading>
          )}
          {headingImgSrc && (
            <StyledHeadingImgContainer>
              <StyledHeadingImg src={headingImgSrc} />
            </StyledHeadingImgContainer>
          )}
        </StyledHeaderContainer>

        <StyledCloseContainer>
          {!disableClose && <CloseIcon handleClose={ModalCloseHandler} />}
        </StyledCloseContainer>
        {children}


        </StyledModalContentBox>
      ) : (
        <StyledSliderModalContentBox
        $edgy={edgy}
        style={{ transform: `translateX(${transform})` }}
      >
        <StyledHeaderContainer>
          {heading && <StyledHeading variant="h3">{heading}</StyledHeading>}
          {subHeading && (
            <StyledSubHeading variant="body1">{subHeading}</StyledSubHeading>
          )}
          {headingImgSrc && (
            <StyledHeadingImgContainer>
              <StyledHeadingImg src={headingImgSrc} />
            </StyledHeadingImgContainer>
          )}
        </StyledHeaderContainer>

        <StyledCloseContainer>
          {!disableClose && <CloseIcon handleClose={ModalCloseHandler} />}
        </StyledCloseContainer>
        {children}
      </StyledSliderModalContentBox>
      )}

     
    </MuiModal>
  );
};

export default Modal;