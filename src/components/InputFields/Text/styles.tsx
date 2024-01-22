import { styled, css } from "styled-components";
import { TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material/";
import { colors } from "../../../theme/style.palette";
import { respondTo } from "../../../theme/style.layout"

const IconCss = () => css`
  height: 24px;
  width: 24px;
  color: ${colors.black};
  
`;

export const VisibileIcon = styled(Visibility)`
  ${IconCss()}
`;

export const InvisibileIcon = styled(VisibilityOff)`
  ${IconCss()}
`;

export const StyledTextField = styled(TextField)<{
  formatfor: "auth" | "password" | "form";
}>`
  ${({ formatfor }) =>
    ((formatfor === "auth" || formatfor === "password") &&
      css`
        width: 395px;
        & .MuiInputBase-input {
          padding: 20px;
          height: 25px;
          ${respondTo.extSm} {
            height: 20px;
          }
        }
        & .MuiOutlinedInput-notchedOutline {
          border: 1px solid ${colors.grey5};
          border-radius: 5px !important;
        }

        ${respondTo.extSm} {
         width: auto;
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
