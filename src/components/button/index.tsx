import React from "react";
import { StyledButtonTextWrapper } from "./styles";
import { Button } from "@mui/material";
interface Props {
  children?: any;
  variant?: "text" | "outlined" | "contained";
  bold?: boolean;
  onClick?: any;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  label?: string;
  style?: React.CSSProperties;
}

const MuiButton: React.FC<Props> = ({
  children,
  variant,
  bold = false,
  onClick,
  type,
  disabled,
  label,
  style,
  ...props
}) => {
  const clickHandler = (e: any) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Button
      onClick={clickHandler}
      variant={variant || "contained"}
      type={type || "button"}
      disabled={disabled}
      {...props}
    >
      <StyledButtonTextWrapper
        className={`bold_btnText_${bold}`}
        $bold={bold.toString()}
      >
        {children}
      </StyledButtonTextWrapper>
    </Button>
  );
};

export default MuiButton;
