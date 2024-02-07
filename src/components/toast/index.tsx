import React from "react";
import { StyledToastContainer } from "./styles";
import SuccessIcon from "../../assets/images/successPopup.png";
import FailIcon from "../../assets/images/failPopup.png";
import CloseIcon from "../../assets/images/closeIcon2.svg";

interface Props {
  text?: string;
  subText?: string;
  type?: "success" | "fail";
  closeToast?: any;
}

const Toast: React.FC<Props> = ({
  text,
  subText,
  type = "success",
  closeToast,
}) => {
  const toastIcon = type === "success" ? SuccessIcon : FailIcon;

  return (
    <StyledToastContainer data-testid="toastContainer">
      <figure>
        <img src={toastIcon} alt="toast icon" data-testid="toastIconContainer"/>
      </figure>
      <div className="toast-text">
        <p className="toast-text-maintext" data-testid="toastInfoText">{text}</p>
        <p className="toast-text-subtext" data-testid="toastInfoSubText">{subText}</p>
      </div>
      <div className="closeBtn" role="button" tabIndex={0} onClick={closeToast}>
        <img src={CloseIcon} alt="close icon" />
      </div>
    </StyledToastContainer>
  );
};

export default Toast;
