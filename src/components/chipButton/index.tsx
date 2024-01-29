import React from "react";
import { StyledButton } from "./styles";

type ButtonColors =
  | "yellow"
  | "yellow2"
  | "green"
  | "blue"
  | "orange"
  | "red"
  | "purple"
  | "white"
  | "grey";

interface Props {
  color: ButtonColors;
  size?: "md" | "sm";
  children?: any;
  onClick?: any;
}

const ChipButton: React.FC<Props> = ({
  color,
  size = "md",
  children,
  onClick,
}) => {
  const clickHandler = (e: any) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <StyledButton onClick={clickHandler} size={size} color={color}>
      {children}
    </StyledButton>
  );
};

export default ChipButton;
