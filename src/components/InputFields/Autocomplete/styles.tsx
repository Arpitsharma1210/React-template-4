import { styled, css } from "styled-components";
import { Autocomplete } from "@mui/material";
import { colors } from "../../../theme/style.palette";

export const StyledAutoComplete = styled(Autocomplete)<{
  formatfor: "table" | "form";
}>`
  ${({ formatfor }) =>
    (formatfor === "table" &&
      css`
        width: 280px;
        background: ${colors.white25};
        border-radius: 10px !important;

        & .MuiInputBase-root {
          padding: 0px 38px 0px 9px !important;
        }

        & .MuiOutlinedInput-notchedOutline {
          border: 1px solid ${colors.grey25};
          border-radius: 10px !important;
        }
      `) ||
    (formatfor === "form" &&
      css`
        width: 100%;
        min-width: 368px !important;
        & .MuiInputBase-input {
          padding: 14px 19px;
          height: 30px;
        }
        & .MuiOutlinedInput-notchedOutline {
          border: 1px solid ${colors.grey100};
          border-radius: 6px !important;
        }
      `)}
`;
