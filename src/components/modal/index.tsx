import * as React from "react";
import { Modal as MuiModal} from "@mui/material";
import {
  StyledModalContentBox,
  StyledCloseIcon,
  closeIconContainerStyles,
  StyledSliderModalContentBox,
} from "./styles";
import CloseIconImg from "../../assets/images/closeIcon.svg";

interface Props {
  disableClose?: boolean;
  edgy?: boolean;
  modalOpenState: boolean;
  modalStateHandler: any;
  children: any;
  slider?: boolean;
  style?: {};
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
  edgy,
  slider,
  disableClose,
  modalOpenState,
  modalStateHandler,
  children,
  style,
}) => {
  const [transform, setTransform] = React.useState<string>("100%");

  const ModalCloseHandler = () => {
    if (slider) {
      setTransform("100%");
      setTimeout(() => modalStateHandler(false), 500);
    } else {
      modalStateHandler(false);
    }
  };

  /* slide in on modal open*/
  React.useEffect(() => {
    if (slider && modalOpenState) {
      setTransform("0%");
    }
  }, [modalOpenState]);

  return (
    <MuiModal open={modalOpenState} onClose={ModalCloseHandler}>
      {!slider ? (
        <StyledModalContentBox
          className="modal_content"
          $edgy={edgy}
          style={{ ...style }}
        >
          {!disableClose && <CloseIcon handleClose={ModalCloseHandler} />}
          {children}
        </StyledModalContentBox>
      ) : (
        <StyledSliderModalContentBox
          className="modal_content"
          $edgy={edgy}
          style={{
            ...style,
            transform: `translateX(${transform})`,
          }}
        >
          {!disableClose && <CloseIcon handleClose={ModalCloseHandler} />}
          {children}
        </StyledSliderModalContentBox>
      )}
    </MuiModal>
  );
};

export default Modal;
