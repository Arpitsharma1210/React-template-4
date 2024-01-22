import { styled, css } from "styled-components";
import { DatePicker } from "@mui/x-date-pickers";
import { colors } from "../../../theme/style.palette";

export const StyledDatePicker = styled(DatePicker)<{ formatfor?: "form" }>`
  ${({ formatfor }) =>
    formatfor === "form" &&
    css`
      width: 368px;

      .MuiInputBase-input {
        height: 30px;
        padding: 14px 19px;
      }
      
      & .MuiOutlinedInput-notchedOutline {
        border: 1px solid ${colors.grey100};
        border-radius: 6px !important;
      }
    `}
`;
