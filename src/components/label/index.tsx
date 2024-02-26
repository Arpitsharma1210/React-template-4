import React from "react";
import { Stack } from "@mui/material";
import { StyledFieldLabel, StyledLink } from "./styles";

interface Props {
  label: string;
  linkText?: string;
  to?: string;
  required?: boolean;
}

const InputLabel: React.FC<Props> = ({ label, linkText, to, required }) => {
  if (!label) {
    return <></>;
  }
  return (
    <Stack
      mb={"7px"}
      direction="row"
      gap={"20px"}
      justifyContent="space-between"
    >
      <StyledFieldLabel required={required || false}>{label}</StyledFieldLabel>
      {to && <StyledLink to={to}>{linkText}</StyledLink>}
    </Stack>
  );
};

export default InputLabel;
