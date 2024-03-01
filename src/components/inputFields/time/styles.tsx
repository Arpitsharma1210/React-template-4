import { styled, css } from "styled-components";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { brand, colors } from "../../../theme/style.palette";

export const StyledTimePicker = styled(TimePicker)<{
  formatfor?: "formmini" | "form";
}>`
  ${({ formatfor }) =>
    formatfor === "formmini" &&
    css`
      &.MuiFormControl-root {
        width: 180px;
      }

      & .MuiOutlinedInput-notchedOutline {
        border-radius: 6px;
        border: 1px solid ${brand.secondaryMain};
      }
    `}
  ${({ formatfor }) =>
    formatfor === "form" &&
    css`    
    &.MuiFormControl-root {
      width: 368px;
    }

    & .MuiOutlinedInput-notchedOutline {
      border-radius: 6px;
      border: 1px solid ${colors.grey100};
    }
  }`}
`;
