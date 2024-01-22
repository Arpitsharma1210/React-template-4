import React from "react";
import { StyledToastContainer } from "./styles";
import SuccessIcon from "../../assets/images/successPopup.png";
import FailIcon from "../../assets/images/failPopup.png";
import CloseIcon from "../../assets/images/closeIcon2.svg";

interface Props {
  text: string;
  subText?: string;
  type: "success" | "fail";
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
    <StyledToastContainer>
      <figure>
        <img src={toastIcon} alt="toast icon" />
      </figure>
      <div className="toast-text">
        <p className="toast-text-maintext">{text}</p>
        <p className="toast-text-subtext">{subText}</p>
      </div>
      <div className="closeBtn" role="button" tabIndex={0} onClick={closeToast}>
        <img src={CloseIcon} alt="close icon" />
      </div>
    </StyledToastContainer>
  );
};

export default Toast;
