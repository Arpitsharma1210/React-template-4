import { styled, css } from "styled-components";
import { Select } from "@mui/material";
import { colors } from "../../../theme/style.palette";

export const StyledSelect = styled(Select)<{
  formatfor: "form" | "table" | "formmini" | "auth";
}>`
  ${({ formatfor }) =>
    (formatfor === "form" &&
      css`
        width: 368px !important;

        & .MuiInputBase-input {
          display: flex;
          align-items: center;
          padding: 14px 19px;
          height: 30px !important;
          border-radius: 6px !important;
        }

        & .MuiSvgIcon-root {
          color: ${colors.grey100};
        }

        & .MuiOutlinedInput-notchedOutline {
          border: 1px solid ${colors.grey100};
          border-radius: 6px !important;
        }
      `) ||
    (formatfor === "table" &&
      css`
        width: 200px;
        background: ${colors.white25};
        border-radius: 10px !important;

        & .MuiInputBase-input {
          display: flex;
          align-items: center;
          font-size: 14px;
          padding: 5px 15px !important;
          height: 28px !important;
        }

        & .MuiOutlinedInput-notchedOutline {
          border: none;
        }
      `) ||
    (formatfor === "formmini" &&
      css`
        width: 179px !important;

        & .MuiInputBase-input {
          display: flex;
          align-items: center;
          padding: 14px 19px;
          height: 30px !important;
          border-radius: 6px !important;
        }

        & .MuiSvgIcon-root {
          color: ${colors.grey100};
        }

        & .MuiOutlinedInput-notchedOutline {
          border: 1px solid ${colors.grey100};
          border-radius: 6px !important;
        }
      `) ||
      (formatfor === "auth" &&
      css`
        width: 395px !important;

        & .MuiInputBase-input {
          display: flex;
          align-items: center;
          padding: 20px !important;
          height: 25px !important;
          border-radius: 6px !important;
        }

        & .MuiSvgIcon-root {
          color: ${colors.grey100};
        }

        & .MuiOutlinedInput-notchedOutline {
          border: 1px solid ${colors.grey5};
          border-radius: 5px !important;
        }
      `)
    }
`;
